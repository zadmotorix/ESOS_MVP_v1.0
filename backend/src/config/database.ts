export const databaseConfig = {
  client: 'postgres',
  connection: process.env.DATABASE_URL || '',
  pool: { min: 2, max: 10 }
};
