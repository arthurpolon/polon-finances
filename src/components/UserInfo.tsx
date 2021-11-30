import {
  Box,
  Button,
  Image,
  Popover,
  Icon,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  HStack,
  Text,
  VStack,
  Stack,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/router'
import { FiSettings } from 'react-icons/fi'

// import { Container } from './styles';

function UserInfo(props) {
  const router = useRouter()
  return (
    <Box {...props}>
      <Popover>
        <PopoverTrigger>
          <Button fontSize={{ base: 'md', md: 'lg' }} p={{ base: 4, md: 8 }}>
            <HStack spacing={4}>
              <Text>Arthur Polon</Text>
              <Image
                borderRadius='full'
                boxSize={{ base: 8, md: 12 }}
                src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
                alt='Profile Picture'
              />
            </HStack>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverCloseButton />
          <VStack p={4} spacing={6} align='start'>
            <Stack spacing={0}>
              <Text fontWeight='bold'>Email:</Text>
              <Text>arthurpolon@hotmail.com</Text>
            </Stack>

            <Button onClick={() => console.log('reset password')}>
              <Icon as={FiSettings} mr={2} />
              Redefine Password
            </Button>
            {true && (
              <Alert status='success'>
                <AlertIcon />
                feedback
              </Alert>
            )}

            <Button
              colorScheme='red'
              alignSelf='flex-end'
              onClick={() => {
                router.push('/')
                console.log('sign out user')
              }}
            >
              Logout
            </Button>
          </VStack>
        </PopoverContent>
      </Popover>
    </Box>
  )
}

export default UserInfo
