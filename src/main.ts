import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();

/*
1. **`import { NestFactory } from '@nestjs/core';`**: Aqui, estamos importando a classe `NestFactory` do módulo `@nestjs/core`. Essa classe é responsável por criar instâncias de aplicativos Nest.

2. **`import { AppModule } from './app.module';`**: Estamos importando o módulo raiz do aplicativo, chamado `AppModule`. O `AppModule` contém a configuração global do aplicativo, incluindo os controladores, serviços e outros módulos.

3. **`async function bootstrap() { ... }`**: Aqui, definimos uma função assíncrona chamada `bootstrap()`. Essa função será responsável por inicializar o aplicativo.

4. **`const app = await NestFactory.create(AppModule);`**: Dentro da função `bootstrap()`, criamos uma instância do aplicativo usando o método estático `create()` da classe `NestFactory`. Passamos o `AppModule` como argumento para criar o aplicativo.

5. **`await app.listen(3000);`**: Após criar o aplicativo, chamamos o método `listen()` para iniciar o servidor HTTP na porta 3000. Isso permite que o aplicativo aguarde solicitações HTTP de entrada.

Em resumo, esse código inicializa um aplicativo Nest.js, cria uma instância do `AppModule` e inicia um servidor HTTP na porta 3000. A partir daqui, o aplicativo estará pronto para lidar com solicitações HTTP e executar a lógica de negócios definida nos controladores e serviços¹
*/
