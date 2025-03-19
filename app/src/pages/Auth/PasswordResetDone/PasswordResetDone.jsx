import React from 'react';
import { Link } from 'react-router-dom'; 
import Card from '../../../components/Card';
import { Center, Icon, VStack, Button, Text, Box } from '@chakra-ui/react';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const PasswordResetDone = () => {
  return (
    <Center minH="100vh">
      <Card>
        <Box p="6">
          <VStack spacing="6" align="center">
            <Icon as={BsFillPatchCheckFill} boxSize="48px" fontWeight="medium" color="green.500" />
            <Text textStyle="h4" color="p.black">
              Password Reset Done
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              Now you can access your account.
            </Text>
            <Box w="full">
              <Button as={Link} to="/signin" w="full">Sign in</Button> 
            </Box>
          </VStack>
        </Box>
      </Card>
    </Center>
  );
};

export default PasswordResetDone;
