import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertAutorEntity1716246193303 implements MigrationInterface {
    name = 'InsertAutorEntity1716246193303'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO autores (id, nome) VALUES 
            ('5751520f-04b6-4777-a70f-6835f6744808', 'Martin Fowler')
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM autores WHERE id = '5751520f-04b6-4777-a70f-6835f6744808'
        `);
    }

}

/*
Parece que esta migração está inserindo um registro na tabela "autores" com o nome "Martin Fowler" e, em seguida, removendo esse registro na migração reversa.

Vamos analisar cada parte:

1. **`public async up(queryRunner: QueryRunner): Promise<void> { ... }`**: Este é o método `up` da migração. Ele é executado quando a migração é aplicada (ou seja, quando você executa as migrações para atualizar o esquema do banco de dados). Neste caso, estamos inserindo um registro com o ID `'5751520f-04b6-4777-a70f-6835f6744808'` e o nome `'Martin Fowler'` na tabela "autores".

2. **`public async down(queryRunner: QueryRunner): Promise<void> { ... }`**: Este é o método `down` da migração. Ele é executado quando a migração é revertida (ou seja, quando você desfaz as migrações para reverter as alterações no esquema do banco de dados). Neste caso, estamos excluindo o registro com o ID `'5751520f-04b6-4777-a70f-6835f6744808'` da tabela "autores".

Em resumo, esta migração adiciona e remove um registro específico na tabela "autores". Isso pode ser útil para inicializar dados ou fazer alterações específicas no banco de dados durante o processo de migração.
*/
