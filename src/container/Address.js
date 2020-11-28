import React, { Component } from 'react';

class Address extends Component {
    constructor(props) {
        super(props);
        const {values} = this.props
        this.state = { 
            address1: values.address1,
            address2: values.address2,
            city: values.city,
            state: values.state,
            zip: values.zip,
            invalidAddress1 : '',
            invalidAddress2 : '',
            invalidCity : '',
            invalidState : '',
            invalidZip : '',
        }
    }
    saveAndContinue = (e) => {
        e.preventDefault();
        if(!this.state.address1){
            this.setState({
                invalidAddress1 : 'Please add Address1'
            })
            this.address1.focus();
            return false;
        }else{
            this.setState({
                invalidAddress1 : ''
            })
        }
        if(!this.state.address2){
            this.setState({
                invalidAddress2 : 'Please add Address2'
            })
            this.address2.focus();
            return false;
        }else{
            this.setState({
                invalidAddress2 : ''
            })
        }
        if(!this.state.city){
            this.setState({
                invalidCity : 'Please add City'
            })
            this.city.focus();
            return false;
        }else{
            this.setState({
                invalidCity : ''
            })
        }
        if(!this.state.state){
            this.setState({
                invalidState : 'Please add State'
            })
            this.Addrstate.focus();
            return false;
        }else{
            this.setState({
                invalidState : ''
            })
        }
        if(!this.state.zip){
            this.setState({
                invalidZip : 'Please add ZIP'
            })
            this.zip.focus();
            return false;
        }else{
            this.setState({
                invalidZip : ''
            })
        }
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    handleChange = input => event => {
        this.props.handlePropChange({[input]:event.target.value})
        this.setState({ [input] : event.target.value });
    }
    render() { 
        return ( 
            <form >
                <div className="card-header">
                    <h3>Address Details</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                            <label htmlFor="address1">Address1:</label>
                                <textarea className="form-control" name="address1"  rows="1"
                                ref={(input) => { this.address1 = input; }}
                                onChange={this.handleChange('address1')}
                                value={this.state.address1}
                                ></textarea>
                                {this.state.invalidAddress1 && <span className="error invalid-feedback" style={{display:"block"}}>{this.state.invalidAddress1}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="address2">Address2:</label>
                                <textarea className="form-control" name="address2"  rows="1"
                                ref={(input) => { this.address2 = input; }}
                                onChange={this.handleChange('address2')}
                                value={this.state.address2}
                                ></textarea>
                                {this.state.invalidAddress2 && <span className="error invalid-feedback" style={{display:"block"}}>{this.state.invalidAddress2}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <label htmlFor="city">City:</label>
                            <input type="text" className="form-control" name="city" 
                            ref={(input) => { this.city = input; }}
                            onChange={this.handleChange('city')}
                            value={this.state.city}
                            />
                            {this.state.invalidCity && <span className="error invalid-feedback" style={{display:"block"}}>{this.state.invalidCity}</span>}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="state">State:</label>
                            <input type="text" className="form-control" name="state" 
                            ref={(input) => { this.Addrstate = input; }}
                            onChange={this.handleChange('state')}
                            value={this.state.state}
                            />
                            {this.state.invalidState && <span className="error invalid-feedback" style={{display:"block"}}>{this.state.invalidState}</span>}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="zip">Zip:</label>
                            <input type="text" className="form-control" name="zip" 
                            ref={(input) => { this.zip = input; }}
                            onChange={this.handleChange('zip')}
                            value={this.state.zip}
                            />
                            {this.state.invalidZip && <span className="error invalid-feedback" style={{display:"block"}}>{this.state.invalidZip}</span>}
                        </div>
                    </div>
                    
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary" onClick={this.back}>Back</button>
                    <button className="btn btn-primary float-right" onClick={this.saveAndContinue}>Next </button>
                </div>
            </form>
         );
    }
}
 
export default Address;