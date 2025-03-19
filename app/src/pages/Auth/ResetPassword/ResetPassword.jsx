import React from 'react';
import Card from '../../../components/Card';
import { 
  Center, Stack, Button, Text, FormControl, FormLabel, Input, 
  FormErrorMessage, 
} from '@chakra-ui/react';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ResetPassword = () => {
  const resetPasswordSchema = Yup.object({
    NewPassword: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("New password is required"),
    repeatNewPassword: Yup.string()
      .oneOf([Yup.ref('NewPassword'), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  return (
    <Center minH="100vh">
      <Card>
        <Text mt="4" fontWeight="medium" textStyle="h1">Reset Password</Text>
        <Text textStyle="p2" color="black.60" mt="4">
          Enter your new password and confirm it to reset your account password.
        </Text>

        <Formik
          initialValues={{
            NewPassword: "",
            repeatNewPassword: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={resetPasswordSchema}
        >
          {() => (
            <Form>
              <Stack mt="8" spacing="6">
                <Field name="NewPassword">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel htmlFor="NewPassword">Enter New Password</FormLabel>
                      <Input {...field} name="NewPassword" type="password" placeholder="Enter new password..." />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="repeatNewPassword">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel htmlFor="repeatNewPassword">Repeat New Password</FormLabel>
                      <Input {...field} name="repeatNewPassword" type="password" placeholder="Enter your password again..." />
                      <FormErrorMessage>{meta.error}</FormErrorMessage>
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
  );
};

export default ResetPassword;
