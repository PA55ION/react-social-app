import styled from "styled-components";

export const Input = styled.input`
  width: 75%;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  margin: 0 auto;
  display: block;
  font-size: 1rem;
  height: 50px;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  -o-border-radius: 4px;
  background-color: white;
  box-sizing: border-box;
  max-width: 100%;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  font-size: 16px;
  background: ${({ theme }) => theme.inputBackground};
  border: ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  &:focus {
    border-color: ${({ theme }) => theme.blue};
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.text};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.text};
  }
`;
