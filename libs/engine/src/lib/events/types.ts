type GameEventMap = {
  'scene-change': string;
  'game-paused': void;
  'game-resumed': void;
  'hud-toggled': boolean;
  'scene-ready': string;
};

export type TypedEmitter = {
  on<K extends keyof GameEventMap>(event: K, cb: (data: GameEventMap[K]) => void): void;
  off<K extends keyof GameEventMap>(event: K, cb: (data: GameEventMap[K]) => void): void;
  emit<K extends keyof GameEventMap>(event: K, data?: GameEventMap[K] extends void ? never : GameEventMap[K]): void;
  subscribe<K extends keyof GameEventMap>(event: K, cb: (data: GameEventMap[K]) => void): void;
};
