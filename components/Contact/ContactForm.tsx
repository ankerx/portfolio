import { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import Router from "next/router";

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
  StyledLabel,
} from "./styledForm";
import { validationSchema } from "./validation-schema";

type Inputs = {
  username: string;
  email: string;
  message: string;
};
function ContactForm() {
  const form = useRef<any>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
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
    setTimeout(() => {
      Router.push("/");
    }, 5000);
  };
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <Section>
      <Container>
        {!isSubmit ? (
          <>
            <StyledHeading>Contact me</StyledHeading>
            <StyledForm ref={form} onSubmit={handleSubmit(onSubmit)}>
              <StyledLabel>
                Name
                <StyledInput
                  aria-invalid={errors.username ? "true" : "false"}
                  {...register("username", { required: true })}
                  type="text"
                  placeholder="Your name"
                />
              </StyledLabel>
              {errors.username && (
                <StyledMessage role="alert">
                  {errors.username.message}
                </StyledMessage>
              )}
              <StyledLabel>
                Email
                <StyledInput
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Your mail"
                />
              </StyledLabel>
              {errors.email && (
                <StyledMessage role="alert">
                  {errors.email.message}
                </StyledMessage>
              )}
              <StyledLabel>
                Message
                <StyledTextArea
                  {...register("message", { required: true })}
                  placeholder="Type your message"
                />
              </StyledLabel>
              {errors.message && (
                <StyledMessage role="alert">
                  {errors.message.message}
                </StyledMessage>
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
