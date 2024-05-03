import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { useLocation, useOutlet } from 'react-router-dom'
import { routes } from '../Routing/router'
import Layout from '@/components/common/Layout'
import '../../App.css'

export const TransitionAnimation = () => {
  const location = useLocation()
  const outlet = useOutlet()
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {}

  return (
    <Layout>
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={300}
          classNames='page'
          unmountOnExit
        >
          {() => (
            <div
              ref={nodeRef}
              className='page h-[88%] sm:h-[80%] overflow-hidden'
            >
              {outlet}
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </Layout>
  )
}
