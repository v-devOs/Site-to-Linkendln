
import { createContext } from 'react'

interface ContextProps {
  isActiveSideMenu: boolean

  // Methods
  toggleSideMenu: () => void
}

export const UIContext = createContext({} as ContextProps)