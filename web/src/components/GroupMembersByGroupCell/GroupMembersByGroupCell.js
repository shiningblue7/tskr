import GroupMembers from 'src/components/GroupMember/GroupMembers'
import GroupMembersLayout from 'src/layouts/GroupMembersLayout'
export const beforeQuery = (props) => {
  //console.log('variables', props)
  props.id = props.groupID.id
  return {
    variables: props,
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  }
}

export const QUERY = gql`
  query getGroupMembersFromGroup($id: Int!) {
    groupMembers: groupMembersByGroup(id: $id) {
      id
      createdAt
      updatedAt
      userId
      groupId
      user {
        name
        id
      }
      group {
        name
        id
        createdAt
        updatedAt
        description
      }
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ groupMembers }) => {
  //return <div>{JSON.stringify(groupMembers)}</div>

  return (
    <GroupMembersLayout>
      <GroupMembers groupMembers={groupMembers} />
    </GroupMembersLayout>
  )
}
