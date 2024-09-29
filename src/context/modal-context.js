// Importing createContext, useContext, and useState from React library.

//createContext - Използва се за създаване на контекстен обект, който може да се използва за споделяне на стойности между компоненти без да се предават пропсове ръчно през всеки компонент.

// useContext - Използва се в компонентите за достъп до контекста, който е предоставен от Context.Provider.

// useState - : Използва се за създаване на състояние в обекта и предоставя функция за обновление на това състояние.


import { createContext, useContext, useState } from 'react'

// Creating a new context for the modal with default values.
const ModalContext = createContext();

// Defining a provider component for the ModalContext that wraps around other components.
export const ModalProvider = ({children}) => {
    // Creating a state variable `showModal` to track whether the modal is visible or not.
    const [showModal, setShowModal] = useState(false);

    // Function to set `showModal` to true (show the modal).
    const showModalHandler = () => {
        setShowModal(true);
    }

    // Function to set `showModal` to false (hide the modal).
    const closeModalHandler = () => {
        setShowModal(false);
    }

    // Providing the modal state and handler functions to the rest of the app through the context provider.
    return <ModalContext.Provider value={{showModal, showModalHandler, closeModalHandler}}>{children}</ModalContext.Provider>
}

// Custom hook to access the modal context values from anywhere in the app.
export const useModalContext = () => {
    return useContext(ModalContext);
}
