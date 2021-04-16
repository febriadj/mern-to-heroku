import React from 'react'

function TableList({ result, deleteTodo }) {
  function created() {
    const date = new Date(result.createdAt)
    return date.toLocaleDateString('id-ID', {
      weekday: 'short', day: '2-digit', month: 'short', year: 'numeric',  // tanggal bulan dan tahun
      hour: '2-digit', minute: '2-digit',                                 // jam dan menit
      timeZone: 'Asia/Jakarta', timeZoneName: 'short'                     // zona waktu
    })
  }

  return (
    <div className="card">
      <div className="card-info">
        <h2 className="title">{ result.title }</h2>
        <p className="created-at">{ created() }</p>
      </div>
      <div className="card-action">
        <button
          className="fas fa-trash"
          value={ result._id }
          onClick={ deleteTodo }
        >
        </button>
      </div>
    </div>
  )
}

export default TableList