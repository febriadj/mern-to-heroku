import React, { useEffect, useState } from 'react'
import FormInput from './components/FormInput'
import TableList from './components/TableList'

export default function App() {
  const [todolist, setTodoList] = useState([])
  const [uploadTodo, setUploadTodo] = useState({ title: '' })

  useEffect(() => showTodo(), [])

  async function showTodo() {
    try {
      const response = await fetch('http://localhost:8080/api/todo', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })

      if (!response.ok) throw new Error('kesalahan saat menampilkan todo list')
  
      const responseJson = response.json()
      const result = await responseJson
  
      setTodoList(result)
    }
    catch(err) {
      console.error(err)
    }
  }

  function handleChange(event) {
    const { name, value } = event.target
    setUploadTodo((prev) => ({ ...prev, [name]: value }))   
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const result = await fetch('/api/todo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(uploadTodo)
      })
  
      showTodo() // me-render ulang halaman
      setUploadTodo(prev => ({ ...prev, title: '' })) // menghapus value inputan
      
      return result
    }
    catch(err) {
      console.error(err)
    }
  }

  return (
    <div className="todoapp">
      <div className="todoapp-wrap">
        <FormInput 
          inputChange={ (event) => handleChange(event) } 
          inputSubmit={ (event) => handleSubmit(event) }
          valueForm={ uploadTodo }
        />
        { 
          todolist.map((result, index) => {
            return <TableList 
              key={ index }
              result={ result }
            />
          })
        }
      </div>
    </div>
  )
}