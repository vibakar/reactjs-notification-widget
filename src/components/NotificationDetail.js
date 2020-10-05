import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/notificationActions';

class NotificationDetail extends React.Component {

    componentDidMount() {
        this.props.getAllNotifications();
    }

    render() {
        return (
            <div className="mt-5 text-center">
                <h3><u>Notification Detail</u></h3>
                <div className="mt-5">
                    <p>Message: {this.props.notification?.message}</p>
                    <p>Time: {this.props.notification?.time}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    let data = state.find((n) => n.id === parseInt(props.match.params.id))
	return {
		notification: data
	}
}

export default connect(mapStateToProps, actions)(NotificationDetail);