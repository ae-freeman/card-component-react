import React from "react";
import unsplash from "../api/unsplash";
import AddDestination from "./AddDestination";
import List from "./List";

class App extends React.Component {

    state = {images: [], descriptions: []};

    onSearchSubmit = async(term) => {
        const response = await unsplash.get("/search/photos", {
            params: {query: term}
        });
        
        this.setState({images: [...this.state.images, response.data.results[0].urls.regular], descriptions: [...this.state.descriptions, term]}, 
            );
        console.log(this.state);
    }




    render() {
        return (
            <div className="container">
                <div>
                    <AddDestination onSubmit={this.onSearchSubmit}/>
                </div>
                <div>
                    <List descriptions={this.state.descriptions} images={this.state.images}/>
                </div>           
            </div>
        );
    }
}

export default App;

