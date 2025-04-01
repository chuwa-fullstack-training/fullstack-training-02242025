import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Aside from "./Aside";
import Section from "./Section";
import Footer from "./Footer";

const Hw2 = ()=>{
    return(
        <div className="container" style={{textAlign:'center', border:"2px black"}}>
            <Header />
            <Nav />
            <div className="flex-body" style={{display:"flex", alignItems:'center',  textAlign:'center', height:"60vh"}}>
                <Aside />
                <Section />

            </div>
            <Footer />
            
        </div>
    )
}
export default Hw2;