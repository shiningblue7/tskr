// web/src/layouts/BlogLayout/BlogLayout.js

import { Link, routes } from '@redwoodjs/router'

const StandardLayout = ({ children }) => {
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
            <li>
              <a href="/#">Login</a>
            </li>
          </ul>
        </nav>
      </header>

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
