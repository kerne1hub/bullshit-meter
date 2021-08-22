import { Expose } from 'class-transformer';

export class AuthGoogleCredentials {
  @Expose({ name: 'google_access_token' })
  public accessToken: string;

  constructor(credentials: Partial<AuthGoogleCredentials>) {
    Object.assign(this, credentials);
  }
}
