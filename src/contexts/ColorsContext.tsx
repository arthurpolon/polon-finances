import { useColorMode } from '@chakra-ui/react'
import React, { createContext, useContext } from 'react'

export interface IColorsContext {
  colorMode: string
  toggleColorMode: () => void
}

const ColorsContext = createContext<IColorsContext>({
  colorMode: 'system',
  toggleColorMode: () => {
    'initialized'
  },
})

function ColorContextProvider({ children }) {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <ColorsContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ColorsContext.Provider>
  )
}

export const useColors = () => {
  return useContext(ColorsContext)
}

export default ColorContextProvider
