import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import storeFactory from './redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router } from 'react-router-dom'

const store = storeFactory()

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
