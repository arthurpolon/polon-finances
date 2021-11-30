import React, { useState } from 'react'
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Icon,
  Input,
  VStack,
  useColorModeValue,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { FaGoogle } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const SignUser = ({ initialState }) => {
  const [isSigningUp, setIsSigningUp] = useState(initialState)
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.table(data)
  }

  return (
    <Flex p={10} direction='column' w='100%'>
      <VStack mx='auto' spacing={5} mb={8}>
        <Heading>{isSigningUp ? 'Sign Up' : 'Sign In'}</Heading>
        <Text align='center'>
          {isSigningUp ? (
            <>
              Already have an account?{' '}
              <Button color='blue.400' onClick={() => setIsSigningUp(false)}>
                Sign In
              </Button>
            </>
          ) : (
            <>
              Dont have an account?{' '}
              <Button color='blue.400' onClick={() => setIsSigningUp(true)}>
                Sign Up
              </Button>
            </>
          )}
        </Text>
      </VStack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack mb={10} spacing={5}>
          <Button onClick={() => console.log('sign with google')}>
            <Icon
              as={useColorModeValue(FcGoogle, FaGoogle)}
              w={useColorModeValue(8, 6)}
              h={useColorModeValue(8, 6)}
              mr={3}
            />
            {isSigningUp ? 'Sign Up' : 'Sign In'} With Google
          </Button>
          <Heading fontSize='lg'>Or</Heading>
          {isSigningUp && (
            <FormControl>
              <FormLabel display='none' w='100%'>
                Name
              </FormLabel>
              <Input
                {...register('name')}
                type='text'
                variant='flushed'
                placeholder='Name'
                isRequired
              />
            </FormControl>
          )}
          <FormControl w='100%'>
            <FormLabel display='none'>Email</FormLabel>
            <Input
              {...register('email')}
              type='email'
              variant='flushed'
              placeholder='Email'
              isRequired
            />
          </FormControl>
          <FormControl>
            <FormLabel display='none' w='100%'>
              Password
            </FormLabel>
            <Input
              {...register('password')}
              type='password'
              variant='flushed'
              placeholder='Password'
              isRequired
            />
          </FormControl>
          {isSigningUp && (
            <FormControl>
              <FormLabel display='none' w='100%'>
                Repeat Password
              </FormLabel>
              <Input
                {...register('repeatPassword')}
                type='password'
                variant='flushed'
                placeholder='Repeat Password'
                isRequired
              />
            </FormControl>
          )}
          {true && (
            <Alert status='error'>
              <AlertIcon />
              <Text align='center'>Erro</Text>
            </Alert>
          )}
        </VStack>

        <Flex direction='row-reverse'>
          <Button type='submit' colorScheme='green'>
            {isSigningUp ? 'Sign Up' : 'Sign In'}
          </Button>
        </Flex>
      </form>
    </Flex>
  )
}

export default SignUser
