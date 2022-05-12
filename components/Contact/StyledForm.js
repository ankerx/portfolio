import styled from "styled-components";
export const Section = styled.section`
  display: flex;
  justify-content: center;
  min-height: 90vh;
  margin: 0 1.5rem;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30rem;
  margin-bottom: 7rem;

  @media (min-width: 500px) {
  }
`;
export const StyledText = styled.p`
  font-size: 1rem;
`;
export const StyledMessage = styled.p`
  font-size: 0.8rem;
  color: #f44336;
  margin: 0;
`;
export const Box = styled.div`
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

export const StyledForm = styled.form`
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
export const StyledInput = styled.input`
  margin-top: 0.3rem;
  margin-bottom: 0.2rem;
  border: 1px solid rgba(24, 138, 236, 1);
  border-radius: 5px;
`;
export const StyledTextArea = styled.textarea`
  min-height: 5rem;
  max-height: 10rem;
  padding: 0.4rem;
  margin-top: 0.3rem;
  margin-bottom: 0.2rem;
  border: 1px solid rgba(24, 138, 236, 1);
  border-radius: 5px;
  resize: vertical;
`;
export const StyledInputBtn = styled.button`
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
export const StyledHeading = styled.h1`
  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;
