import { Spin } from 'antd'
import './loading.less'

export default function Loading({ tip = 'Loading' }: { tip?: string }) {
  return (
    <Spin size='large' tip={tip} className='request-loading'>
      <div className='content' />
    </Spin>
  )
}
