import React from "react";
import "./Section2Icons.css" ;

function Section2Icons(props){
    return ( 

       <div className="Section2Icons">
         
            <div className="container">
            {/* <i className="far fa-gem"> </i> */}


            {/* <i className="far fa-gem"> </i>
                  <h2>Sturdy Themes</h2>
                  <p>Our themes are updated regularly to keep them bug free!</p>
            </div> */}
                

                  <i className= { props.icon }>  </i>
                  <h2> { props.title } </h2>
                  <p> { props.parag } </p>


              </div>


       </div>

    );
}

export default Section2Icons ;