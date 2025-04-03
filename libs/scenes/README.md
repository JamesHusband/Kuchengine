# @kuchen/scenes

Scene system for managing game states.

## Purpose

Defines and manages all game scenes. Includes helpers for creation, transitions, and typed lookup.

## Structure

- `createScene/`: Utilities for standardizing scene creation
- `sceneManager/`: Scene registration and lifecycle
- `scenes/`: Game scenes like `MainMenuScene` and `GameScene`

## Integration

Works with `@kuchen/core/events` to emit and respond to scene transitions.
