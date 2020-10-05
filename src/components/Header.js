import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';

import * as actions from '../actions/notificationActions';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            unread: this.props.unread
        }
    }

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
                            <Badge className="notification-count" variant="secondary">{this.props.unread}</Badge>
                        </Nav.Link>
                        <Nav.Link>Vibakar <i className="fa fa-sign-out"></i> </Nav.Link>
                    </Nav>
                </Navbar>
            </>
            )
        }
}

function mapStateToProps(state) {
    let data = state.filter(n => n.read === false);
	return {
		unread: data.length
	}
}

export default  connect(mapStateToProps, actions)(withRouter(Header));