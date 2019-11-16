import React from "react";

class AddDestination extends React.Component {

    state = { term: ""}; //initialise state. Currently, user has not typed anything. 

    onFormSubmit = (event) => {
        event.preventDefault(); //prevent broweser trying to submit and refresh the page
        this.props.onSubmit(this.state.term); //now, we want to ACTUALLY submit the form.
        //use current state to submit the form.
        //the state was updated below. 
        
    }

    render(){
        return (

            //when user submits form (onSubmit), call onFormSubmit function. 
        <div className="container">
            <form onSubmit={this.onFormSubmit} className="form-group"> 
                  <div className="field">
                    <label>Image Search</label>
                    <input 
                    className="form-control"
                    type="text" 
                    value={this.state.term} //the value will be whatever state is
                    onChange={e => this.setState({term: e.target.value})} //so update state when value changes
                    />
                </div>
            </form>
        </div>

        );
    }
}

export default AddDestination;