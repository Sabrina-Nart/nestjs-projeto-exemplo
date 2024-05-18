import { DataSource, DataSourceOptions } from 'typeorm';
import dataSource from './data-source';

export const DataSourceOptionsSeed: DataSourceOptions = {
    ...DataSourceOptions,
    migrations: ['dist/db/seeds/*.js'],
};

export default new DataSource(DataSourceOptionsSeed);
