
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { TaskContainer } from './Component/Task/TaskContainer';
import Sample from './Sample';

function App() {
  return (
    <Provider store={store}>
    <TaskContainer />
  </Provider>
  );
}

export default App;
