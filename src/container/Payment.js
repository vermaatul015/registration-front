import React, { Component } from 'react';

class Payment extends Component {
    constructor(props) {
        super(props);
        const {values} = this.props
        this.state = { 
            card_holder_name : values.card_holder_name,
            card_number: values.card_number,
            cvc : values.cvc,
            month : values.month,
            year : values.year
         }
    }
    saveAndContinue = (e) => {
        e.preventDefault();
        if(!this.state.card_holder_name){
            this.setState({
                invalidCardHolderName : 'Please add Card Holder Name'
            })
            this.card_holder_name.focus();
            return false;
        }else{
            this.setState({
                invalidCardHolderName : ''
            })
        }
        if(!this.state.card_number){
            this.setState({
                invalidCardNumber : 'Please add Card Number'
            })
            this.card_number.focus();
            return false;
        }else{
            this.setState({
                invalidCardNumber : ''
            })
        }
        if(this.state.card_number.length != 16){
            this.setState({
                invalidCardNumber : 'Card Number will be exactly 16 digits'
            })
            this.card_number.focus();
            return false;
        }else{
            this.setState({
                invalidCardNumber : ''
            })
        }
        if(!this.state.cvc){
            this.setState({
                invalidcvc : 'Please add CVC'
            })
            this.cvc.focus();
            return false;
        }else{
            this.setState({
                invalidcvc : ''
            })
        }
        if(this.state.cvc.length != 4){
            this.setState({
                invalidcvc : 'CVC will be exactly 4 digits'
            })
            this.cvc.focus();
            return false;
        }else{
            this.setState({
                invalidcvc : ''
            })
        }
        if(!this.state.month){
            this.setState({
                invalidMonth : 'Please select Month'
            })
            return false;
        }else{
            this.setState({
                invalidMonth : ''
            })
        }
        if(!this.state.year){
            this.setState({
                invalidYear : 'Please add Year'
            })
            return false;
        }else{
            this.setState({
                invalidYear : ''
            })
        }
        this.props.handleFormSubmit()
    }
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    getMonth = () => {
        var html = [<option key="mon" value="" >select month</option>];
        for(var i=1; i<=12;i++){
            html.push(<option key={i} value={i} >{i}</option>)
        }
        return html;
    }
    getYear = () => {
        var html = [<option key="yea" value="" >select year</option>];
        for(var i=2020; i<=2030;i++){
            html.push(<option key={i} value={i} >{i}</option>)
        }
        return html;
    }
    handleChange = input => event => {
        this.props.handlePropChange({[input]:event.target.value})
        this.setState({ [input] : event.target.value });
        
    }
    render() { 
        return ( 
            <form>
                <div className="card-header">
                    <h3>Payment Information</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <img src={window.location.href+'images/accept_credit_cards_picture.jpg'}  />
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="card_holder_name">Card Holder Name:</label>
                                <input type="text" className="form-control" name="card_holder_name" 
                                ref={(input) => { this.card_holder_name = input; }} 
                                onChange={this.handleChange('card_holder_name')}
                                value={this.state.card_holder_name} />
                                {this.state.invalidCardHolderName && <span className="error invalid-feedback" style={{display:"block"}}>{this.state.invalidCardHolderName}</span>}
                            </div>    
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="form-group">
                                <label htmlFor="card_number">Card Number:</label>
                                <input type="number" className="form-control" name="card_number" 
                                ref={(input) => { this.card_number = input; }}
                                onChange={this.handleChange('card_number')}
                                value={this.state.card_number}
                                />
                                {this.state.invalidCardNumber && <span className="error invalid-feedback" style={{display:"block"}}>{this.state.invalidCardNumber}</span>}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label htmlFor="cvc">CVC:</label>
                                <input type="text" className="form-control" name="cvc" 
                                ref={(input) => { this.cvc = input; }}
                                onChange={this.handleChange('cvc')}
                                value={this.state.cvc}/>
                                {this.state.invalidcvc && <span className="error invalid-feedback" style={{display:"block"}}>{this.state.invalidcvc}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <label>Expiry Date:</label>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label htmlFor="month">Month:</label>
                                <select className="form-control" name="month" value={this.state.month} onChange={this.handleChange('month')} >
                                    {this.getMonth()}
                                </select>
                                {this.state.invalidMonth && <span className="error invalid-feedback" style={{display:"block"}}>{this.state.invalidMonth}</span>}
                            </div>    
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label htmlFor="year">Year:</label>
                                <select className="form-control" name="year" value={this.state.year} onChange={this.handleChange('year')} >
                                    {this.getYear()}
                                </select>
                                {this.state.invalidYear && <span className="error invalid-feedback" style={{display:"block"}}>{this.state.invalidYear}</span>}
                            </div>    
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    
                </div>
                <div className="card-footer">
                <button className="btn btn-primary" onClick={this.back}>Back</button>
                    <button className="btn btn-primary float-right" onClick={this.saveAndContinue}>Submit </button>
                </div>
                
            </form>
         );
    }
}
 
export default Payment;