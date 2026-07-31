"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashboard = useDashboard;
const react_1 = require("react");
const ApiService_1 = require("../services/ApiService");
function useDashboard() {
    const [data, setData] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => { (0, ApiService_1.fetchDashboard)().then(r => { setData(r); setLoading(false); }); }, []);
    return { data, loading };
}
