// web/src/layouts/BlogLayout/BlogLayout.js

import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const StandardLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser, hasRole } = useAuth()

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
                <a onClick={logOut}>Log Out {currentUser.name}</a>
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
