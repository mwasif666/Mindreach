import { useState } from 'react'
import { Skeleton } from 'antd'

function AppImage({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  skeletonClassName = '',
  loading = 'lazy',
  onLoad,
  onError,
  ...imgProps
}) {
  const [loadedSrc, setLoadedSrc] = useState('')
  const isLoaded = loadedSrc === src

  return (
    <span className={`app-image${isLoaded ? ' is-loaded' : ''}${wrapperClassName ? ` ${wrapperClassName}` : ''}`}>
      <span className={`app-image__skeleton mindreach-ant-skeleton${skeletonClassName ? ` ${skeletonClassName}` : ''}`} aria-hidden="true">
        <Skeleton.Image active />
      </span>
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        onLoad={(event) => {
          setLoadedSrc(src)
          onLoad?.(event)
        }}
        onError={(event) => {
          setLoadedSrc(src)
          onError?.(event)
        }}
        {...imgProps}
      />
    </span>
  )
}

export default AppImage
