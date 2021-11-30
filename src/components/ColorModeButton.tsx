import {
  Box,
  Button,
  Icon,
  useColorModeValue,
  BoxProps,
  useColorMode,
} from '@chakra-ui/react'
import { IoMdMoon } from 'react-icons/io'
import { FiSun } from 'react-icons/fi'

const ColorModeButton = (props: BoxProps) => {
  const { toggleColorMode } = useColorMode()

  return (
    <Box {...props}>
      <Button onClick={toggleColorMode} p={0}>
        <Icon as={useColorModeValue(IoMdMoon, FiSun)} w={5} h={5} />
      </Button>
    </Box>
  )
}

export default ColorModeButton
