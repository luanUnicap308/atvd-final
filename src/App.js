import RootElement from './router';
import { ContextApi } from './context/contextApi';

function App() {
  return (
    <ContextApi.Provider value={{'sujestao':['lala', 'la']}}>  
        <RootElement />
    </ContextApi.Provider>
  );
}

export default App;
