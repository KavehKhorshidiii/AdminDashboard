import './deleteModal.css'
import ReactDOM from 'react-dom'

export default function deleteModal() {
  return ReactDOM.createPortal(

      <div className="delete-modal">
        <h1>Are You Sur?</h1>
        <div className='modal-btn-container'>
            <button className='modal-btn yes-btn'>Yes</button>
            <button className='modal-btn cancel-btn'>Cancel</button>
        </div>
      </div> , document.getElementById("modal")
  )
}
