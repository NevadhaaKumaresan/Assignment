/* eslint-disable react/react-in-jsx-scope */
import { TaskComponent } from './Component/Organism/TaskComponent/TaskComponent';
import { StoreProvider } from './store';
import { initialState, taskReducer } from './Component/Molecules/Reducer/TaskReducer';

function App() {
  return (
  // eslint-disable-next-line react/react-in-jsx-scope
  <StoreProvider initialState={initialState} reducer={taskReducer}>
  <TaskComponent />
</StoreProvider>
  );
}

export default App;
