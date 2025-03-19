import React from 'react';
import { Link } from 'react-router-dom'; 
import Card from '../../../components/Card';
import { Center, Icon, VStack, Button, Text, Box, Container } from '@chakra-ui/react';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const RegisterSuccess = () => {
  return (
    <Container>
      <Center minH="100vh">
      <Card
      p={{ 
        base: "4",
        md: "10",
      }}
      >
        <Box p="6">
          <VStack spacing="6" align="center">
            <Icon as={BsFillPatchCheckFill} boxSize="48px" fontWeight="medium" color="green.500" />
            <Text textStyle="h4" color="p.black">
              Successful Registration
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              Hurray! You have successfully created your account. Enter the app to explore all its features.
            </Text>
            <Box w="full">
              <Link to="/signin"> 
                <Button w="full">Enter the App</Button> 
              </Link>
            </Box>
          </VStack>
        </Box>
      </Card>
    </Center>
    </Container>
  );
};

export default RegisterSuccess;
