import React, { Component } from 'react';

class KYC extends Component {
    constructor(props) {
        super(props);
        const {values} = this.props
        this.state = { 
            adhaar: values.adhaar,
            adhaar_upload: values.adhaar_upload,
            showadhaar_upload: values.showadhaar_upload,
            pan: values.pan,
            pan_upload: values.pan_upload,
            showpan_upload: values.showpan_upload,
         }
    }
    handleChange = input => event => {
        this.props.handlePropChange({[input]:event.target.value})
        this.setState({ [input] : event.target.value });
        
    }
    handleFileChange = input => event => {
        var imageFile = event.target.files[0]
        let keyName = 'invalid'+input
        let showKeyName = 'show'+input
        if (!imageFile) {
            this.setState({ [keyName]: 'Please upload image/pdf/doc.' });
            return false;
        }
        
        if (!imageFile.name.match(/\.(jpg|jpeg|png|gif|pdf|doc)$/)) {
            this.setState({ [keyName]: 'Please select valid image/pdf/doc.' });
            return false;
        }
        this.props.handlePropChange({[input]:event.target.value,[showKeyName]: URL.createObjectURL(event.target.files[0])})
        this.setState({
            [keyName] : '',
            [showKeyName]: URL.createObjectURL(event.target.files[0]),
            [input]: event.target.files[0]
        })
    }
    saveAndContinue = (e) => {
        e.preventDefault();
        if(!this.state.adhaar){
            this.setState({
                invalidAdhaar : 'Please add Adhaar Number'
            })
            this.adhaar.focus();
            return false;
        }else{
            this.setState({
                invalidAdhaar : ''
            })
        }
        if(!this.state.adhaar_upload){
            this.setState({
                invalidadhaar_upload : 'Please upload Adhaar Card'
            })
            return false;
        }else{
            this.setState({
                invalidadhaar_upload : ''
            })
        }
        if(!this.state.pan){
            this.setState({
                invalidPan : 'Please add PAN Number'
            })
            this.pan.focus();
            return false;
        }else{
            this.setState({
                invalidPan : ''
            })
        }
        if(!this.state.pan_upload){
            this.setState({
                invalidpan_upload : 'Please upload PAN Card'
            })
            return false;
        }else{
            this.setState({
                invalidpan_upload : ''
            })
        }
        this.props.nextStep();
    }
    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() { 
        return ( 
            <form>
                <div className="card-header">
                    <h3>KYC Details</h3>
                    <ul className="users-list clearfix">
                    {this.state.showadhaar_upload && <li>
                        <img src={this.state.showadhaar_upload} alt="Store Image" />
                    </li>}
                    {this.state.showpan_upload && <li>
                        <img src={this.state.showpan_upload} alt="Store Image" />
                    </li>}
                    </ul>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="adhaar">Adhaar Number:</label>
                                <input type="text" className="form-control" name="adhaar" 
                                ref={(input) => { this.adhaar = input; }} 
                                onChange={this.handleChange('adhaar')}
                                value={this.state.adhaar} />
                                {this.state.invalidAdhaar && <span className="error invalid-feedback" style={{display:"block"}}>{this.state.invalidAdhaar}</span>}
                            </div>    
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="adhaar_upload">Adhaar Upload</label>
                                <div className="input-group">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" name="adhaar_upload"  onChange={this.handleFileChange('adhaar_upload')} />
                                    <label className="custom-file-label" htmlFor="adhaar_upload">Choose file</label>
                                </div>
                                
                                <div className="input-group-append">
                                    <span className="input-group-text">Upload</span>
                                </div>
                                {this.state.invalidadhaar_upload && <span className="error invalid-feedback" style={{display:"block"}}>{this.state.invalidadhaar_upload}</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="pan">PAN Number:</label>
                                <input type="text" className="form-control" name="pan" 
                                ref={(input) => { this.pan = input; }} 
                                onChange={this.handleChange('pan')}
                                value={this.state.pan} />
                                {this.state.invalidPan && <span className="error invalid-feedback" style={{display:"block"}}>{this.state.invalidPan}</span>}
                            </div>    
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="pan_upload">PAN Upload</label>
                                <div className="input-group">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" name="pan_upload"  onChange={this.handleFileChange('pan_upload')} />
                                    <label className="custom-file-label" htmlFor="pan_upload">Choose file</label>
                                </div>
                                
                                <div className="input-group-append">
                                    <span className="input-group-text">Upload</span>
                                </div>
                                {this.state.invalidpan_upload && <span className="error invalid-feedback" style={{display:"block"}}>{this.state.invalidpan_upload}</span>}
                                </div>
                            </div>
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
 
export default KYC;