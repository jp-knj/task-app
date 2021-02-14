import React from 'react'

const Todo: React.FC = () => {

  return (
    <div className='Card'>
      <div className='Card--text'>
        <h1 className=''>Name</h1>
        <span className=''>Description</span>
      </div>
      <div className='Card--button'>
        <button className='Card--button__done'>
          Complete
        </button>
        <button className='Card--button__delete'>
          Delete
        </button>
      </div>
    </div>
  )
}

export default Todo
