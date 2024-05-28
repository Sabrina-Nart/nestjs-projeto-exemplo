import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { GeneroEnum } from './genero.enum';
@Entity({ name: 'autores' })
export class AutorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  nome: string;

  @Column({ type: 'date', name: 'data_nascimento', nullable: true })
  dataNascimento: Date;

  @Column({
    type: 'enum',
    enum: GeneroEnum,
    default: GeneroEnum.INDEFINIDO,
    nullable: true,
  })
  genero: GeneroEnum;
}

/*
Este código está escrito em TypeScript e faz uso do **TypeORM**, uma biblioteca popular para mapeamento objeto-relacional (ORM) em projetos Node.js. Vou explicar cada parte:

1. **`import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';`**: Aqui, estamos importando três decoradores do TypeORM:
    - `@Entity`: Define que a classe `AutorEntity` é uma entidade (ou seja, uma tabela no banco de dados).
    - `@PrimaryGeneratedColumn('uuid')`: Define que a coluna `id` é uma chave primária gerada automaticamente com valores UUID (identificadores únicos universais).
    - `@Column({ length: 100 })`: Define que a coluna `nome` é uma coluna de texto com no máximo 100 caracteres.

2. **`@Entity({ name: 'autores' })`**: Aqui, estamos especificando que a entidade `AutorEntity` está associada à tabela chamada "autores" no banco de dados. O nome da tabela é definido como "autores".

3. **`class AutorEntity`**: Esta é a definição da classe `AutorEntity`. Ela representa uma linha na tabela "autores" e possui duas propriedades:
    - `id`: Uma chave primária gerada automaticamente com valores UUID.
    - `nome`: Uma coluna de texto com no máximo 100 caracteres para armazenar o nome do autor.

Em resumo, esse código define uma entidade chamada `AutorEntity` que representa autores em uma tabela chamada "autores" no banco de dados. A tabela terá uma coluna `id` com valores UUID e uma coluna `nome` para armazenar os nomes dos autores¹²³.
*/
