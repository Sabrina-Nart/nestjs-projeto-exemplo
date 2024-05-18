import { DataSource, DataSourceOptions } from  'typeorm';
    
export const DataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    database: 'database',
    username: 'postgres',
    password: 'postgres',
    posrt: 5432,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
};

export default new DataSource(DataSourceOptions);