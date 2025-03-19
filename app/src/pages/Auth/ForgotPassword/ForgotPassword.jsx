import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../components/Card';
import {FaArrowLeft} from "react-icons/fa";
import { Center,Stack, Button, Text,FormControl, FormLabel, Input, FormErrorMessage,Icon, Container} from '@chakra-ui/react';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ForgotPassword = () => {
    const forgotValidationSchema = Yup.object({
        email: Yup.string().email("Email is invalid").required("Email is required"),
    })
  return (
  <Container>
      <Center minH="100vh">
          <Card>
          <Link to='/signin'>
        <Icon as={FaArrowLeft} boxSize="6" />
        </Link>
      <Text mt="4" fontWeight="medium" textStyle="h1">Forgot Password</Text>
          <Text textStyle="p2" color="black.60" mt="4">Enter your email address for which account you want to reset your password.</Text>
          
          <Formik
            initialValues={{
              email: "",
              
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={forgotValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="8" spacing="6">
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
                 <Button w="full" type='submit'>Reset Password</Button>
                </Stack>
              </Form>
            )}
          </Formik>
      </Card>
    </Center>
  </Container>
  );
};

export default ForgotPassword;
