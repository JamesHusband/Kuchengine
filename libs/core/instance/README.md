# @kuchen/core/instance

Game instance lifecycle management for Kuchen.

## Purpose

Handles the creation, teardown, and configuration of Phaser game instances.

## Structure

- `createInstance.ts`: Initializes the game
- `shutdownInstance.ts`: Gracefully destroys the game
- `config/`: Game config files

## Usage

Typically consumed by your app bootstrap (e.g., `main.tsx`) to spin up or reset the game.
