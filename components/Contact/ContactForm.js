import { useState } from "react";
import emailjs from "@emailjs/browser";
import Router from "next/router";
import {
  BackgroundGradientBottom,
  BackgroundGradientTop,
} from "../../styles/globalStyles";
import {
  Box,
  Container,
  StyledForm,
  StyledHeading,
  StyledInput,
  StyledInputBtn,
  StyledMessage,
  StyledText,
  StyledTextArea,
  Section,
} from "./StyledForm";

function ContactForm() {
  const [formErrors, setFormErrors] = useState({});
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const validate = (values) => {
    let errors = {};
    if (!values.user_email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.user_email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.user_name.trim()) {
      errors.username = "Type your name please";
    }
    if (!values.message.trim()) {
      errors.message = "Do not you want to write something more?";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormErrors(validate(values));
    if (
      Object.keys(formErrors).length === 0 &&
      values.user_name.length !== 0 &&
      values.user_email.length !== 0 &&
      values.message.length !== 0
    ) {
      emailjs
        .sendForm(
          `service_hplfmds`,
          `template_9kh41ws`,
          form.current,
          `3zUcfPz9ZJuYCasbt`
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setIsSubmit(true);
      e.target.reset();
      setTimeout(() => {
        Router.push("/");
      }, 5000);
    } else {
      console.log("Not valid");
      setIsSubmit(false);
      return;
    }
  };
  return (
    <Section>
      <BackgroundGradientTop></BackgroundGradientTop>
      <BackgroundGradientBottom></BackgroundGradientBottom>
      <Container>
        {!isSubmit ? (
          <>
            <StyledHeading>Contact me</StyledHeading>
            <StyledForm onSubmit={sendEmail}>
              <label>Name</label>
              <StyledInput
                type="text"
                name="user_name"
                value={values.name}
                onChange={handleChange}
                placeholder="Your name"
              />
              {formErrors.username && (
                <StyledMessage>{formErrors.username}</StyledMessage>
              )}
              <label>Email</label>
              <StyledInput
                type="email"
                name="user_email"
                value={values.email}
                onChange={handleChange}
                placeholder="Your mail"
              />
              {formErrors.email && (
                <StyledMessage>{formErrors.email}</StyledMessage>
              )}
              <label>Message</label>
              <StyledTextArea
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="Type your message"
              />
              {formErrors.message && (
                <StyledMessage>{formErrors.message}</StyledMessage>
              )}

              <StyledInputBtn>Send</StyledInputBtn>
            </StyledForm>
          </>
        ) : (
          <Box>
            <StyledText>Message sent correctly</StyledText>
            <StyledText>Thank you for reaching out! </StyledText>
            <StyledText>I will respond as fast as possible </StyledText>
          </Box>
        )}
      </Container>
    </Section>
  );
}

export default ContactForm;
