import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import SubscriptionForm from './components/SubscriptionForm';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <App />
    <App />

    <SubscriptionForm
      submitForm={(formData) => {
        // this callbach fires on 'SUBSCRIBE' button click
        console.log(formData);
      }}
      link1={{
        name: '@lynnetye',
        href: 'https://www.facebook.com/'
      }}
      link2={{
        name: '@keyvaluesio',
        href: 'https://www.facebook.com/'
      }}
    />

  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
