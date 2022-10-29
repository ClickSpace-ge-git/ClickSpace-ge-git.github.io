import './App.scss';
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import HeaderStyle from "./components/HeaderStyle/HeaderStyle"

import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import FooterStyle from "./components/FooterStyle/FooterStyle";
import HomePage from "./pages/HomePage/HomePage";
import ServicePage from "./pages/ServicePage/ServicePage";

export default function App() {
    let navigate = useNavigate()
    const redirect = sessionStorage.getItem("staticserve")
    if(redirect !== null){
        sessionStorage.removeItem("staticserve")
        navigate(redirect)
    }
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path ="/aboutus" element={
                    <>
                        <HeaderStyle/>
                        <AboutUsPage/>
                        <FooterStyle/>
                    </>
                }/>
                <Route path="/services" element={<ServicePage/>}/>
            </Routes>
        </BrowserRouter>
  );
}
