import React from 'react';
import Card from '../../../components/Card';
import { Center, Icon, VStack, Button, Text,Box, Container} from '@chakra-ui/react';
import { MdEmail } from 'react-icons/md';

const RegisterEmailVerify = () => {
  return (
    <Container>
        <Center minH="100vh">
            <Card
            p={{ 
                base: "4",
                md: "10",
              }}>
      <VStack spacing="6" align="center">
        <Icon as={MdEmail} boxSize="48px" fontWeight="medium" color="p.purple" />
        <Text textStyle="h4" color="p.black">
          Email Verification
        </Text>
        <Text textAlign="center" textStyle="p2" color="black.60">
          We have sent you an email verification to <Box as="b" color="p.black">jenny.wilson@gmail.com</Box>.  
          If you didn’t receive it, click the button below.
        </Text>
        <Button w="full" variant="outline">Re-Send Email</Button>
      </VStack>
    </Card>
    </Center>
    </Container>
  );
};

export default RegisterEmailVerify;
