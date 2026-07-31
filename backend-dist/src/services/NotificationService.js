"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotifications = exports.notifications = void 0;
exports.notifications = [
    { id: 1, message: 'Morning dispatch completed', level: 'success' },
    { id: 2, message: '2 vehicles due for service', level: 'warning' }
];
const getNotifications = () => exports.notifications;
exports.getNotifications = getNotifications;
