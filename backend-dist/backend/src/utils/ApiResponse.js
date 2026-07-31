"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    static success(data, message = 'OK') {
        return { success: true, message, data };
    }
    static failure(message) {
        return { success: false, message };
    }
}
exports.ApiResponse = ApiResponse;
