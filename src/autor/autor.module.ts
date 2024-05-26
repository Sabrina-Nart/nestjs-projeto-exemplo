import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutorEntity } from './autor.entity';
import { AutorService } from './autor.service';
import { AutorController } from './autor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AutorEntity])],
  controllers: [AutorController],
  providers: [AutorService],
})
export class AutorModule {}

/*
1. **`import { Module } from '@nestjs/common';`**: Aqui, estamos importando a classe `Module` do módulo `@nestjs/common`. Essa classe é usada para criar módulos no Nest.js.

2. **`@Module({ ... })`**: O decorador `@Module()` é usado para definir as configurações do módulo. Ele aceita um objeto com várias propriedades:
    - **`imports`**: Aqui, estamos importando o módulo `TypeOrmModule.forFeature([AutorEntity])`. Isso indica que o módulo `AutorModule` está usando o TypeORM para interagir com a entidade `AutorEntity`.
    - **`controllers`**: Especifica os controladores (ou endpoints da API) que pertencem a este módulo. No seu caso, temos o `AutorController`.
    - **`providers`**: Define os provedores (ou serviços) que serão criados pelo injetor do Nest e que podem ser compartilhados entre os componentes deste módulo. No seu caso, temos o `AutorService`.

3. **`TypeOrmModule.forFeature([AutorEntity])`**: Aqui, estamos configurando o módulo `TypeOrmModule` para incluir a entidade `AutorEntity`. Isso permite que o Nest.js crie um repositório específico para a entidade `AutorEntity`, que será usado pelo serviço `AutorService`.

4. **`controllers: [AutorController]`**: Estamos especificando que o controlador `AutorController` pertence a este módulo. O controlador lida com as solicitações HTTP relacionadas aos autores.

5. **`providers: [AutorService]`**: Estamos definindo que o serviço `AutorService` pertence a este módulo. O serviço contém a lógica de negócios relacionada aos autores.

Em resumo, o módulo de autor (`AutorModule`) organiza os componentes relacionados aos autores, como o controlador e o serviço. Ele também configura a integração com o TypeORM para a entidade `AutorEntity`.
*/
