import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const GroupsLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.groups()} className="rw-link">
            Groups
          </Link>
        </h1>
        <Link to={routes.newGroup()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Group
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default GroupsLayout
