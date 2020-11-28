import React, { Component } from 'react';


class Profile extends Component {
    constructor(props) {
        super(props);
        const {values} = this.props
        this.state = { 
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            mobile: values.mobile,
            dob: values.dob,
            password: values.password,
            confirm_email : values.confirm_email,
            repeat_password: values.repeat_password,
            invalidFirstName : '',
            invalidLastName : '',
            invalidEmail : '',
            invalidConfirmEmail : '',
            invalidMobile : '',
            invalidDOB: '',
            invalidPassword : '',
            invalidRepeatPassword : '',
         }
    }
    saveAndContinue = (e) => {
        e.preventDefault();
        if(!this.state.first_name){
            this.setState({
                invalidFirstName : 'Please add first name'
            })
            this.first_name.focus();
            return false;
        }else{
            this.setState({
                invalidFirstName : ''
            })
        }
        if(!this.state.last_name){
            this.setState({
                invalidLastName : 'Please add last name'
            })
            this.last_name.focus();
            return false;
        }else{
            this.setState({
                invalidLastName : ''
            })
        }
        if(!this.state.email){
            this.setState({
                invalidEmail : 'Please add email'
            })
            this.email.focus();
            return false;
        }else{
            this.setState({
                invalidEmail : ''
            })
        }
        if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email))){
            this.setState({
                invalidEmail : 'Invalid email'
            })
            this.email.focus();
            return false;
        }else{
            this.setState({
                invalidEmail : ''
            })
        }
        if(!this.state.confirm_email){
            this.setState({
                invalidConfirmEmail : 'Please add confirm email'
            })
            this.confirm_email.focus();
            return false;
        }else{
            this.setState({
                invalidConfirmEmail : ''
            })
        }
        if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.confirm_email))){
            this.setState({
                invalidConfirmEmail : 'Invalid email'
            })
            this.confirm_email.focus();
            return false;
        }else{
            this.setState({
                invalidConfirmEmail : ''
            })
        }
        if(this.state.email != this.state.confirm_email){
            this.setState({
                invalidConfirmEmail : 'Email does not match'
            })
            this.confirm_email.focus();
            return false;
        }else{
            this.setState({
                invalidConfirmEmail : ''
            })
        }
        if(!this.state.mobile){
            this.setState({
                invalidMobile : 'Please add mobile'
            })
            this.mobile.focus();
            return false;
        }else{
            this.setState({
                invalidMobile : ''
            })
        }
        if(this.state.mobile.length > 10 || this.state.mobile.length < 10){
            this.setState({
                invalidMobile : 'Please add mobile digit of 10 length exactly'
            })
            this.mobile.focus();
            return false;
        }else{
            this.setState({
                invalidMobile : ''
            })
        }
        if(!this.state.dob){
            this.setState({
                invalidDOB : 'Please add DOB'
            })
            this.dob.focus();
            return false;
        }else{
            this.setState({
                invalidDOB : ''
            })
        }
        if(!this.state.password){
            this.setState({
                invalidPassword : 'Please add password'
            })
            this.password.focus();
            return false;
        }else{
            this.setState({
                invalidPassword : ''
            })
        }
        if(!this.state.repeat_password){
            this.setState({
                invalidRepeatPassword : 'Please add repeat password'
            })
            this.repeat_password.focus();
            return false;
        }else{
            this.setState({
                invalidRepeatPassword : ''
            })
        }
        if(this.state.password != this.state.repeat_password){
            this.setState({
                invalidRepeatPassword : 'Password does not match'
            })
            this.repeat_password.focus();
            return false;
        }else{
            this.setState({
                invalidRepeatPassword : ''
            })
        }
        
        this.props.nextStep()
    }
    handleChange = input => event => {
        this.props.handlePropChange({[input]:event.target.value})
        this.setState({ [input] : event.target.value });
        
    }
    render() { 
        return ( 
            <form>
                <div className="card-header">
                    <h3>Profile Information</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="first_name">First Name:</label>
                                <input type="text" className="form-control" name="first_name" 
                                ref={(input) => { this.first_name = input; }} 
                                onChange={this.handleChange('first_name')}
                                value={this.state.first_name} />
                                {this.state.invalidFirstName && <span className="error invalid-feedback" style={{display:"block"}}>{this.state.invalidFirstName}</span>}
                            </div>    
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="last_name">Last Name:</label>
                                <input type="text" className="form-control" name="last_name" 
                                ref={(input) => { this.last_name = input; }}
                                onChange={this.handleChange('last_name')}
                                value={this.state.last_name}
                                />
                                {this.state.invalidLastName && <span className="error invalid-feedback" style={{display:"block"}}>{this.state.invalidLastName}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" className="form-control" name="email" 
                                ref={(input) => { this.email = input; }}
                                onChange={this.handleChange('email')}
                                value={this.state.email}/>
                                {this.state.invalidEmail && <span className="error invalid-feedback" style={{display:"block"}}>{this.state.invalidEmail}</span>}
                            </div>    
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="confirm_email">Confirm Email:</label>
                                <input type="email" className="form-control" name="confirm_email" 
                                ref={(input) => { this.confirm_email = input; }}
                                onChange={this.handleChange('confirm_email')}
                                value={this.state.confirm_email}/>
                                {this.state.invalidConfirmEmail && <span className="error invalid-feedback" style={{display:"block"}}>{this.state.invalidConfirmEmail}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="mobile">Mobile:</label>
                                <input type="number" className="form-control" name="mobile" 
                                ref={(input) => { this.mobile = input; }}
                                onChange={this.handleChange('mobile')}
                                value={this.state.mobile}/>
                                {this.state.invalidMobile && <span className="error invalid-feedback" style={{display:"block"}}>{this.state.invalidMobile}</span>}
                            </div>    
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="dob">DOB:</label>
                                <input type="date" className="form-control" name="dob" 
                                ref={(input) => { this.dob = input; }}
                                onChange={this.handleChange('dob')}
                                value={this.state.dob}/>
                                {this.state.invalidDOB && <span className="error invalid-feedback" style={{display:"block"}}>{this.state.invalidDOB}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" className="form-control" name="password" 
                                ref={(input) => { this.password = input; }}
                                onChange={this.handleChange('password')}
                                value={this.state.password}/>
                                {this.state.invalidPassword && <span className="error invalid-feedback" style={{display:"block"}}>{this.state.invalidPassword}</span>}
                            </div>    
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="repeat_password">Repeat Password:</label>
                                <input type="password" className="form-control" name="repeat_password" 
                                ref={(input) => { this.repeat_password = input; }}
                                onChange={this.handleChange('repeat_password')}
                                value={this.state.repeat_password}/>
                                {this.state.invalidRepeatPassword && <span className="error invalid-feedback" style={{display:"block"}}>{this.state.invalidRepeatPassword}</span>}
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary float-right" onClick={this.saveAndContinue}>Next </button>
                </div>
                
            </form>
         );
    }
}
 
export default Profile;