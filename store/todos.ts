import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { Todo } from '~/types'

@Module({ name: 'todos', stateFactory: true, namespaced: true })
export default class TodosModule extends VuexModule {
  list: Todo[] = []

  @Mutation
  add(text: string) {
    this.list.push({
      text,
      done: false
    })
  }

  @Mutation
  remove(todo: Todo) {
    this.list.splice(this.list.indexOf(todo), 1)
  }

  @Mutation
  toggle(todo: Todo) {
    todo.done = !todo.done
  }
}
