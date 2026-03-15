import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

function AppBootLoader() {
  return (
    <div className="app-boot-loader" aria-hidden="true">
      <div className="app-boot-loader__panel">
        <img src="/assets/img/logo/logo.svg" alt="MindReach logo" className="app-boot-loader__logo" />
        <Spin
          size="large"
          indicator={<LoadingOutlined spin />}
        />
      </div>
    </div>
  )
}

export default AppBootLoader
