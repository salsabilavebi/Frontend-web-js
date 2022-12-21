import {BrowserRouter, Routes, Route} from "react-router-dom";

import NavbarComp from "./components/NavbarComp";
import KaryawanList from "./components/KaryawanList";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<NavbarComp/>}/>
      <Route path="/karyawanlist" element={<KaryawanList/>}/>
       
      </Routes>
      </BrowserRouter>
      
    </div>
    
    
  );
}

export default App;
