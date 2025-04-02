export type TypedEmitter<T extends Record<string, unknown>> = {
  on<K extends keyof T>(event: K, cb: (data: T[K]) => void): void;
  off<K extends keyof T>(event: K, cb: (data: T[K]) => void): void;
  emit<K extends keyof T>(event: K, ...args: T[K] extends void ? [] : [data: T[K]]): void;
  subscribe<K extends keyof T>(event: K, cb: (data: T[K]) => void): void;
};
