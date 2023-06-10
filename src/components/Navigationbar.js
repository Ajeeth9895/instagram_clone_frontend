import React from 'react';
import Logo from '../assets/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { Form, NavDropdown } from 'react-bootstrap';
import { isAuthenticated } from '../helpers/Authentication';



function Navigationbar() {


    let navigate = useNavigate()

    let picLink = "https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg"

    const handleLogout = async () => {
        try {
            sessionStorage.clear()
            navigate('/login')
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div>
            {/*calling isAuthenticate function to get status && user after successfully login  */}
            {isAuthenticated() && (
                <>
                    <Navbar collapseOnSelect expand="lg" className='fixed-top' bg="" style={{ backgroundColor: "lightgray" }} variant="dark" >
                        <Container>
                            <Navbar.Brand onClick={() => navigate('/home')}><img src={Logo} style={{ height: "2em" }} alt='new' /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                </Nav>
                                <Nav className='me-3'>
                                    {/* <span class="material-symbols-outlined">
                                        home
                                    </span> */}
                                    <span className="material-symbols-outlined" style={{ cursor: 'pointer' }} onClick={() => navigate('/home')}>
                                        home
                                    </span>
                                </Nav>
                                <Nav className='me-3'>
                                    <span className="material-symbols-outlined" style={{ cursor: 'pointer' }} onClick={() => navigate('/createPost')}>
                                        add_circle
                                    </span>
                                </Nav>
                                <Nav className='me-3'>
                                    <NavDropdown title={<img src={ picLink} width="30" height="30" class="rounded-circle" alt='' />}>
                                        <NavDropdown.Item onClick={() => navigate('/profile')}>
                                            Profile
                                        </NavDropdown.Item>
                                        <NavDropdown.Item onClick={() => handleLogout()}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </>
            )
            }

            {/* calling isAuthenticate function to get status && user after successfully logout  */}
            {!isAuthenticated() && (
                <>
                    <Navbar collapseOnSelect expand="lg" bg="" style={{ background: "lightgray" }} variant="dark">
                        <Container>
                            <Navbar.Brand ><img src={Logo} style={{ height: "2em" }} alt='new' /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                </Nav>
                                <Nav>
                                    <Nav.Link style={{ color: "black" }} onClick={() => navigate('/login')}>Login</Nav.Link>
                                    <Nav.Link style={{ color: "black" }} onClick={() => navigate('/signUp')}>Sign-up</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </>
            )
            }
        </div>
    )
}



export default Navigationbar;
