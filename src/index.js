import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import './css/servicebot--layout.css'
import './css/servicebot--form-elements.css'
import './css/servicebot--text-elements.css'
import './css/servicebot--colors.css'
import App from './App';
import { AppContainer } from 'react-hot-loader'

// ReactDOM.render(<App />, document.getElementById('root'));

export const init = (config) => {
    ReactDOM.render(<App config={config} />, config.selector);
};

if (module.hot) {
    module.hot.accept('./App.js', () => {
        const NextApp = require('./App.js').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp/>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}