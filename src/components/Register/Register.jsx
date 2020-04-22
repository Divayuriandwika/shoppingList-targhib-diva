import React, { Component } from 'react';
import { Formik } from 'formik';
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn} from 'mdbreact';
import { withRouter, Link } from 'react-router-dom';

class Register extends Component {
	render() {
		return (
			<MDBContainer fluid className="container-login align-items-center">
				<MDBRow className="myRow align-items-center justify-content-center">
					<MDBCol xl={5} lg={5} md={6} className="myCol bg-#e0f2f1 teal lighten-5">
						<MDBRow>
							<MDBCol className="text-center">
								<h1>Register</h1>
							</MDBCol>
						</MDBRow>
					<MDBRow>
				<MDBCol className="text-center">
					<Formik
						initialValues={{ name: '', email: '', password: '' }}
						validate={(values) => {
							const errors = {};
							if (!values.email) {
								errors.email = 'Required';
							} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
								errors.email = 'Invalid email address';
							}
							return errors;
						}}
						onSubmit={(values, { setSubmitting }) => {
							const url = 'https://5e945b44f591cb0016d80f27.mockapi.io/Users';
							values.avatar =
								'https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png';
							const options = {
								headers: {
									'Content-Type': 'application/json'
								},
								body: JSON.stringify(values),
								method: 'POST'
							};

							fetch(url, options)
								.then((response) => {
									return response.json();
								})
								.then((result) => {
									alert('register successfully');
									this.props.history.push('/');
								});
						}}
					>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
							isSubmitting
							/* and other goodies */
						}) => (
							<form onSubmit={handleSubmit}>
							<MDBRow className="pt-1">
								<MDBCol className="text-center">
									<MDBInput
									className="inputText"
									type="text"
									name="name"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.name}
									label="name"
								/>
								{errors.name && touched.name && errors.name}
							</MDBCol>
								</MDBRow>
									<MDBRow>
									<MDBCol className="text-center">
									<MDBInput
									className="inputText"
									type="email"
									name="email"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									label="email"
								/>
								{errors.email && touched.email && errors.email}
							</MDBCol>
								</MDBRow>
									<MDBRow>
									<MDBCol className="text-center">
									<MDBInput
									className="inputText"
									type="password"
									name="password"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
									label="password"
								/>
								{errors.password && touched.password && errors.password}
							</MDBCol>
								</MDBRow>
									<MDBRow className="pt-3">
									<MDBCol>
									<MDBBtn type="submit" disabled={isSubmitting}>
									Submit
									</MDBBtn>
										</MDBCol>
											</MDBRow>
											<MDBRow className="pt-2">
												<MDBCol>
													<p>Already have account ?</p>
													<MDBBtn type="button">
														<Link to="/">Login</Link>
													</MDBBtn>
												</MDBCol>
											</MDBRow>
							</form>
						)}
					</Formik>
					</MDBCol>
						</MDBRow>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		);
	}
}

export default withRouter(Register);
