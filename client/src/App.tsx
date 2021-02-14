import React from 'react'

// Components
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'

const App: React.FC = () => {

return (
    <main className='App'>
      <h1>My Todos</h1>
        <AddTodo/>
        <TodoItem/>
    </main>
  )
}

export default App;
