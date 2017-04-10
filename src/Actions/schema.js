import { schema } from 'normalizr'
// schema is a constructor used to normalize shape of responces of api

// creates a schema for single todo
export const todo = new schema.Entity('todos')
// creates a schema for all todos
export const arrayOfTodos = new Array(todo)
