import {useState} from 'react'
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const deleteHandler = () => {
        setModalIsOpen(true)
    }
    const closeModalHandler = () => {
        setModalIsOpen(false)
    }

    return (
        <div className='card'>
            <h1>{props.text}</h1>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen ? <Modal onClick={closeModalHandler}/> : null}
            {modalIsOpen ? <Backdrop onClick={closeModalHandler}/> : null}
        </div>
    )
}

export default Todo;