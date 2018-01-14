import React from 'react';

const Login = (props) => {

		return (
			<div className="row Login">
            <br />
				<form onSubmit={props.userSubmit}>
               <div className="form-group">
                  <label for="username">User Name: </label>
                  <input type="text" className="form-control" name="username" id="username" placeholder="Enter Username" />
               </div>
               <br />
               <div className="form-group">
                  <label for="password">Password: </label>
                  <input type="password" className="form-control" name="password" id="password" placeholder="Enter Password" />
               </div>
               <br />
               <button type="submit" className="btn btn-full">Submit</button>
               <br />
               <br />
            </form>
			</div>
		);
}

export default Login;