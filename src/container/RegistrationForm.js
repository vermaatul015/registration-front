import React, { Component } from 'react';
import Address from './Address';
import KYC from './KYC';
import Payment from './Payment';
import Profile from './Profile';
import axios from 'axios';
import Success from './success';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            step: 5,
            first_name: '',
            last_name: '',
            email: '',
            mobile: '',
            dob: '',
            password: '',
            confirm_email : '',
            repeat_password: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            adhaar: '',
            adhaar_upload: '',
            showadhaar_upload: '',
            pan: '',
            pan_upload: '',
            showpan_upload: '',
            card_holder_name : '',
            card_number: '',
            cvc : '',
            month : '',
            year : ''
         }
    }
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }
    handleChange = input =>  {
        this.setState(input)
    }
    handleFormSubmit = (e) => {
        console.log(this.state);
        const data = new FormData() 
        data.append('first_name', this.state.first_name)
        data.append('last_name', this.state.last_name)
        data.append('email', this.state.email)
        data.append('mobile', this.state.mobile)
        data.append('dob', this.state.dob)
        data.append('password', this.state.password)
        data.append('address1', this.state.address1)
        data.append('address2', this.state.address2)
        data.append('city', this.state.city)
        data.append('state', this.state.state)
        data.append('zip', this.state.zip)
        data.append('adhaar', this.state.adhaar)
        data.append('adhaar_upload', this.state.adhaar_upload)
        data.append('pan', this.state.pan)
        data.append('pan_upload', this.state.pan_upload)
        data.append('card_holder_name', this.state.card_holder_name)
        data.append('card_number', this.state.card_number)
        data.append('cvc', this.state.cvc)
        data.append('month', this.state.month)
        data.append('year', this.state.year)
        axios.post(`http://localhost:8000/api/v1/add-users`,  data )
        .then(res => {
            console.log(res);
            if(res.data){
                this.setState({
                    step : 5
                })
            }
        })
    }
    backto = () => {
        this.setState({
            step : 1
        })
    }
    render() { 
            const {step} = this.state;
            const { first_name, last_name, email, mobile, dob, password, confirm_email, repeat_password, address1, address2, city, state, zip, adhaar, adhaar_upload, showadhaar_upload, pan, pan_upload, showpan_upload, card_holder_name, card_number,cvc, month,year } = this.state;
            const values = { first_name, last_name, email, mobile, dob, password, confirm_email, repeat_password, address1, address2, city, state, zip, adhaar, adhaar_upload, showadhaar_upload, pan, pan_upload, showpan_upload, card_holder_name, card_number, cvc, month, year };
            switch(step) {
            case 1:
                return <Profile
                        nextStep={this.nextStep}
                        handlePropChange = {this.handleChange}
                        values={values}
                        />
            case 2:
                return <Address
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handlePropChange = {this.handleChange}
                        values={values}
                        />
            case 3:
                return <KYC
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handlePropChange = {this.handleChange}
                        values={values}
                        />
            case 4:
                return <Payment
                        handleFormSubmit={this.handleFormSubmit}
                        prevStep={this.prevStep}
                        handlePropChange = {this.handleChange}
                        values={values}
                        />
            case 5:
                return <Success backto={this.backto} />
            }
    }
}
 
export default RegistrationForm;