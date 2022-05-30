import { createContext, useContext } from 'react';
import { UIContext } from 'ui/lib';

const uiContext = createContext<undefined | UIContext>(undefined);

export const UIProvider = uiContext.Provider;
export const useUIContext = () => useContext(uiContext);
