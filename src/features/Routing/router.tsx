import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../../pages/Home'
import { Blogs } from '../../pages/Blogs'
import { ErrorBoundary } from './errorBoundary/ErrorBoundry'
import { Projects } from '@/pages/Projects'
import { TransitionAnimation } from '../TransitionAnimations/TransitionAnimations'
import { createRef } from 'react'
import { NotFoundPage } from '@/pages/404'
import { Project } from '@/pages/Project'

export const routes = [
  {
    path: '/',
    name: 'home',
    element: <HomePage />,
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: '/blog',
    name: 'blog',
    element: <Blogs />,
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: '/projects',
    name: 'projects',
    element: <Projects />,
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: '/projects/:name',
    name: 'project',
    element: <Project />,
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: '/*',
    name: '404',
    element: <NotFoundPage />,
    nodeRef: createRef<HTMLDivElement>(),
  },
]

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TransitionAnimation />,

    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
    errorElement: <ErrorBoundary />,
  },
])
