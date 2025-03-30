import type Phaser from 'phaser';

export interface SceneConfig extends Phaser.Types.Scenes.SettingsConfig {
  key: string;
  preload?: (this: Phaser.Scene) => void;
  create?: (this: Phaser.Scene) => void;
  update?: (this: Phaser.Scene, time: number, delta: number) => void;
  shutdown?: (this: Phaser.Scene) => void;
}

export type SceneMap = Record<string, SceneConfig>;
