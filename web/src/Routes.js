// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'
import TasksLayout from 'src/layouts/TasksLayout'
import UsersLayout from 'src/layouts/UsersLayout'
import StandardLayout from './layouts/StandardLayout/StandardLayout'
import { useAuth } from '@redwoodjs/auth'

const Routes = () => {
  const { hasRole, currentUser } = useAuth()
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Set wrap={StandardLayout}>
      <Route path="/" page={HomePage} name="home" />
      <Private unauthenticated="home">
        <Set wrap={TasksLayout}>
          <Route path="/tasks/new" page={TaskNewTaskPage} name="newTask" />
          <Route path="/tasks/{id:Int}/edit" page={TaskEditTaskPage} name="editTask" />
          <Route path="/tasks/{id:Int}" page={TaskTaskPage} name="task" />
          <Route path="/tasks" page={TaskTasksPage} name="tasks" />
        </Set>

        <Set wrap={UsersLayout}>
          <Route path="/users/new" page={UserNewUserPage} name="newUser" />
          <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
          <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
          <Route path="/users" page={UserUsersPage} name="users" />
        </Set>
      </Private>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
