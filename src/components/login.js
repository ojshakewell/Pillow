import React from 'react';

const Login = () => {

		return (
			<div className="row Login">
				<form>
               <div class="form-group">
                  <label for="username">User Name</label>
                  <input type="text" class="form-control" id="login-user" placeholder="Enter Username" />
               </div>
               <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" id="password" placeholder="Password" />
               </div>
               <button type="submit" class="btn btn-primary">Submit</button>
            </form>

			</div>
		);
}

export default Login;