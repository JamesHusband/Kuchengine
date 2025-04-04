# @kuchen/gui

The `@kuchen/gui` library is responsible for rendering all game-related GUI components, including in-game HUD, menus, overlays, and dynamic screen transitions.

## Responsibilities

- Display and manage the Main Menu, Pause Menu, and HUD elements
- Handle conditional rendering based on game state (e.g., paused, scene change)
- Encapsulate GUI logic and layout structure for flexibility across projects
- Expose a `GuiRenderer` that integrates with the screen state

## Structure

- `menu/` – Components and logic for menus like MainMenu and PauseMenu
- `hud/` – In-game HUD display
- `renderer/` – Central GUI rendering and scene mapping logic
- `layout/` – Optional layout wrappers scoped to GUI

## Usage

```tsx
import { GuiRenderer } from '@kuchen/gui';

<GuiRenderer currentScene="GameScene" isPaused={false} />;
```
