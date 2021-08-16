/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
// web/src/layouts/BlogLayout/BlogLayout.js

import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const StandardLayout = ({ children }) => {
  const { logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>
                <em>Home</em>
              </Link>
            </li>
            {!isAuthenticated && (
              <li>
                <Link to={routes.signup()}>
                  <em>Signup</em>
                </Link>
              </li>
            )}
            <li>
              {isAuthenticated && currentUser && (
                <a onClick={logOut}>
                  <span alt={JSON.stringify(currentUser)}>
                    Log Out {currentUser.name}
                  </span>
                </a>
              )}
              {!isAuthenticated && <Link to={routes.login()}>Log In</Link>}
            </li>
          </ul>
        </nav>
      </header>

      {isAuthenticated && (
        <aside>
          <ul>
            <li>
              <Link to={routes.users()}>Users</Link>
            </li>
            <li>
              <Link to={routes.groups()}>Groups</Link>
            </li>
            <li>
              <Link to={routes.tasks()}>Tasks</Link>
            </li>
          </ul>
        </aside>
      )}
      <main>
        <article>{children}</article>
      </main>
      <footer>
        <ul>
          <li>
            Made with{' '}
            <span role="img" aria-label="rockets">
              🚀
            </span>{' '}
            and{' '}
            <span role="img" aria-label="trees">
              🌴
            </span>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default StandardLayout
