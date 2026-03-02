import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import HTMLtoJSX from 'htmltojsx'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const projectRoot = path.resolve(__dirname, '..')
const templateRoot = path.resolve(projectRoot, '..')
const pageSourceCandidates = [templateRoot, path.resolve(templateRoot, 'New folder')]
const pageSourceRoot = pageSourceCandidates.find((candidate) =>
  fs.existsSync(path.resolve(candidate, 'index.php')),
)

if (!pageSourceRoot) {
  throw new Error('Unable to locate PHP page source directory (missing index.php).')
}
const pagesDir = path.resolve(projectRoot, 'src', 'pages')
const templateAssetsDir = path.resolve(templateRoot, 'assets')
const publicAssetsDir = path.resolve(projectRoot, 'public', 'assets')

const pageDefinitions = [
  { phpFile: 'index.php', route: '/', componentName: 'HomePage', outputFile: 'HomePage.jsx' },
  {
    phpFile: 'index2.php',
    route: '/home-2',
    componentName: 'HomeTwoPage',
    outputFile: 'HomeTwoPage.jsx',
  },
  {
    phpFile: 'index3.php',
    route: '/home-3',
    componentName: 'HomeThreePage',
    outputFile: 'HomeThreePage.jsx',
  },
  { phpFile: 'about.php', route: '/about', componentName: 'AboutPage', outputFile: 'AboutPage.jsx' },
  {
    phpFile: 'service.php',
    route: '/service',
    componentName: 'ServicePage',
    outputFile: 'ServicePage.jsx',
  },
  {
    phpFile: 'service-details.php',
    route: '/service-details',
    componentName: 'ServiceDetailsPage',
    outputFile: 'ServiceDetailsPage.jsx',
  },
  {
    phpFile: 'project.php',
    route: '/project',
    componentName: 'ProjectPage',
    outputFile: 'ProjectPage.jsx',
  },
  {
    phpFile: 'project-details.php',
    route: '/project-details',
    componentName: 'ProjectDetailsPage',
    outputFile: 'ProjectDetailsPage.jsx',
  },
  { phpFile: 'blog.php', route: '/blog', componentName: 'BlogPage', outputFile: 'BlogPage.jsx' },
  {
    phpFile: 'blog-details.php',
    route: '/blog-details',
    componentName: 'BlogDetailsPage',
    outputFile: 'BlogDetailsPage.jsx',
  },
  { phpFile: 'doctor.php', route: '/doctor', componentName: 'DoctorPage', outputFile: 'DoctorPage.jsx' },
  {
    phpFile: 'doctor-details.php',
    route: '/doctor-details',
    componentName: 'DoctorDetailsPage',
    outputFile: 'DoctorDetailsPage.jsx',
  },
  {
    phpFile: 'pricing.php',
    route: '/pricing',
    componentName: 'PricingPage',
    outputFile: 'PricingPage.jsx',
  },
  {
    phpFile: 'contact.php',
    route: '/contact',
    componentName: 'ContactPage',
    outputFile: 'ContactPage.jsx',
  },
]

const phpToRouteMap = Object.fromEntries(pageDefinitions.map((page) => [page.phpFile, page.route]))
const converter = new HTMLtoJSX({ createClass: false })

function resolveIncludePath(includePath, currentFile) {
  const fromTemplateRoot = path.resolve(templateRoot, includePath)
  if (fs.existsSync(fromTemplateRoot)) {
    return fromTemplateRoot
  }

  const fromCurrentDir = path.resolve(path.dirname(currentFile), includePath)
  if (fs.existsSync(fromCurrentDir)) {
    return fromCurrentDir
  }

  throw new Error(`Include not found: ${includePath} (from ${currentFile})`)
}

