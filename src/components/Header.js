import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
    goToNotifications = () => {
        this.props.history.push('/notifications');
    }

    goToHome = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Navbar.Brand>Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link onClick={this.goToHome}>Home</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={this.goToNotifications}>
                            <i className="fa fa-bell"></i>
                            <Badge className="notification-count" variant="secondary">8</Badge>
                        </Nav.Link>
                        <Nav.Link>Vibakar <i className="fa fa-sign-out"></i> </Nav.Link>
                    </Nav>
                </Navbar>
            </>
            )
        }
}

export default withRouter(Header);