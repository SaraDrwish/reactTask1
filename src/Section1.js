
import React from "react" ;
import "./Section1.css";
import Section2 from "./Section2";
import "./index.css";

function Section1(){

    return(

        <div className="Section1">

           <div className="container">

                    <h1>We've got what you need!</h1>

                    <span></span>

                    <p>
                        Start Bootstrap has everything you need to get your new website up
                        and running in no time! Choose one of our open source, free to download,
                        and easy to use themes! No strings attached!
                    </p>

                    <button>GET STARTED!</button>

            </div>


            <Section2/>

        </div>

    );

}


export default Section1;