function executePhpBlock(code, context, currentFile, stack) {
  let output = ''
  const tokenRegex = /\$(\w+)\s*=\s*(["'])([\s\S]*?)\2\s*;?|require_once\(\s*['"]([^'"]+)['"]\s*\)\s*;?|echo\s+\$(\w+)\s*;?/g

  for (const match of code.matchAll(tokenRegex)) {
    const [, variable, , value, includePath, echoVariable] = match

    if (variable) {
      context[variable] = value
      continue
    }

    if (includePath) {
      const includeFile = resolveIncludePath(includePath, currentFile)
      output += renderPhpFile(includeFile, context, stack)
      continue
    }

    if (echoVariable) {
      output += context[echoVariable] ?? ''
    }
  }

  return output
}

function renderPhpFile(filePath, context, stack = []) {
  const absoluteFile = path.resolve(filePath)

  if (stack.includes(absoluteFile)) {
    throw new Error(`Recursive include detected: ${absoluteFile}`)
  }

  const content = fs.readFileSync(absoluteFile, 'utf8')
  const phpRegex = /<\?php([\s\S]*?)\?>/g

  let result = ''
  let cursor = 0
  const nextStack = [...stack, absoluteFile]

  for (const match of content.matchAll(phpRegex)) {
    const index = match.index ?? 0
    const [fullMatch, code] = match

    result += content.slice(cursor, index)
    result += executePhpBlock(code, context, absoluteFile, nextStack)
    cursor = index + fullMatch.length
  }

  result += content.slice(cursor)
  return result
}

function rewriteAssetsAndLinks(html) {
  let updated = html

  updated = updated.replace(/<!-- Preloader Start -->[\s\S]*?(<!-- Start Cursor Pointer -->)/i, '$1')
  updated = updated.replace(/(["'(])assets\//g, '$1/assets/')

  for (const [phpFile, route] of Object.entries(phpToRouteMap)) {
    const escaped = phpFile.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
    const linkRegex = new RegExp(`(["'])${escaped}(["'])`, 'g')
    updated = updated.replace(linkRegex, `$1${route}$2`)
  }

  return updated
}

function extractPageParts(fullHtml) {
  const titleMatch = fullHtml.match(/<title>([\s\S]*?)<\/title>/i)
  const bodyTagMatch = fullHtml.match(/<body[^>]*>/i)
  const bodyClassMatch = fullHtml.match(/<body[^>]*class=["']([^"']*)["'][^>]*>/i)
  const bodyMatch = fullHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i)

  const title = titleMatch ? titleMatch[1].replace(/\bPHP\b/gi, 'React').trim() : 'Medizen'
  const bodyClass = bodyClassMatch ? bodyClassMatch[1].trim() : ''
  const bodyContent = bodyMatch ? bodyMatch[1] : ''

  if (!bodyTagMatch) {
    throw new Error('Missing <body> tag in rendered HTML.')
  }

  const withoutScripts = bodyContent.replace(/<script[\s\S]*?<\/script>/gi, '')
  const normalizedHtml = rewriteAssetsAndLinks(withoutScripts).trim()

  return { title, bodyClass, html: normalizedHtml }
}

function indentBlock(text, spaces) {
  const padding = ' '.repeat(spaces)
  return text
    .split('\n')
    .map((line) => (line ? `${padding}${line}` : line))
    .join('\n')
}

function writePageComponent(definition, pageParts) {
  const jsxMarkup = converter.convert(pageParts.html)
  const componentSource = [
    "import PageLayout from '../components/layout/PageLayout'",
    '',
    `const PAGE_TITLE = ${JSON.stringify(pageParts.title)}`,
    `const BODY_CLASS = ${JSON.stringify(pageParts.bodyClass)}`,
    '',
    `function ${definition.componentName}() {`,
    '  return (',
    '    <PageLayout title={PAGE_TITLE} bodyClass={BODY_CLASS}>',
    indentBlock(jsxMarkup, 6),
    '    </PageLayout>',
    '  )',
    '}',
    '',
    `export default ${definition.componentName}`,
    '',
  ].join('\n')

  const filePath = path.resolve(pagesDir, definition.outputFile)
  fs.writeFileSync(filePath, componentSource)
}

function generateReactPages() {
  fs.mkdirSync(path.dirname(publicAssetsDir), { recursive: true })
  fs.cpSync(templateAssetsDir, publicAssetsDir, { recursive: true, force: true })

  for (const definition of pageDefinitions) {
    const context = {}
    const sourceFilePath = path.resolve(pageSourceRoot, definition.phpFile)
    const renderedHtml = renderPhpFile(sourceFilePath, context)
    const pageParts = extractPageParts(renderedHtml)

    writePageComponent(definition, pageParts)
  }

  console.log(`Generated ${pageDefinitions.length} React page components in ${pagesDir}`)
  console.log(`Synced assets into ${publicAssetsDir}`)
}

generateReactPages()
