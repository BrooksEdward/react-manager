import loginStyles from './index.module.less'
import { Button, Form, FormProps, Input, message } from 'antd'
import api from '@/api'
import { Login, ResultDataToken } from '@/types/api.ts'
import storage from '@/utils/storage.ts'

export default function LoginFC() {
  const onFinish = async (values: Login.params) => {
    console.log('Success:', values)
    const res = (await api.login(values)) as ResultDataToken
    storage.set('token', res.token)
    message.success('登录成功')
    const params = new URLSearchParams(location.search)
    location.href = params.get('callback') || '/'
  }

  const onFinishFailed: FormProps<Login.params>['onFinishFailed'] = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className={loginStyles.login}>
      <div className={loginStyles.loginWrapper}>
        <div className={loginStyles.title}>系统登录</div>
        <Form
          name='basic'
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item<Login.params> name='userName' rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item<Login.params> name='passPwd' rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
