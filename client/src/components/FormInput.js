import React from 'react'

function FormInput({ inputChange, inputSubmit, valueForm }) {
  return (
    <form className="form-input" method="post" onSubmit={ inputSubmit }>
      <div className="input-action">
        <input 
          name="title" 
          placeholder="Ingin Melakukan Apa?"
          onChange={ inputChange }
          value={ valueForm.title }
        />
        <button 
          className="fas fa-arrow-right"
          type="submit"
        >
        </button>
      </div>
      <p className="github">
        Kunjungi <a href="https://github.com/febriadj/mern-to-heroku">GitHub</a>, Untuk Melihat Kode Program
      </p>
    </form>
  )
}

export default FormInput