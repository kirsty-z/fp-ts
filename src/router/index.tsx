import Home from '../page/Index'
import Page404 from '../page/common/Page404'
import paths from './paths'
import { Outlet, RouteObject } from 'react-router-dom'
const routes: RouteObject = {
  path: paths.home,
  element: <Outlet />,
  children: [
    {
      path: paths.home,
      element: <Home />
    },
    {
      path: paths[404],
      element: <Page404 />
    }
  ]
}

export default routes
