import styled from "styled-components";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Router from "next/router";
const Section = styled.section`
  display: flex;
  justify-content: center;
  min-height: 90vh;
  margin: 0 1.5rem;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30rem;
  margin-bottom: 7rem;

  @media (min-width: 500px) {
  }
`;
const StyledText = styled.p`
  font-size: 1rem;
`;
const StyledMessage = styled.p`
  font-size: 0.8rem;
  color: #f44336;
  margin: 0;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 1rem;
  @media (min-width: 1024px) {
    padding: 2rem 4rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 1rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 1rem;
  width: 100%;
  @media (min-width: 1024px) {
    padding: 2rem 4rem;
  }
`;
const StyledInput = styled.input`
  margin-top: 0.3rem;
  margin-bottom: 0.2rem;
  border: 1px solid rgba(24, 138, 236, 1);
  border-radius: 5px;
`;
const StyledTextArea = styled.textarea`
  min-height: 5rem;
  max-height: 10rem;
  padding: 0.4rem;
  margin-top: 0.3rem;
  margin-bottom: 0.2rem;
  border: 1px solid rgba(24, 138, 236, 1);
  border-radius: 5px;
  resize: vertical;
`;
const StyledInputBtn = styled.button`
  position: relative;
  background: rgba(24, 138, 236, 1);
  padding: 0.8rem 1.6rem;
  margin-top: 2rem;
  width: 50%;
  font-size: 1rem;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 8px;

  &:after {
    position: absolute;
    z-index: 22;
    content: "";
    border: 1px solid rgba(24, 138, 236, 1);
    border-radius: 8px;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    left: 0;
    bottom: 0;
    transform: translate(12px, -12px);
    transition: all 0.3s;
  }
  &:hover:after {
    transform: translate(0);
  }
`;
const StyledHeading = styled.h1`
  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;

const Background = styled.div`
  position: absolute;
  width: 4rem;
  height: 4rem;
  right: 3rem;
  top: 3rem;
  background: #60a5fa;
  filter: blur(70px);
  @media (min-width: 1024px) {
    right: 8rem;
    width: 6rem;
    height: 6rem;
    filter: blur(100px);
  }
`;
const Background2 = styled.div`
  position: absolute;
  width: 4rem;
  height: 4rem;
  left: 2rem;
  bottom: 7rem;
  background: #60a5fa;
  filter: blur(70px);
  @media (min-width: 1024px) {
    left: 8rem;
    width: 6rem;
    height: 6rem;
    filter: blur(120px);
  }
`;

function Contact() {
  const form = useRef();
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
      <Background></Background>
      <Background2></Background2>
      <Container>
        {!isSubmit ? (
          <>
            <StyledHeading>Contact me</StyledHeading>
            <StyledForm ref={form} onSubmit={sendEmail}>
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

export default Contact;
