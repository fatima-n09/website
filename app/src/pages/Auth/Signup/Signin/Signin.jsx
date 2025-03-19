import {Center, Container, FormControl, Text, Stack, FormLabel, Input, Flex, Checkbox, Button, FormErrorMessage,HStack, Box, useToast,} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string} from 'yup';
import Card from '../../../../components/Card';
import { useMutation } from '@tanstack/react-query';
import { signinUser } from '../../../../api/query/userQuery';

const signinValidationSchema = object({
    email: string().email("Email is invalid").required("Email is required"),
    password: string().min(6, "Password must be at least of 6 characters"). required("password is required"),
});
const Signin = () => {

const toast = useToast();

   const {
    mutate, isLoading,
   } = useMutation({
        mutationKey:["signin"],
        mutationFn: signinUser,
        onSuccess:(data) => {},
        onError: (error) => {
            toast(

                {
                    title: "Signin Error",
                    description: error.message,
                    status:  "error",
                }
            )
        }
    });


  return (
    <Container>
      <Center minH="100vh">
      <Card>
      <Text  fontWeight="medium" textStyle="h1">Welcome To Crypto App</Text>
          <Text textStyle="p2" color="black.60" mt="4">Enter your credentials to access the account.</Text>
          
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              mutate(values);
            }}
            validationSchema={signinValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="10" spacing="6">
                  <Field name="email">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input {...field} name="email" type="email" placeholder="Enter your email..." />
                        <FormErrorMessage>
                            {meta.error}
                          </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input {...field} name="password" type="password" placeholder="Enter your password..." />
                        <FormErrorMessage>
                            {meta.error}
                          </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <HStack justify="space-between">
                     <Checkbox>
                      <Text textStyle="p3">
                        Remember Me
                      </Text>
                       </Checkbox>
                     <Link to ="/forgot.password">
                      <Text textStyle="p3" 
                      as="span" color="p.purple">
                        Forgot Password?
                      </Text>
                      </Link>
                  </HStack>
                 <Box>
                 <Button
                 isLoading = {isLoading}
                 w="full" type='submit'>Login</Button>
                  <Link to="/signup">
                  <Button mt="3" w="full" variant="outline">Create Account</Button>
                  </Link>
                 </Box>
                </Stack>
              </Form>
            )}
          </Formik>
      </Card>
      </Center>
    </Container>
  );
};

export default Signin;
