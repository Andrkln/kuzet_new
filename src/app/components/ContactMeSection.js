'use client';
import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext.client";

const ContactMeSection = () => { 

  const listColor = '#6a6af5'
  const { isLoading, response, error, submit } = useSubmit(); 
  const { onOpen } = useAlertContext(); 
  
  const formik = useFormik({ 
    initialValues: { 
      firstName: "", 
      email: "", 
      phone: "",
      type: "hireMe",
      comment: "", 
    }, 
    onSubmit: (values) => { 
      submit(values); 
    }, 
    validationSchema: Yup.object({ 
      firstName: Yup.string().required("Required"), 
      email: Yup.string().email("Invalid email address").required("Required"), 
      phone: Yup.string()
        .matches(/^[0-9]{10,15}$/, "Invalid phone number")
        .required("Required"), 
      comment: Yup.string() 
        .min(25, "Must be at least 25 characters") 
        .required("Required"), 
    }), 
  }); 
  
  useEffect(() => { 
    if (response) { 
      onOpen(response.type, response.message); 
      if (response.type === 'success') { 
        formik.resetForm(); 
      } 
    } 
  }, [response]); 
  
  return ( 
    <FullScreenSection 
      backgroundColor="#512DA8" 
      py={16} 
      spacing={8} 
    > 
      <VStack w="90vw" p={32} > 
        <Heading as="h1" id="contactme-section"
        color='white' w="45vw" align='center'
        > 
          Стать клиентом
        </Heading> 
        <Box p={6} rounded="md" w="70vw"> 
          <form onSubmit={formik.handleSubmit}> 
            <VStack spacing={4}> 
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}> 
                <FormLabel htmlFor="firstName" color='white'>Полное имя</FormLabel> 
                <Input 
                  id="firstName" 
                  name="firstName" 
                  {...formik.getFieldProps("firstName")} 
                /> 
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage> 
              </FormControl> 
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}> 
                <FormLabel htmlFor="email" color='white'>Email адрес</FormLabel> 
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  {...formik.getFieldProps("email")} 
                /> 
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage> 
              </FormControl> 
              {/* Add phone input */}
              <FormControl isInvalid={!!formik.errors.phone && formik.touched.phone}> 
                <FormLabel htmlFor="phone" color='white'>Номер телефона</FormLabel> 
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  {...formik.getFieldProps("phone")} 
                /> 
                <FormErrorMessage>{formik.errors.phone}</FormErrorMessage> 
              </FormControl>
              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}> 
                <FormLabel htmlFor="comment" color='white'>Сообщение</FormLabel> 
                <Textarea 
                  id="comment" 
                  name="comment" 
                  height={250} 
                  {...formik.getFieldProps("comment")} 
                /> 
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage> 
              </FormControl> 
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}> 
                Отправить 
              </Button> 
            </VStack> 
          </form> 
        </Box> 
      </VStack> 
    </FullScreenSection> 
  ); 
}; 
 
export default ContactMeSection;
