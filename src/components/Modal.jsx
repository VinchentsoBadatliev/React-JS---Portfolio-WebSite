import { Fragment } from "react"
import ReactDOM from 'react-dom'
import Card from "./Card"
import { useModalContext } from "../context/modal-context"
import './modal.css'


// Defining a functional component Modal that accepts two props: className and children.
const Modal = ({className, children}) => {
  // Using the useModalContext hook to get showModal and closeModalHandler functions from the context.
  const {showModal, closeModalHandler} = useModalContext();

  return (
      <Fragment>
          {
              // Checking if showModal is true. If so, creating a portal for the modal.
              showModal && ReactDOM.createPortal(
                  <>
                      {/* A section element with id "backdrop" that darkens the background and closes the modal when clicked. */}
                      <section id="backdrop" onClick={closeModalHandler}></section>
                      {/* Rendering the Card component, which contains the content of the modal. */}
                      <Card className={className}>{children}</Card>
                  </>,
                  // The portal's target is the HTML element with id "overlays", where the modal will be placed.
                  document.querySelector('#overlays')
              )
          }
      </Fragment>
  )
}

// Exporting the Modal component so it can be used in other parts of the application.
export default Modal