
import NavbarComp from "./components/NavbarComp";
import HeroComp from "./components/HeroComp";
import AvpComp from "./components/AvpComp";
import KegiatanComp from "./components/KegiatanComp";
import TeamComp from "./components/TeamComp";
import TestimoniComp from "./components/TestimoniComp";
import ProductComp from "./components/ProductComp";
import NewsComp from "./components/NewsComp";
import FooterComp from "./components/FooterComp";


function App() {
  return (
    <div>
        <NavbarComp/>
        <HeroComp/>
        {/* content */}
        <AvpComp/>
       <KegiatanComp/>
        {/*<TeamComp/>*/}
        <TestimoniComp/>
        <ProductComp/>
        <NewsComp/>
        {/* content */}
        <FooterComp/>
    </div>
  );
}

export default App;
