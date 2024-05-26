import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

/*
1. **`@Injectable()`**: O decorador `@Injectable()` é usado para marcar a classe `AppService` como um serviço injetável. Isso significa que ele pode ser injetado em outros componentes, como controladores ou outros serviços.

2. **`class AppService`**: Esta é a definição da classe `AppService`. Ela contém um único método chamado `getHello()`, que retorna a string "Hello World!".

3. **`getHello(): string`**: O método `getHello()` é um endpoint de API. Quando um cliente faz uma solicitação HTTP para este endpoint, o serviço retorna a string "Hello World!" como resposta.

Em resumo, este código define um serviço chamado `AppService` que possui um único método para retornar a saudação "Hello World!". Essa é uma implementação simples, mas em um aplicativo real, você pode adicionar lógica de negócios mais complexa a esse serviço e criar outros serviços para diferentes funcionalidades²⁴.
*/
