import ReactDOM from "react-dom/client";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/redux-store';
import './index.scss';


const rootElement = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

rootElement.render(
    <Provider store={store}>
        <App />
    </Provider>);

reportWebVitals();
