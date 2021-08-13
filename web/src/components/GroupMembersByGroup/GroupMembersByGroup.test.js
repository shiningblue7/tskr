import { render } from '@redwoodjs/testing'

import GroupMembersByGroup from './GroupMembersByGroup'

describe('GroupMembersByGroup', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupMembersByGroup />)
    }).not.toThrow()
  })
})
