// Todo Type
interface ITodo {
  _id: string
  name: string
  description: string
  status: boolean
  createdAt?: string
  updatedAt?: string
}
// Todo Property
interface TodoProps {
  todo: ITodo
}
// Api Type for Date
type ApiDataType = {
  message: string
  status: string
  todos: ITodo[]
  todo?: ITodo
}
