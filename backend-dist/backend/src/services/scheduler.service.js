"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeline = void 0;
exports.current = current;
const timeline = [
    { hour: 6, scenario: "NORMAL" },
    { hour: 8, scenario: "PEAK_HOUR" },
    { hour: 12, scenario: "AIRPORT_RUSH" },
    { hour: 17, scenario: "PEAK_HOUR" },
    { hour: 20, scenario: "FESTIVAL_SURGE" },
    { hour: 23, scenario: "NORMAL" }
];
const getTimeline = () => timeline;
exports.getTimeline = getTimeline;
function current(hour) {
    return [...timeline].reverse().find(x => hour >= x.hour) || timeline[0];
}
