// config.ts

/**
 * Global configuration file for storing sensitive credentials and database connection details.
 * 
 * It includes default values, but it is recommended to override these values using environment variables
 * for production or testing purposes. This file centralizes the configuration, ensuring that all parts of
 * the application reference the same data.
 */

// Define an interface for the global configuration object
export interface GlobalConfig {
  username: string;
  password: string;
  dbHost: string;
  dbPort: number;
  dbName: string;
  dbUser: string;
  dbPassword: string;
}

// Create the configuration object using environment variables with fallback defaults
export const config: GlobalConfig = {
  // Application credentials
  username: process.env.APP_USERNAME || 'default_username',
  password: process.env.APP_PASSWORD || 'default_password',

  // Database connection details
  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432, // Default port (e.g., PostgreSQL)
  dbName: process.env.DB_NAME || 'mydatabase',
  dbUser: process.env.DB_USER || 'dbuser',
  dbPassword: process.env.DB_PASSWORD || 'dbpassword',
};
