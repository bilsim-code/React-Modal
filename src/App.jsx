import { useState } from 'react';
import './Modal.css';
import { FaCircleXmark } from 'react-icons/fa6';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button className='modal-btn' onClick={() => setShowModal(true)}>Click here to sign in</button>
      <div className={`modal ${showModal ? 'modalShow' : ''}`}>
        {showModal && (
          <form className='form'>
            <h2>Login</h2>
            <label htmlFor="name">Name: </label>
            <input type="text" id='name' placeholder='Enter your name' />
            <label htmlFor="email">Email: </label>
            <input type="email" id='email' placeholder='Enter email' />
            <label htmlFor="password">Password: </label>
            <input type="password" id='password' placeholder='Enter password' />
            <button>Login</button>
            <FaCircleXmark className='close-btn' onClick={() => setShowModal(false)} />
          </form>
        )}
      </div>
    </div>
  );
}

export default Modal;
