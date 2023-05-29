type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

export function keysWithType<T extends object>(obj: T): KeysOfType<T, any>[] {
  return Object.keys(obj) as KeysOfType<T, any>[];
}
