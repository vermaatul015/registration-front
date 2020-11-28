import React, { Component } from 'react';

class Success extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    back  = () => {
        this.props.backto();
    }
    render() { 
        return ( < >
            <div className="card-header">
                <h3>Success</h3>
            </div>
            <div className="card-body">
            <div className="col-sm-6 col-sm-offset-3">
            <br /><br /> <h2 style={{color:"#0fad00"}}>Success</h2>
            <h3>Successfully signed Up</h3>
            <br /><br />
            </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary" onClick={this.back}>Back To Homepage</button>
                </div>
                </> );
    }
}
 
export default Success;