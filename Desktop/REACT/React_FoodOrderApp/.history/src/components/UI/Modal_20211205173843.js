import style from "./Modal.module.css"
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
            <Backdrop></Backdrop>
            <ModalOverlay>{ props.children}</ModalOverlay>
        </>
    )
}
export default Modal
