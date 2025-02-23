
export interface GlobalConfig {
  username: string;
  password: string;
  dbHost: string;
  dbPort: number;
  dbName: string;
  dbUser: string;
  dbPassword: string;
}

export const config: GlobalConfig = {
  username: process.env.APP_USERNAME || 'default_username',
  password: process.env.APP_PASSWORD || 'default_password',

  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432, 
  dbName: process.env.DB_NAME || 'mydatabase',
  dbUser: process.env.DB_USER || 'dbuser',
  dbPassword: process.env.DB_PASSWORD || 'dbpassword',
};
