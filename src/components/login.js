import React from 'react';

const Login = (props) => {

		return (
			<div className="row Login">
				<form onSubmit={props.userSubmit}>
               <div class="form-group">
                  <label for="username">User Name</label>
                  <input type="text" class="form-control" name="username" id="username" placeholder="Enter Username" />
               </div>
               <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" name="password" id="password" placeholder="Password" />
               </div>
               <button type="submit" class="btn btn-primary">Submit</button>
            </form>

			</div>
		);
}

export default Login;