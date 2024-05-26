import { Controller, Get } from '@nestjs/common';
import { AutorService } from './autor.service';

@Controller('autores')
export class AutorController {
  constructor(private autorService: AutorService) {}

  @Get()
  findAll() {
    return this.autorService.findAll();
  }
}

/*
1. **`import { Controller, Get } from '@nestjs/common';`**: Aqui, estamos importando os decoradores `Controller` e `Get` do módulo `@nestjs/common`. Esses decoradores são usados para definir controladores e endpoints da API.

2. **`@Controller('autores')`**: O decorador `@Controller('autores')` marca a classe `AutorController` como um controlador. Ele especifica que os endpoints definidos nesta classe estarão sob o caminho base "/autores".

3. **`class AutorController`**: Esta é a definição da classe `AutorController`. Ela contém um único método chamado `findAll()`, que será usado para buscar todos os registros de autores.

4. **`constructor(private autorService: AutorService) {}`**: O construtor da classe `AutorController` recebe uma instância do serviço `AutorService` como argumento. Isso permite que o controlador chame os métodos do serviço para buscar dados relacionados aos autores.

5. **`@Get()`**: O decorador `@Get()` especifica que o método `findAll()` deve ser chamado quando uma solicitação HTTP GET é feita para o endpoint "/autores".

6. **`findAll() { ... }`**: O método `findAll()` chama o método correspondente no serviço `autorService`. Neste caso, ele retorna todos os registros de autores.

Em resumo, este código define um controlador chamado `AutorController` com um único endpoint ("/autores") que retorna todos os registros de autores quando acessado via HTTP GET. 
*/
