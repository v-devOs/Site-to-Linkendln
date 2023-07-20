import { UIState } from './';

type UIActionType = 
| { type: '[UI] - Toogle SideMenu' } 

export const uiReducer = ( state: UIState, action: UIActionType ): UIState => {
  
  switch (action.type) {
    case '[UI] - Toogle SideMenu':
      return{
        ...state,
        isActiveSideMenu: !state.isActiveSideMenu
      }

    default:
      return state;
  }
}