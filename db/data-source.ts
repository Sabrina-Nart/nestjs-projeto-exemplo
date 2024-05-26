import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  database: 'database',
  username: 'postgres',
  password: 'postgres',
  port: 5432,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
};

export default new DataSource(dataSourceOptions);

/*

Essas opções são usadas para configurar uma instância do **DataSource** no **TypeORM**. Vou explicar cada parte:

1. **`type: 'postgres'`**: Aqui, estamos especificando o tipo de banco de dados que você está usando. Neste caso, é o PostgreSQL. O **TypeORM** suporta vários tipos de bancos de dados, como MySQL, SQLite, SQL Server, Oracle, entre outros.

2. **`database: 'database'`**: Isso define o nome do banco de dados que você deseja conectar. Substitua `'database'` pelo nome real do seu banco de dados.

3. **`username: 'postgres'`** e **`password: 'postgres'`**: Essas opções definem o nome de usuário e a senha para autenticação no banco de dados. No exemplo, estamos usando o usuário `'postgres'`. Lembre-se de substituir esses valores pelos seus dados reais.

4. **`port: 5432`**: Aqui, estamos especificando a porta na qual o PostgreSQL está ouvindo. O valor padrão para o PostgreSQL é 5432, mas você pode alterá-lo conforme necessário.
*/
//5. **`entities: ['dist/**/*.entity.js']`**: Isso define os arquivos de entidades (ou modelos) que o **TypeORM** deve carregar. No exemplo, estamos carregando todos os arquivos `.entity.js` na pasta `dist`. Certifique-se de ajustar o caminho e o padrão de arquivo conforme a estrutura do seu projeto.

//6. **`migrations: ['dist/db/migrations/*.js']`**: Aqui, estamos especificando os arquivos de migração que o **TypeORM** deve usar. As migrações são usadas para gerenciar alterações no esquema do banco de dados. Novamente, ajuste o caminho conforme necessário.

//Em resumo, essas opções configuram a conexão com o banco de dados PostgreSQL e definem os arquivos de entidades e migrações que o **TypeORM** deve usar.
