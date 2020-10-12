import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  align-items: center;
  padding: 14px 16px;
  width: 100%;
  overflow: hidden;
  -webkit-box-shadow: 0px 2px 10px -5px rgba(21, 6, 5, 1);
  -moz-box-shadow: 0px 2px 10px -5px rgba(21, 6, 5, 1);
  box-shadow: 0px 2px 10px -5px rgba(21, 6, 5, 1);

`;

export const Button = styled.a`
  padding: 0 .5rem;
  margin: 0 .5rem;
  border: none;
  background: none;
  color: ${({ theme}) => theme.text};

  &:hover {
      cursor: pointer
  }
`;

export const Logo = styled.h2`
    color: ${({ theme}) => theme.text};
    padding: 0 1.5rem;
    margin: 0.5rem;
    font-size: 1.2rem;
`
