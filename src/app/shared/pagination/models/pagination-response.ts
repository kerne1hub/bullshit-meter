/* eslint-disable @typescript-eslint/ban-types */
import { Exclude, Expose, Type } from 'class-transformer';

export class PaginationResponse<T> {
  @Expose({ name: 'current_page' })
  public currentPage: number;

  @Expose({ name: 'per_page' })
  public perPage: number;

  @Expose()
  public total: number;

  @Type((options) => (options?.newObject as PaginationResponse<T>).type)
  @Expose()
  public data: Array<T>;

  @Exclude()
  private type: Function;

  constructor(type: Function) {
    this.type = type;
  }
}
