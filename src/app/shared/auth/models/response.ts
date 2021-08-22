import { Expose, Type } from 'class-transformer';
import { User } from '@shared/user';

export class AuthResponse {
  public token: string;
  public ttl: number;

  @Expose({ name: 'refresh_ttl' })
  public refreshTtl: number;

  @Type(() => User)
  public user: User;
}
