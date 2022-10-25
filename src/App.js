import './App.scss';
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import HeaderStyle from "./components/HeaderStyle/HeaderStyle"

import {BrowserRouter, Route, Routes} from "react-router-dom";
import FooterStyle from "./components/FooterStyle/FooterStyle";
import HomePage from "./pages/HomePage/HomePage";

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
            </Routes>
        </BrowserRouter>
  );
}
