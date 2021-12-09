import React, {Fragment, Component} from 'react';




class Password extends Component {
    constructor(props) {
      super(props);
      
      ;
    }
    
    
  
    

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
  <button type="button" class="btn btn-outline-primary" onClick={this.HandleEmailClick}>الرقم السري</button>
 
  </div>
  <input
									type='password'
									name='password'
									className='form-control rounded-1 mx-0 my-3  shadow-sm'
									placeholder='الرقم السري'
                                    onChange={this.handleChange}
								/>
            <button
								type='submit'
								className='flex-fill btn btn-primary rounded-pill mx-4 mb-4 mt-2 shadow-sm'>
تسجيل الدخول							</button>
</div>				
				
							
							
						</form>
						
					</div>
				</div>
			</Fragment>
      );
    }
  }
export default Password;
