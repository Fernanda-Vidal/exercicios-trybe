type TNotification = { type: string, send: (message: string) => void };

const consoleNotification: TNotification = {
    type: 'Console',
    send: (message) => console.log('Console: ', message),
};

const phoneNotification: TNotification = {
    type: 'Phone',
    send: (message) => console.log('Phone: ', message),
};

const emailNotification: TNotification = {
    type: 'Email',
    send: (message) => console.log('Email: ', message),
};

const notifications: TNotification[] = [
    consoleNotification,
    phoneNotification,
    emailNotification,
];

function progressNotification(
    message: string, 
    type_: string,
    notificationsArray: TNotification[] = notifications,
): void {
    notificationsArray.forEach((notification) => {
        if (notification.type === type_) {
            notification.send(message);
        }
    });
}

progressNotification('Hello, world', 'phone',
[phoneNotification, emailNotification, consoleNotification]);