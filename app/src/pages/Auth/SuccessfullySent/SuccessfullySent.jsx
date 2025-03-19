import React from 'react';
import Card from '../../../components/Card';
import { Center, Icon, VStack, Button, Text, Box } from '@chakra-ui/react';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const SuccessfullySent = () => {
  return (
    <Center minH="100vh">
      <Card
        p={{ 
          base: "4",
          md: "10",
        }}
        showCard={ture}
      >
        <Box p="6">
          <VStack spacing="6" align="center">
            <Icon as={BsFillPatchCheckFill} boxSize="48px" fontWeight="medium" color="green.500" />
            <Text textStyle="h4" color="p.black">
              Successfully Sent
            </Text>
            <Text textAlign="center" textStyle="p2" color="black.60">
              We have sent you an email verification to <Box as="b" color="p.black">jenny.wilson@gmail.com</Box>.
              Please follow the instructions from the email.
            </Text>
          </VStack>
        </Box>
      </Card>
    </Center>
  );
};

export default SuccessfullySent;
