import { 
    Center, Container, FormControl, Text, Stack, FormLabel, Input, 
    Flex, Checkbox, Button, FormErrorMessage, useToast 
  } from '@chakra-ui/react';
  import { Link, useNavigate } from "react-router-dom";
  import { Formik, Form, Field } from "formik";
  import { object, string, ref } from 'yup';
  import { useMutation } from '@tanstack/react-query';
  import Card from '../../../components/Card';
import { signupUser } from '../../../api/query/userQuery';


  
  const signupValidationSchema = object({
      name: string().required("Name is required"),
      surname: string().required("Surname is required"),
      email: string().email("Email is invalid").required("Email is required"),
      password: string().min(6, "Password must be at least 6 characters").required("Password is required"),
      repeatPassword: string()
          .oneOf([ref("password"), null], "Passwords must match")
          .required("Repeat password is required"),
  });
  
  const Signup = () => {
      const navigate = useNavigate();
      const toast = useToast();
  
      const { mutate, isLoading } = useMutation({
          mutationKey: ["signup"],
          mutationFn: signupUser,
          onSuccess: (data) => {
              navigate("/RegisterEmailVerify", { 
                
                state: { email: data.email }
             });
          },
          onError: (error) => {
              toast({
                  title: "Signup Error",
                  description: error.response?.data?.message || "Something went wrong",
                  status: "error",
              });
          }
      });
  
      return (
          <Container>
              <Center minH="100vh">
                  <Card>
                      <Text fontWeight="medium" textStyle="h1">Welcome To Crypto App</Text>
                      <Text textStyle="p2" color="black.60" mt="4">
                          Create a free account by filling in the data below.
                      </Text>
                      
                      <Formik
                          initialValues={{
                              name: "",
                              surname: "",
                              email: "",
                              password: "",
                              repeatPassword: "",
                          }}
                          onSubmit={(values) => {
                              mutate({
                                  firstName: values.name,
                                  lastName: values.surname,
                                  email: values.email,
                                  password: values.password,  
                              });
                          }}
                          validationSchema={signupValidationSchema}  
                      >
                          {() => (
                              <Form>
                                  <Stack mt="10" spacing="6">
                                      <Flex gap="4">
                                          <Field name="name">
                                              {({ field, meta }) => (
                                                  <FormControl isInvalid={meta.touched && meta.error}>
                                                      <FormLabel htmlFor="name">Name</FormLabel>
                                                      <Input {...field} placeholder="Enter your name..." />
                                                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                                                  </FormControl>
                                              )}
                                          </Field>
                                          <Field name="surname">
                                              {({ field, meta }) => (
                                                  <FormControl isInvalid={meta.touched && meta.error}>
                                                      <FormLabel htmlFor="surname">Surname</FormLabel>
                                                      <Input {...field} placeholder="Enter your surname..." />
                                                      <FormErrorMessage>{meta.error}</FormErrorMessage>
                                                  </FormControl>
                                              )}
                                          </Field>
                                      </Flex>
                                      <Field name="email">
                                          {({ field, meta }) => (
                                              <FormControl isInvalid={meta.touched && meta.error}>
                                                  <FormLabel htmlFor="email">Email</FormLabel>
                                                  <Input {...field} type="email" placeholder="Enter your email..." />
                                                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                                              </FormControl>
                                          )}
                                      </Field>
                                      <Field name="password">
                                          {({ field, meta }) => (
                                              <FormControl isInvalid={meta.touched && meta.error}>
                                                  <FormLabel htmlFor="password">Password</FormLabel>
                                                  <Input {...field} type="password" placeholder="Enter your password..." />
                                                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                                              </FormControl>
                                          )}
                                      </Field>
                                      <Field name="repeatPassword">
                                          {({ field, meta }) => (
                                              <FormControl isInvalid={meta.touched && meta.error}>
                                                  <FormLabel htmlFor="repeatPassword">Repeat Password</FormLabel>
                                                  <Input {...field} type="password" placeholder="Enter your password again..." />
                                                  <FormErrorMessage>{meta.error}</FormErrorMessage>
                                              </FormControl>
                                          )}
                                      </Field>
                                      <Checkbox>
                                          <Text textStyle="p3">
                                              I agree with the <Text as="span" color="p.purple">Terms and Conditions</Text>
                                          </Text>
                                      </Checkbox>
                                      <Button isLoading={isLoading} type="submit">Create Account</Button>
                                      <Text textStyle="p3" color="black.68" textAlign="center">
                                          Already have an account? <Link to="/signin">
                                              <Text as="span" color="p.purple">Log In</Text>
                                          </Link>
                                      </Text>
                                  </Stack>
                              </Form>
                          )}
                      </Formik>
                  </Card>
              </Center>
          </Container>
      );
  };
  
  export default Signup;
  