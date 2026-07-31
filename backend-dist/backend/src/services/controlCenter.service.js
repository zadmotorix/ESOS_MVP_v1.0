"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summary = exports.list = void 0;
const incidents = [
    { id: 1, type: "Driver Delay", priority: "HIGH", status: "OPEN" },
    { id: 2, type: "Vehicle Cleaning", priority: "MEDIUM", status: "OPEN" },
    { id: 3, type: "Pet Emergency", priority: "CRITICAL", status: "ESCALATED" }
];
const list = () => incidents;
exports.list = list;
const summary = () => ({
    open: incidents.filter(i => i.status == "OPEN").length,
    critical: incidents.filter(i => i.priority == "CRITICAL").length,
    escalated: incidents.filter(i => i.status == "ESCALATED").length
});
exports.summary = summary;
