import { Entity, PrimaryKey, Property } from '@mikro-orm/core'

@Entity()
export class Blog {
  @PrimaryKey({ type: 'int' })
  id!: number;

  @Property()
  title!: string;

  @Property()
  author!: string;

  @Property()
  content!: string;

  @Property({ type: 'text' })
  description = '';
}
