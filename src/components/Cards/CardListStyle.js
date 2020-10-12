import styled from "styled-components";

//apply dark mode to cards
export const CardDeck = styled.div`
  margin-top: 55px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.2s linear;
  background: ${({ theme }) => theme.background};

  &:hover {
    box-shadow: 2px 8px 45px rgba(0, 0, 0, 0.15);
    transform: translate3D(0, -2px, 0);
  }
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.text}
`
export const Name = styled.h3`
    color: ${({ theme }) => theme.text}
`


