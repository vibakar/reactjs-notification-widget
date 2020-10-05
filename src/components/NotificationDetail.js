import React from 'react';
import data from '../data/notifications.json';

function NotificationDetail(props) {
    let getNotificationMsg = () => {
        let notification = data.find(n => n.id === props.match.params.id);
        if(notification) return notification.message;
        return "Notification not availble for this ID";
    }
    return (
        <div className="mt-5 text-center">
            <h3><u>Notification {props.match.params.id}</u></h3>
            <div className="mt-5">
                <p>{getNotificationMsg()}</p>
            </div>
        </div>
    )
}

export default NotificationDetail;