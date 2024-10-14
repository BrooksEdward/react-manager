import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

export function Error403() {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/')
  }
  return (
    <Result
      status='403'
      title='403'
      subTitle='抱歉, 您未被授权访问此页面.'
      extra={
        <Button type='primary' onClick={handleBack}>
          返回主页
        </Button>
      }
    />
  )
}
