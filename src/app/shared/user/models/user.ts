import { Expose } from 'class-transformer';
import { AbstractUser } from '@ronas-it/angular-common';
import { DateTime } from 'luxon';

export class User extends AbstractUser {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public email: string;

  @Expose({ name: 'created_at' })
  public createdAt: DateTime;

  @Expose( { name: 'updated_at' })
  public updatedAt: DateTime;

  @Expose({ name: 'role_id' })
  public roleId: number;

  @Expose({ name: 'avatar_url' })
  public avatarUrl: string;

  constructor(user: Partial<User>) {
    super();
    Object.assign(this, user);
  }
}
