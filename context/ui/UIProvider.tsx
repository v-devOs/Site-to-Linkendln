import { FC, ReactNode, useReducer } from 'react';
import { UIContext, uiReducer } from './';

interface Props {
  children: ReactNode
}

export interface UIState {
  isActiveSideMenu: boolean;
  isActiveModal: boolean
}

const UI_INITIAL_STATE : UIState = {
  isActiveSideMenu: false,
  isActiveModal: false
}

export const UIProvider: FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)
  
  const toggleSideMenuOrModal = ( isToggleSideMenu: boolean) => {
    isToggleSideMenu ? dispatch({ type: '[UI] - Toogle SideMenu'}) : dispatch({ type: '[UI] - Toogle Modal'})
  }

  return (
    <UIContext.Provider value={{
      ...state,

      // Methods
      toggleSideMenuOrModal
    }}>
    { children }
    </UIContext.Provider>
  )
}