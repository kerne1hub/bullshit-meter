import { Expose } from 'class-transformer';

export class UpdateProfileRequest {
  @Expose()
  public name?: string;

  @Expose()
  public email?: string;

  @Expose()
  public avatarFile?: File;

  constructor(params: Partial<UpdateProfileRequest>) {
    Object.assign(this, params);
  }
}
