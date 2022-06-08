import RootElement from './router';
import { ContextApi } from './context/contextApi';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <ContextApi.Provider value={{'sujestao':['lala', 'la']}}>  
        <RootElement />
    </ContextApi.Provider>
  );
}

export default App;
