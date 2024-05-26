import { DataSource, DataSourceOptions } from 'typeorm';
import { dataSourceOptions } from './data-source';

export const dataSourceOptionsSeed: DataSourceOptions = {
  ...dataSourceOptions,
  migrations: ['dist/db/seeds/*.js'],
};

export default new DataSource(dataSourceOptionsSeed);

/*
1. **`import { DataSource, DataSourceOptions } from 'typeorm';`**: Aqui, estamos importando as classes `DataSource` e `DataSourceOptions` do módulo `typeorm`. Essas classes são usadas para criar e configurar conexões com bancos de dados.

2. **`dataSourceOptions`**: Você já definiu essas opções em outro lugar (provavelmente no arquivo `data-source.ts`). Aqui, estamos criando uma nova variável chamada `dataSourceOptionsSeed` que é uma cópia das opções originais. Além disso, adicionamos a propriedade `migrations` para especificar os arquivos de migração.

3. **`export default new DataSource(dataSourceOptionsSeed);`**: Aqui, estamos criando uma nova instância do **DataSource** usando as opções `dataSourceOptionsSeed`. Essa instância representa a conexão com o banco de dados e pode ser usada em todo o seu aplicativo.

Em resumo, o código cria uma instância do **DataSource** com as opções fornecidas e a exporta como o valor padrão. Essa instância será usada para se conectar ao banco de dados e executar operações relacionadas a migrações e outras tarefas⁵. 
*/
