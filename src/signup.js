import React from 'react';
import './signup.css';


function signup() {
	return (
		<>

			<div className="brand"> <img src={require("./Image/Logo.png")} alt={'Logo'} /> </div>

			<div className="container">

				<div className="box home">

					<div className="image"> 
						<img width={700} height={700} src={require("./Image/Rectangle.png")} alt={'photos'} />
						<div className="box-border">
						<img src={require("./Image/Pink.png")} alt={'photos'} />
					</div>
					<div className="box-border-2">
						<img src={require("./Image/Medlife.png")} alt={'photos'} />
					</div>
					</div>

				</div>

				<div className="box">
					<div className="content">

						<form>
							<h1> <span class="line">Create</span> Account </h1>
							<div className="head-1">
							<h3>Name</h3>
							<input type="text" placeholder="Enter your full name" required />
							</div>
							<h3>Mobile Number</h3>
							<input type="" placeholder="Enter your mobile number" required/>
							<h3>Email</h3>
							<input type="email" placeholder="Enter your Email Address" required />
							
							<div className="passwords">
								<div className="pass">
									<h3>Password</h3>
									<input type="password" placeholder="Enter your Password" required />
								</div>
								<div className="pass">
									<h3>Confirm your password</h3>
									<input type="password" placeholder="Re-enter your Password" required />
								</div>
							</div>

							<button type="submit" className="btn btn-primary">Sign Up</button>

							<p>Already have an account? <a href="">Sign in</a></p>
							<p>Buying for work? <a href="">Create a free business account</a></p>

						</form>

					</div>

				</div>

			</div>

		</>
	)
}

export default signup; 