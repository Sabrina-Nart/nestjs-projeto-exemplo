import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { AutorModule } from './autor/autor.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), AutorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/*
1. **`import { Module } from '@nestjs/common';`**: Aqui, estamos importando a classe `Module` do módulo `@nestjs/common`. Essa classe é usada para criar módulos no Nest.js.

2. **`@Module({ ... })`**: O decorador `@Module()` é usado para definir as configurações do módulo. Ele aceita um objeto com várias propriedades:
    - **`imports`**: Aqui, estamos importando outros módulos que serão usados neste módulo. No seu caso, estamos importando o módulo `TypeOrmModule` (para integração com o TypeORM) e o módulo `AutorModule`.
    - **`controllers`**: Especifica os controladores (ou endpoints da API) que pertencem a este módulo. No seu caso, temos o `AppController`.
    - **`providers`**: Define os provedores (ou serviços) que serão criados pelo injetor do Nest e que podem ser compartilhados entre os componentes deste módulo.

3. **`TypeOrmModule.forRoot(dataSourceOptions)`**: Aqui, estamos configurando o módulo `TypeOrmModule` para usar as opções de conexão definidas em `dataSourceOptions`. Isso permite que o Nest.js se conecte ao banco de dados usando o TypeORM.

4. **`AutorModule`**: Estamos importando o módulo `AutorModule`, que provavelmente contém controladores e serviços relacionados aos autores do aplicativo.

Em resumo, o módulo raiz (`AppModule`) organiza os componentes do aplicativo, como controladores, serviços e outros módulos. Ele também define a configuração global, como a conexão com o banco de dados. A partir daqui, o Nest.js construirá o grafo de aplicativos interno para resolver as dependências entre os módulos e provedores¹.
*/
