"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notify = notify;
const notification_service_1 = require("./notification.service");
const template_service_1 = require("./template.service");
function notify(event, channel, to) {
    const msg = template_service_1.templates[event] || `Event: ${event}`;
    return (0, notification_service_1.send)(channel, to, msg);
}
