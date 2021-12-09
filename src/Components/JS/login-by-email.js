import React, {Component} from 'react';


class LoginByEmail extends Component {
    constructor(props) {
        super();
      }

      
    handleChange=(e)=> {
        this.props.onEmailChange(e.target.value);
      }
    

    render() { 
        return <div className="px-4">
            <input
									type='email'
									name='email'
									className='form-control rounded-1 mx-0 my-3  shadow-sm'
									placeholder='البريد الإلكتروني'
                                    onChange={this.handleChange}
								/>

<button
								type='submit'
								className='flex-fill btn btn-primary rounded-pill mx-4 mb-4 mt-2 shadow-sm'>
								استمرار
							</button>
        </div>;
    }
}
 
export default LoginByEmail;