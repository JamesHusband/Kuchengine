# @engine/scenes

Scene system for managing game states in Kuchen.

## Purpose

Encapsulates all logic related to Phaser scenes, including creation, transitions, events, and registration.

## Structure

- `definitions/`:  
  Contains actual scene classes such as `GameScene` and `MainMenuScene`.

- `factory/`:  
  Abstractions for creating scenes, currently via `createScene.ts`.

- `manager/`:  
  Handles scene registration, switching, and teardown via the `SceneManager`.

- `events/`:  
  Emits and handles scene-specific events via a typed `EventBus`.

- `map/`:  
  Registry mapping scene keys to definitions and metadata.

- `types.ts`:  
  Shared types for keys, scene metadata, and more.

## Usage

```ts
import { SceneManager, createScene, sceneMap } from '@engine/scenes';
```
