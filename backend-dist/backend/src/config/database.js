"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
exports.databaseConfig = {
    client: 'postgres',
    connection: process.env.DATABASE_URL || '',
    pool: { min: 2, max: 10 }
};
