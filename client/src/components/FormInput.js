import React from 'react'

function FormInput({ inputChange, inputSubmit, valueForm }) {
  return (
    <form className="form-input" method="post" onSubmit={ inputSubmit }>
      <input 
        name="title" 
        placeholder="Apa Judul Kegiatannya?"
        onChange={ inputChange }
        value={ valueForm.title }
      />
      <button type="submit">Tambah</button>
    </form>
  )
}

export default FormInput