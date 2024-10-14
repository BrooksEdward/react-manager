import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Welcome } from '@/views/welcome'
import LoginFC from '@/views/login'
import { Error403 } from '@/views/403'
import { Error404 } from '@/views/404'

const routes = [
  {
    path: '/',
    element: <Welcome />
  },
  {
    path: '/login',
    element: <LoginFC />
  },
  {
    path: '/403',
    element: <Error403 />
  },
  {
    path: '/404',
    element: <Error404 />
  },
  {
    path: '*',
    element: <Navigate to={'/404'} />
  }
]

const router = createBrowserRouter(routes)
export default router
