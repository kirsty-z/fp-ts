import Home from '@/pages/Index'
import paths from '@routes/pathMap'
import { Outlet, RouteObject } from 'react-router-dom'
import Page404 from '@/pages/common/Page404'
import Jotai from '@/pages/jotai/Jotai'
import ClockOne from '@/pages/jotai/ClockOne'
import ClockTwo from '@/pages/jotai/ClockOneTwo'
import SwitchArticle from '@/pages/jotai/SwitchArticle'
import TicTacToe from '@/pages/jotai/TicTacToe'
import AtomFamily from '@/pages/jotai/AtomFamily'
import { Webgl2 } from '@/pages/webgl2'

const routes: RouteObject = {
  path: paths.home,
  element: <Outlet />,
  children: [
    {
      path: paths.home,
      element: <Home />
    },
    {
      path: paths.jotai.index,
      element: <Outlet />,
      children: [
        {
          path: paths.jotai.index,
          element: <Jotai />
        },
        {
          path: paths.jotai.clock.index,
          element: <ClockOne />
        },
        {
          path: paths.jotai.clock.about,
          element: <ClockTwo />
        },
        {
          path: paths.jotai.switchArticle,
          element: <SwitchArticle />
        },
        {
          path: paths.jotai.ticTacToe,
          element: <TicTacToe />
        },
        {
          path: paths.jotai.atomFamily,
          element: <AtomFamily />
        }
      ]
    },
    {
      path: paths.webgl2.index,
      element: <Outlet />,
      children: [
        {
          path: paths.webgl2.index,
          element: <Webgl2 />
        },
      ]
    },
    {
      path: paths[404],
      element: <Page404 />
    }
  ]
}

export default routes
