-- ESOS initial schema (starter)
CREATE TABLE users(
 id SERIAL PRIMARY KEY,
 email VARCHAR(255) UNIQUE NOT NULL,
 password_hash TEXT NOT NULL,
 role VARCHAR(50) NOT NULL,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bookings(
 id SERIAL PRIMARY KEY,
 customer_name VARCHAR(255),
 pickup TEXT,
 destination TEXT,
 status VARCHAR(40),
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
