import { FC, ReactNode, useReducer } from 'react';
import { UIContext, uiReducer } from './';

interface Props {
  children: ReactNode
}

export interface UIState {
  isActiveSideMenu: boolean;
}

const UI_INITIAL_STATE : UIState = {
  isActiveSideMenu: false,
}

export const UIProvider: FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)
  
  const toggleSideMenu = () => {
    dispatch({ type: '[UI] - Toogle SideMenu'})
  }
  return (
    <UIContext.Provider value={{
      ...state,

      // Methods
      toggleSideMenu
    }}>
    { children }
    </UIContext.Provider>
  )
}