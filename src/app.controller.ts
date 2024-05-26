import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

/*

1. **`@Controller()`**: O decorador `@Controller()` marca a classe `AppController` como um controlador. Controladores são responsáveis por lidar com as solicitações HTTP e definir os endpoints da API.

2. **`class AppController`**: Esta é a definição da classe `AppController`. Ela contém um único método chamado `getHello()`, que é um endpoint de API.

3. **`@Get()`**: O decorador `@Get()` especifica que o método `getHello()` deve ser chamado quando uma solicitação HTTP GET é feita para o endpoint raiz ("/").

4. **`getHello(): string`**: O método `getHello()` retorna a string "Hello World!". Quando um cliente faz uma solicitação HTTP GET para o endpoint raiz, o serviço retorna essa saudação como resposta.

Em resumo, este código define um controlador chamado `AppController` com um único endpoint que retorna a saudação "Hello World!" quando acessado via HTTP GET. 

*/
