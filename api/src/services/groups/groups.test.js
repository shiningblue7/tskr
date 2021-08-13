import { groups, group, createGroup, updateGroup, deleteGroup } from './groups'

describe('groups', () => {
  scenario('returns all groups', async (scenario) => {
    const result = await groups()

    expect(result.length).toEqual(Object.keys(scenario.group).length)
  })

  scenario('returns a single group', async (scenario) => {
    const result = await group({ id: scenario.group.one.id })

    expect(result).toEqual(scenario.group.one)
  })

  scenario('creates a group', async () => {
    const result = await createGroup({
      input: {
        updatedAt: '2021-08-13T19:04:07Z',
        name: 'String',
        description: 'String',
      },
    })

    expect(result.updatedAt).toEqual('2021-08-13T19:04:07Z')
    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a group', async (scenario) => {
    const original = await group({ id: scenario.group.one.id })
    const result = await updateGroup({
      id: original.id,
      input: { updatedAt: '2021-08-14T19:04:07Z' },
    })

    expect(result.updatedAt).toEqual('2021-08-14T19:04:07Z')
  })

  scenario('deletes a group', async (scenario) => {
    const original = await deleteGroup({ id: scenario.group.one.id })
    const result = await group({ id: original.id })

    expect(result).toEqual(null)
  })
})
