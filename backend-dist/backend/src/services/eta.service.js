"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estimateEtaMinutes = estimateEtaMinutes;
function estimateEtaMinutes(distanceKm, avgSpeedKmph = 30) {
    if (avgSpeedKmph <= 0)
        return 0;
    return Math.round((distanceKm / avgSpeedKmph) * 60);
}
