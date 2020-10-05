import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import data from '../data/notifications.json';
import Notification from './Notification';

class NotificationList extends React.Component {
    constructor() {
        super();
        this.state = {
            notifications: data.map(obj=> ({ ...obj, checked: false })),
            disableBtns: true,
            checkRootCheckbox: false
        }
    }

    handleRootCheckbox = (event) => {
        let checkboxStatus = event.target.checked;
        this.setState({
            notifications: this.state.notifications.map(obj=> ({ ...obj, checked: checkboxStatus })),
            disableBtns: !checkboxStatus,
            checkRootCheckbox: checkboxStatus
        });
    }

    handleIndividualChange = (event, id) => {
        let changedNotifications = this.state.notifications.map((obj) => {
            if(obj.id === id) {
                return {...obj, checked: event.target.checked}
            } else {
                return {...obj}
            }
        });
        this.setState({
            notifications: changedNotifications,
            disableBtns: !changedNotifications.some(n => n.checked === true)
        });
    }

    handleBtns = (e, state) => {
        let modifyReadState = this.state.notifications.map((obj) => {
            if(obj.checked) {
                return {...obj, checked: false, read: state}
            } else {
                return {...obj}
            }
        });
        this.setState({
            notifications: modifyReadState,
            disableBtns: true,
            checkRootCheckbox: false
        })
    }

    render() { 
        return (       
            <>
                <ListGroup className="notification-list">
                    <ListGroup.Item>
                        <span>
                            <Form.Check className="d-inline-block mr-2" label="Select all" type="checkbox" checked={this.state.checkRootCheckbox} onChange={this.handleRootCheckbox}/>
                            <Button variant="outline-primary mr-2" size="sm" disabled={this.state.disableBtns} onClick={(e) => {this.handleBtns(e, true)}}>Mark as read</Button>
                            <Button variant="outline-secondary" size="sm" disabled={this.state.disableBtns} onClick={(e) => {this.handleBtns(e, false)}}>Mark as unread</Button>
                        </span>
                    </ListGroup.Item>
                        {
                            this.state.notifications.map((n, i) => {
                                return (<Notification key={i} history={this.props.history} index={i} data={n} handleIndividualChange={this.handleIndividualChange} checked={this.state.selectAll}/>);
                            })
                        }
                </ListGroup>
            </>
        )
    }
}

export default NotificationList;