import { UIState } from './';

type UIActionType = 
| { type: '[UI] - Toogle SideMenu' } 
| { type: '[UI] - Toogle Modal' } 

export const uiReducer = ( state: UIState, action: UIActionType ): UIState => {
  
  switch (action.type) {
    case '[UI] - Toogle SideMenu':
      return{
        ...state,
        isActiveSideMenu: !state.isActiveSideMenu
      }

    case '[UI] - Toogle Modal':
      return{
        ...state,
        isActiveModal: !state.isActiveModal
      }

    default:
      return state;
  }
}