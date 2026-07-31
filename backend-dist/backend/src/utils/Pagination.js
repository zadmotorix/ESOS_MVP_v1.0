"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = paginate;
function paginate(items, page = 1, pageSize = 20) {
    const start = (page - 1) * pageSize;
    return { items: items.slice(start, start + pageSize), page, pageSize, total: items.length };
}
