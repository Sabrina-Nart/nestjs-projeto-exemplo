import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});

/*
Claro! O código que você compartilhou é um teste de integração (end-to-end) para o controlador `AppController` em um aplicativo construído com **Nest.js**. Vamos analisar cada parte:

1. **`import { Test, TestingModule } from '@nestjs/testing';`**: Aqui, estamos importando as classes `Test` e `TestingModule` do módulo `@nestjs/testing`. Essas classes são usadas para criar um ambiente de teste para o Nest.js.

2. **`describe('AppController (e2e)', () => { ... });`**: Este bloco descreve um conjunto de testes para o controlador `AppController`. O nome "AppController (e2e)" indica que esses são testes de integração (end-to-end).

3. **`beforeEach(async () => { ... });`**: Dentro deste bloco, estamos definindo um gancho (hook) que será executado antes de cada teste. Ele cria uma instância do aplicativo de teste e a inicializa.

4. **`it('/ (GET)', () => { ... });`**: Aqui, estamos definindo um teste específico para o endpoint raiz ("/") do controlador. O teste verifica se a resposta do endpoint é "Hello World!" com status 200.

    - O método `request(app.getHttpServer())` cria uma solicitação HTTP para o servidor do aplicativo.
    - O método `.get('/')` faz uma solicitação GET para o endpoint raiz.
    - O método `.expect(200)` verifica se a resposta tem status 200 (OK).
    - O método `.expect('Hello World!')` verifica se o corpo da resposta é "Hello World!".

Em resumo, este teste verifica se o endpoint raiz do controlador `AppController` retorna a saudação "Hello World!" com sucesso.
*/
