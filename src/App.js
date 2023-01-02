import {BrowserRouter, Routes, Route} from "react-router-dom";

import NavbarComp from "./components/NavbarComp";
import KaryawanList from "./components/KaryawanList";
import AddKaryawan from "./components/AddKaryawan";
import EditKaryawan from "./components/EditKaryawan";
import AdmComp from "./components/AdmComp";
import Login from "./components/Login";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<NavbarComp/>}/>
      <Route path="karyawanlist" element={<KaryawanList/>}/>
      <Route path="addkaryawan" element={<AddKaryawan/>}/>
      <Route path="editkaryawan/:id" element={<EditKaryawan/>}/>
      <Route path="admlist" element={<AdmComp/>}/>
      <Route path="login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
    
    
  );
}

export default App;
