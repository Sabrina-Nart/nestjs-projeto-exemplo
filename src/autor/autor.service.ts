import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AutorEntity } from './autor.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(AutorEntity)
    private autorRepository: Repository<AutorEntity>,
  ) {}

  findAll() {
    return this.autorRepository.find();
  }
}

/*
1. **`import { Injectable } from '@nestjs/common';`**: Aqui, estamos importando o decorador `Injectable` do módulo `@nestjs/common`. O decorador `Injectable` é usado para marcar a classe `AutorService` como um serviço injetável no Nest.js.

2. **`@Injectable()`**: O decorador `@Injectable()` é aplicado à classe `AutorService`. Isso permite que o Nest.js crie uma instância dessa classe e a injete em outros componentes, como controladores ou outros serviços.

3. **`class AutorService`**: Esta é a definição da classe `AutorService`. Ela contém um método chamado `findAll()`, que será usado para buscar todos os registros da entidade `AutorEntity`.

4. **`constructor(...)`**: O construtor da classe `AutorService` é onde a injeção de dependência ocorre. Ele recebe uma instância do repositório `Repository<AutorEntity>` como argumento. O repositório é responsável por interagir com a tabela (entidade) `AutorEntity` no banco de dados.

5. **`findAll() { ... }`**: O método `findAll()` chama o método `find()` no repositório `autorRepository`. Isso retorna todos os registros da tabela `AutorEntity`.

Em resumo, o serviço `AutorService` fornece um método `findAll()` que busca todos os registros da tabela de autores usando o repositório `autorRepository`. 
*/
