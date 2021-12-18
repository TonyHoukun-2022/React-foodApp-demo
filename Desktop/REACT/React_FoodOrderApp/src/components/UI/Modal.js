import style from "./Modal.module.css"
import ReactDOM from "react-dom"
const Backdrop = (props) => {
  return <div onClick={props.onClose} className={style.backdrop}></div>
}
const ModalOverlay = (props) => {
  return (
    <div className={style.modal}>
      <div className={style.content}>{props.children}</div>
    </div>
  )
}
const portalElements = document.getElementById("overlays")
const Modal = (props) => {
  return (
    <>
      {/* use Portal to move the Backdrop and Modaloverlay to root div #overlays in index.html */}
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElements)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElements)}
    </>
  )
}
export default Modal
