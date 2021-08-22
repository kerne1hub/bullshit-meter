import { Transform } from 'class-transformer';
import { DateTime } from 'luxon';

export const TransformDate = () => {
  const toPlain = Transform(({ value }) => (value instanceof DateTime) ? (value as DateTime).toSQL() : value, {
    toPlainOnly: true
  });

  const toClass = Transform(({ value }) => (typeof value === 'string') ? DateTime.fromSQL(value) : value, {
    toClassOnly: true
  });

  return (target: any, key: string): void => {
    toPlain(target, key);
    toClass(target, key);
  };
};
