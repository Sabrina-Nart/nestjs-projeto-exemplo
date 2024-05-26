import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAutorEntity1716246193302 implements MigrationInterface {
    name = 'CreateAutorEntity1716246193302'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "autores" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying(100) NOT NULL, CONSTRAINT "PK_8973029e8bb26f72a4738afc834" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "autores"`);
    }
}

/*
Esta migração é responsável por criar uma nova tabela chamada "autores" no seu banco de dados. Vamos analisar cada parte:

1. **`import { MigrationInterface, QueryRunner } from "typeorm";`**: Esta linha importa as classes necessárias para criar uma migração. A `MigrationInterface` define os métodos necessários para migrações, e o `QueryRunner` permite executar consultas SQL.

2. **`export class CreateAutorEntity1716246193302 implements MigrationInterface { ... }`**: Esta classe representa a própria migração. Ela implementa a `MigrationInterface` e possui dois métodos: `up` e `down`.

3. **`name = 'CreateAutorEntity1716246193302'`**: A propriedade `name` especifica um identificador único para esta migração. Isso ajuda a controlar quais migrações foram aplicadas.

4. **`public async up(queryRunner: QueryRunner): Promise<void> { ... }`**: O método `up` é executado ao aplicar a migração. Ele cria a tabela "autores" usando a consulta SQL fornecida.

    - A declaração `CREATE TABLE` define a estrutura da tabela:
        - `"id"`: Uma coluna do tipo UUID (Identificador Único Universal) com um valor padrão gerado por `uuid_generate_v4()`.
        - `"nome"`: Uma coluna de texto (string) com um comprimento máximo de 100 caracteres.
        - `"PK_8973029e8bb26f72a4738afc834"`: Uma restrição de chave primária na coluna `"id"`.

5. **`public async down(queryRunner: QueryRunner): Promise<void> { ... }`**: O método `down` é executado ao reverter a migração. Ele exclui a tabela "autores" usando a instrução `DROP TABLE`.

Em resumo, esta migração cria uma nova tabela chamada "autores" com uma coluna de ID (UUID) e uma coluna de "nome" (texto).
*/
