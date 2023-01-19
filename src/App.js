import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import KaryawanList from "./components/KaryawanList";
import AddKaryawan from "./components/AddKaryawan";
import EditKaryawan from "./components/EditKaryawan";
import AdmComp from "./components/AdmComp";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Jabar from "./components/Jabar";
import Jakarta from "./components/Jakarta";
import Banten from "./components/Banten";

import GaleriComp from "./components/GaleriComp";
import AddGaleri from "./components/AddGaleri";
import GaleriList from "./components/GaleriList";
import KabBogor from "./components/KabBogor";
//import Coba from "./components/Coba";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<NavbarComp/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="karyawan" element={<KaryawanList/>}/>
      <Route path="addkaryawan" element={<AddKaryawan/>}/>
      <Route path="editkaryawan/:id" element={<EditKaryawan/>}/>
      <Route path="admlist" element={<AdmComp/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="jabar" element={<Jabar/>}/>
      <Route path="jakarta" element={<Jakarta/>}/>
      <Route path="banten" element={<Banten/>}/>
      <Route path="kabbogor" element={<KabBogor/>}/>
      <Route path="galeri" element={<GaleriComp/>}/>
      <Route path="galerilist" element={<GaleriList/>}/>
      <Route path="addgaleri" element={<AddGaleri/>}/>
    
      </Routes>
      </BrowserRouter>
      
    </div>
    
    
  );
}

export default App;
