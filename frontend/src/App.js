import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './navigation';
import {History} from './history';
import { Characters } from './characters';


function App() {
  return (
    
    <div className="App">
      <ResponsiveAppBar />
      <BrowserRouter>
      <Routes>  
     

        <Route path="/history" element={<History />}>
        </Route>

        <Route path="/characters" element={<Characters />}>
          
        </Route>
      </Routes>
      
      </BrowserRouter>
     
      
      
       
      
       
    
    </div>
  );
}

export default App;
