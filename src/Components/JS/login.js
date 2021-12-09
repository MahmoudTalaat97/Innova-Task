import React, {Fragment, Component} from 'react';
import LoginByPhone from './login_by_phone';
import LoginByEmail from './login-by-email';



class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        phone: '',
        LoginByPhone: true, 
        LoginByEmail: false,
        isEmpty: false,
		    emailError: false,
      };
    }
    
    componentDidMount=  async (e) => {
      const obj = '{ "user": {"country_code": "+20", "phone_number": "1095026412", "password": "password"}, "device": {"uid":"3", "token": "i"}}';
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': '*/*' }, 
        body: obj,
      };
      const base_url="15.237.2.25"
      const api="api"
      const version="v1"
      let response = await fetch(
        `http://${base_url}/${api}/${version}/login_by_phone`,
        requestOptions
      );
      let data = await response.json();
      console.log(response.status);
      console.log(data);
    };


    HandleEmailChange=(emailchanged)=> {
      this.setState({email: emailchanged });
    }
    HandlePhoneChange=(phonechanged)=> {
      this.setState({phone: phonechanged });
    }

    HandlePhoneClick = ()=>{
      this.setState({LoginByPhone: true,LoginByEmail: false,email:""});
      
    }

    HandleEmailClick = ()=>{
      this.setState({LoginByEmail: true,LoginByPhone: false,phone:""});
      
    }
    componentDidUpdate=()=>{
      console.log(this.state)
    }


    redBorder = 'border-danger';

    handleContinue = (e) => {
      e.preventDefault();
      console.log(e);
      if (this.LoginByPhone){
        if (this.isFormFieldEmpty(e)) {
          this.setState({isEmpty: true});
        } else {
        window.localStorage.setItem('phone', e.target.phone.value)}
      } 
      
      
      else {
        if (this.isFormFieldEmpty(e)) {
          this.setState({isEmpty: true});
        } else if (!this.isEmailValid(e.target.email.value)) {
          this.setState({emailError: true});
        } else {
        window.localStorage.setItem('email', e.target.email.value)
      }}
      this.props.redirectToPassword()
    
    };

    
    isFormFieldEmpty = (e) => {
		if (e.target.email.value === '' && this.LoginByEmail ) {
			return true;
		} if (e.target.phone.value === '' && this.LoginByPhone) {
      return true;
    } 
    else {
			return false;
		}
	};

    isEmailValid = (email) => {
		const regex = /^[a-zA-Z][a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/;
		return regex.test(email);
	};
  
    

    render() {
      return (
        <Fragment>
				<div className='container text-center'>
					<div style={{margin: '0 30%'}}>
						<form
							name='form'
							onSubmit={this.handleSubmit}
							className='form d-flex flex-column justify-content-space-between border border-2 rounded-3 shadow-sm mt-5 py-3'>
							<div className='d-flex flex-column mb-2'>
								
								<div className='lead fs-2 fw-bold '>
									تريندو
								</div>
								<div className='lead fs-6 fw-normal'>
									مرحبا بك
								</div>
							</div>
							<div className='d-flex flex-column mx-md-5 align-items-center'>
              <div class="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" class="btn btn-outline-primary" onClick={this.HandleEmailClick}>البريد الإلكتروني</button>
 
  <button type="button" class="btn btn-outline-primary" onClick={this.HandlePhoneClick}>رقم الهاتف</button>
</div>				
							</div>
              {this.state.LoginByPhone && (
									<LoginByPhone onPhoneChange={this.HandlePhoneChange} />
								)}
                {this.state.LoginByEmail && (
									<LoginByEmail onEmailChange={this.HandleEmailChange}/>
								)}
							
							
						</form>
						
					</div>
				</div>
			</Fragment>
      );
    }
  }
export default Login;
