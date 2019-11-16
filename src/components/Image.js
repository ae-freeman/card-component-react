import React from "react";


const Image = (props) => {

  
        return (
            

           <div className="col-lg-4">

           
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={props.image}/>
                <div className="card body">
                    <h1>{props.description}</h1>
                </div>
            </div>

            </div>

           
           
        );

    
}

export default Image;