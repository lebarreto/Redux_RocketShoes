import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

import '~/config/ReactotronConfig';
import Routes from '~/routes';
import store from './store';
import Navigation from './services/navigation';

function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Routes ref={navigator => Navigation.setNavigator(navigator)} />
    </Provider>
  );
}

export default App;
