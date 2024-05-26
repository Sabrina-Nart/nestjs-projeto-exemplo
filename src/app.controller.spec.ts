import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

/*
1. **`import { Test, TestingModule } from '@nestjs/testing';`**: Aqui, estamos importando as classes `Test` e `TestingModule` do módulo `@nestjs/testing`. Essas classes são usadas para criar um ambiente de teste para o Nest.js.

2. **`describe('AppController', () => { ... });`**: Este bloco descreve um conjunto de testes para o controlador `AppController`. O nome "AppController" é usado como uma descrição para agrupar os testes relacionados.

3. **`beforeEach(async () => { ... });`**: Dentro deste bloco, estamos definindo um gancho (hook) que será executado antes de cada teste. Ele cria uma instância do aplicativo de teste e injeta o `AppController` e o `AppService`.

4. **`const app: TestingModule = await Test.createTestingModule({ ... }).compile();`**: Aqui, estamos criando um módulo de teste usando o método estático `createTestingModule()`. Estamos especificando que o controlador `AppController` e o serviço `AppService` devem ser incluídos no módulo de teste.

5. **`appController = app.get<AppController>(AppController);`**: Estamos obtendo uma instância do `AppController` do módulo de teste. Isso nos permite testar os métodos do controlador.

6. **`describe('root', () => { ... });`**: Este bloco descreve um teste específico para o método `getHello()` do controlador. O nome "root" é usado como uma descrição para este teste.

7. **`it('should return "Hello World!"', () => { ... });`**: Aqui, estamos definindo o teste real. Ele verifica se o resultado do método `getHello()` é igual a "Hello World!".

Em resumo, este código define um conjunto de testes para o controlador `AppController`, onde um dos testes verifica se o método `getHello()` retorna a string "Hello World!".
*/
