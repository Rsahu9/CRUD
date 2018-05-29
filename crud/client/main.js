import React from 'react';
import meteor from 'meteor/meteor';
import ReactDOM from 'react-dom';

import App from '../imports/ui/App.js';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('render-target'));
});
