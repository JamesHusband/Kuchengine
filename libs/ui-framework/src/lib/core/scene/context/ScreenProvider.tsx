import { createContext } from 'react';
import { ScreenContextType } from '../../types';

export const ScreenContext = createContext<ScreenContextType | undefined>(undefined);
