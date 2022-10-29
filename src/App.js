import './App.scss';
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import HeaderStyle from "./components/HeaderStyle/HeaderStyle"

import {BrowserRouter, Route, Routes} from "react-router-dom";
import FooterStyle from "./components/FooterStyle/FooterStyle";
import HomePage from "./pages/HomePage/HomePage";
import ServicePage from "./pages/ServicePage/ServicePage";

export default function App() {
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
