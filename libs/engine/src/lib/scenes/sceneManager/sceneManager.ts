import type { SceneConfig, SceneMap } from '../types';

export const createSceneManager = () => {
  const scenes: SceneMap = {};

  const registerScene = (scene: SceneConfig) => {
    scenes[scene.key] = scene;
  };

  const getScene = (key: string) => scenes[key];

  const getAllScenes = () => Object.values(scenes);

  const removeScene = (key: string) => {
    delete scenes[key];
  };

  const clearScenes = () => {
    Object.keys(scenes).forEach(removeScene);
  };

  return {
    registerScene,
    getScene,
    getAllScenes,
    removeScene,
    clearScenes,
  };
};

export const sceneManager = createSceneManager();
