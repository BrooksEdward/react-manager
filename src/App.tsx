import './App.css'
import Router from '@/router'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b'
          // colorText: '#333333',
          // colorBgContainer: '#fff',
          // colorBgLayout: '#f0f2f5',
          // colorBgElevated: '#fff',
          // colorBorder: '#d9d9d9',
          // colorBorderSecondary: '#d9d9d9',
          // colorTextSecondary: '#666666',
          // colorTextDisabled: '#999999',
          // colorTextPlaceholder: '#999999'
        }
      }}
    >
      <RouterProvider router={Router} />
    </ConfigProvider>
  )
}

export default App
