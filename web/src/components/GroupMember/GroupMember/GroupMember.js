import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_GROUP_MEMBER_MUTATION = gql`
  mutation DeleteGroupMemberMutation($id: Int!) {
    deleteGroupMember(id: $id) {
      id
    }
  }
`

/*const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}*/

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

/*const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}*/

const GroupMember = ({ groupMember }) => {
  const [deleteGroupMember] = useMutation(DELETE_GROUP_MEMBER_MUTATION, {
    onCompleted: () => {
      toast.success('GroupMember deleted')
      navigate(routes.groupMembers())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete groupMember ' + id + '?')) {
      deleteGroupMember({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            GroupMember {groupMember.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{groupMember.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(groupMember.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(groupMember.updatedAt)}</td>
            </tr>
            <tr>
              <th>User</th>
              <td>{groupMember.user.name}</td>
            </tr>
            <tr>
              <th>Group</th>
              <td>{groupMember.group.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editGroupMember({ id: groupMember.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(groupMember.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default GroupMember
