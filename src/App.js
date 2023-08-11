import './App.css';
import Header from "./components/header";
import Banner from "./components/Home";
import BannerII from "./components/About";
import BannerIII from "./components/Service";
import BannerIV from "./components/pricing";
import BannerV from "./components/Team";
import BannerVI from "./components/Contact";
import Footer from "./components/Footer";
import SideBar from "./components/sideBar";
import { useState } from 'react';


function App() {

  const [sideBar, setSideBar] = useState(false)
  const [translate, setTranslate] = useState(false)

  const handleSwitch = () => {
    setSideBar(!sideBar)
    setTranslate(!translate)
  }

  return (
    <div className="App bg-black text-white w-full min-h-screen flex flex-col">
      <Header handleSwitch={handleSwitch} sideBar={sideBar}/>
      {sideBar && <SideBar translate={translate} handleSwitch={handleSwitch}/>}
      <Banner/>
      <BannerII/>
      <BannerIII/>
      <BannerIV/>
      <BannerV/>
      <BannerVI/>
      <Footer/>
    </div>
  );
}

export default App;
