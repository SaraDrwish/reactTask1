
import React from "react" ;
import "./Section2.css";
import Section2Icons from "./Section2Icons"

    function Section2(){

        return(
            
            <div className="Section2">
               
               <h1>At Your Service</h1>
               <span> </span>

                <div className="iconsContainer">
                        <Section2Icons/>
                        <Section2Icons/>
                        <Section2Icons/>
                        <Section2Icons/>
                </div>



            </div>

        );
        
    }

export default Section2 ;