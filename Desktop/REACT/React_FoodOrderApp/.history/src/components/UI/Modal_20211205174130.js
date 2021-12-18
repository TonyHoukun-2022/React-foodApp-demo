import style from "./Modal.module.css"
import ReactDOM from "react-dom"
const Backdrop = (props) => {
    return (
        <div className={style.backdrop}></div>
    )
}
const ModalOverlay = (props) => {
    return (
        <div className={style.modal}>
            <div className={style.content}>{ props.children}</div>
        </div>
    )
}
const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop>)}
            {ReactDOM.createPortal(<ModalOverlay/>)}
        </>
    )
}
export default Modal
