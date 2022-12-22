import {BrowserRouter, Routes, Route} from "react-router-dom";

import NavbarComp from "./components/NavbarComp";
import KaryawanList from "./components/KaryawanList";
import AddKaryawan from "./components/AddKaryawan";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<NavbarComp/>}/>
      <Route path="/karyawanlist" element={<KaryawanList/>}/>
      <Route path="/addkaryawan" element={<AddKaryawan/>}/>
       
      </Routes>
      </BrowserRouter>
      
    </div>
    
    
  );
}

export default App;
