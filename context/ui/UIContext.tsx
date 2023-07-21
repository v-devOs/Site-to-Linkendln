
import { createContext } from 'react'

interface ContextProps {
  isActiveSideMenu: boolean
  isActiveModal: boolean

  // Methods
  toggleSideMenuOrModal: (isToggleSideMenu: boolean) => void
}

export const UIContext = createContext({} as ContextProps)