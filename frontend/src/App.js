
import {ResponsiveAppBar}from './navigation';
import {History} from './history';
import { Characters } from './characters';
import { Locations } from './locations';

function App() {
  return (
    
    <div className="App">
      <ResponsiveAppBar />
     <History />
      <Characters />
      <Locations />
       
      
       
    
    </div>
  );
}

export default App;
