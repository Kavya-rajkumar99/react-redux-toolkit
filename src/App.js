import './App.css';
import {Provider} from 'react-redux';
import {store} from './app/store'
import { CakeContainer } from './components/CakeContainer';
import { IcecreamContainer } from './components/IcecreamContainer';
import {UserContainer} from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <UserContainer/>
      <CakeContainer />
      <IcecreamContainer />
    </div>
    </Provider>
  );
}

export default App;
