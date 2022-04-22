import React from 'react';
import { Button } from "./components/Button";
import Globalstyles from "./styles/globalstyles";

function App() {
  return (
   
      <div>
        <Button>BUTTON</Button>
        <Button color="secondary">CLICK HERE</Button>
        <Button disabled={true}>DISABLED</Button>
      </div>
    
    
  );
}


export default App;
