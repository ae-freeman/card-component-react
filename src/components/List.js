import React from "react";
import Image from "./Image";


const List = (props) => {

    const images = props.images.map((image, index) => {
        return <Image key={image.id} image={image} description={props.descriptions[index]}/>;
    });

  

    return <div className="row">
        {images}
        </div>
}

export default List;