/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import TodosModule from '~/store/todos'

let todosStore: TodosModule

function initialiseStores(store: Store<any>): void {
  todosStore = getModule(TodosModule, store)
}

export { initialiseStores, todosStore }
