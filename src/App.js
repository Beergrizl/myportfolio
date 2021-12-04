import React from "react";
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import JobOffer from "./job offer/jobOffer";
import Contacts from "./contacts/contacts";
import Footer from "./footer/footer";
import {Route, Routes} from "react-router-dom";
import Projects from "./progects/projects";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills />
            <Projects/>
            <JobOffer/>
            <Contacts/>
            <Footer/>
            {/*<Routes>
                <Route path='/Main' element={<Main/>}/>
                <Route path='/Skills' element={<Skills/>}/>
                <Route path='/Projects' element={<Projects/>}/>
                <Route path='/Contacts' element={<JobOffer/>}/>
                <Route path='/Contacts' element={<Contacts/>}/>
                <Route path='/Contacts' element={<Footer/>}/>
            </Routes>*/}
        </div>
    );
}

export default App;
