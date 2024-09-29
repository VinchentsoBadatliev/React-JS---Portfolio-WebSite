import ReactDOM from 'react-dom/client'
import App from './App';
import { ModalProvider } from './context/modal-context';
import { ThemeProvider } from './context/theme-context';
import './index.css'


// Using ReactDOM.createRoot to create a root element for the React application, associated with the HTML element with id 'root'.
const root = ReactDOM.createRoot(document.querySelector('#root'));

// Rendering the main React application into the root element.
root.render(
    <ThemeProvider>
        {/* ThemeProvider provides context for the application's theme to all its child components. */}
        <ModalProvider>
            {/* ModalProvider provides context for managing the modal window to all its child components. */}
            <App/>
            {/* App is the main component of the application, which will be rendered inside both ThemeProvider and ModalProvider. */}
        </ModalProvider>
    </ThemeProvider>
);
