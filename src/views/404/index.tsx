import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

export function Error404() {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/')
  }
  return (
    <Result
      status='404'
      title='404'
      subTitle='抱歉, 您访问的页面不存在.'
      extra={
        <Button type='primary' onClick={handleBack}>
          返回主页
        </Button>
      }
    />
  )
}
