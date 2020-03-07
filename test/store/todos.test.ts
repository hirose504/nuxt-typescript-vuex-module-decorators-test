import { createStore } from '~/.nuxt/store'
import { initialiseStores, todosStore } from '~/utils/store-accessor'

describe('TodosModule', () => {
  beforeEach(() => {
    initialiseStores(createStore())
  })

  test('init', () => {
    expect(todosStore.list).toEqual([])
  })

  test('add', () => {
    todosStore.add('test')
    expect(todosStore.list).toEqual([{ text: 'test', done: false }])
  })

  test('remove', () => {
    todosStore.add('aaaa')
    todosStore.add('bbbb')
    todosStore.add('cccc')
    todosStore.remove(todosStore.list[1])
    expect(todosStore.list).toEqual([
      { text: 'aaaa', done: false },
      { text: 'cccc', done: false }
    ])
  })

  test('toggle', () => {
    todosStore.add('aaaa')
    todosStore.add('bbbb')
    todosStore.add('cccc')
    todosStore.toggle(todosStore.list[1])
    expect(todosStore.list).toEqual([
      { text: 'aaaa', done: false },
      { text: 'bbbb', done: true },
      { text: 'cccc', done: false }
    ])
  })
})
