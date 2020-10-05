import React from 'react';
import { withRouter } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup'
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

class Notification extends React.Component {

    handleChange = (e, id) => {
        this.props.handleIndividualChange(e, id);
    }

    goToDetailPage = (e, id) => {
        e.preventDefault();
        this.props.history.push(`/notification/${id}`);
    }

    render() {
        return (
            <>
                <ListGroup.Item className={this.props.data.read === false ? 'light-grey' : 'white'}>
                    <span>
                        <Form.Check className="d-inline-block" type="checkbox" checked={this.props.data.checked} onChange={(e)=> this.handleChange(e, this.props.data.id)} />
                    </span>
                    <span><Nav.Link className="d-inline-block" onClick={(e)=> {this.goToDetailPage(e, this.props.data.id)}}>{this.props.data.message}</Nav.Link></span>
                    <span className="float-right">{this.props.data.time}</span>
                </ListGroup.Item>
            </>
        );
    }
}

export default withRouter(Notification);
