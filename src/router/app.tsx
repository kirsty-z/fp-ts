import Login from '../page/common/Login'
import Page404 from '@pages/common/Page404'
import index from './index'
import m from './paths'
import { RouteObject } from 'react-router-dom'
const routes: RouteObject[] = [
  index,
  {
    path: m.login,
    element: <Login />
  },
  {
    path: m[404],
    element: <Page404 />
  }
]
export default routes
