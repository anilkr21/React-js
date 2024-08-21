import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import PersonIcon from '@mui/icons-material/Person';
import VpnKeyOffIcon from '@mui/icons-material/VpnKeyOff';
import { Link } from '@mui/material';
import { FcGoogle } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";
import { ImAppleinc } from "react-icons/im";

function LoginPage() {
  return (
    <div className='loginPage d-flex align-items-center'>
        <Container >
            <Row className='d-flex justify-content-center loginRow  '>
                <Col sm={6} className='rounded-start  loginContainer'  >
                    {/* <img className='w-100 cover-fill' src={Imgss} alt="" /> */}
                    <h1 className='item-text p-5'>Welcome Back!</h1>

                 </Col>
                <Col sm={6}  className='rounded-end loginCol2 ' >
                        <h5 ClassName="mb-5 ">Login</h5>
                            <div className="Form mb-3  " >
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <div className='d-flex ' ><div className='mx-1'><PersonIcon/></div><Form.Label className="pt-1" >Email address</Form.Label></div>
                            <Form.Control className='loginInput' type="text" placeholder="name@mail.com" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                            </Form.Group>
                            </div>
                            <div className="Form mb-3  " >
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <div className='d-flex ' ><div className=' mx-1'><VpnKeyOffIcon/></div><Form.Label className="pt-1" >Password</Form.Label></div>
                            <Form.Control className='loginInput' type="password" placeholder="@Password"  required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                            </Form.Group>
                            </div>
                            <div className="Form mb-3  ">
                            <Form.Group className="mb-3">
                            <div className=' d-flex  align-content-center'>
                            <Form.Check
                            required
                            label="Remember password"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"/>
                                    <Link className='pt-1 ms-5 px-5 forgotpassword'
                                        href="/forgotPassword"
                                        variant="body2"
                                        style={{textDecoration:"None",color:"#7D6FD8"}}
                                    >
                                        Forgot password?
                                    </Link>
                            </div>
                            </Form.Group>
                            <Button className='loginInput buttonColor' type="submit">Login</Button>
                            </div>

                            <div className='signinusing'>
                                <p className='text-center fs-8'>SignIn using</p>
                                <div className='text-center d-flex justify-content-evenly'><FcGoogle/><FaMeta/><ImAppleinc/></div>
                            </div>
                            <div className='mt-3 ms-4 ps-4 w-75 text-center'>
                            <Link className='pt-1 '
                                        href="/SignUp"
                                        variant="body2"
                                        style={{textDecoration:"None",color:"#7D6FD8"}}
                                    >
                                        SignUp?
                                    </Link>
                            </div>
                    
                </Col>

            </Row>
        </Container>
    </div>
  )
}

export default LoginPage