import styled from 'styled-components'

export const Container = styled.button`
  width: 90%;
  height: 25vh;

  display: flex;

  border-radius: 3px;

  background: rgb(99, 176, 194);
  background: linear-gradient(
    90deg,
    rgba(99, 176, 194, 1) 0%,
    rgba(3, 76, 111, 1) 100%
  );

  position: relative;
`
export const ContentIcon = styled.div`
  width: 90%;
  height: 25vh;

  display: flex;

  border-radius: 3px;

  transition: all 200ms;

  ${Container}:hover & {
    transform: scale(1.1);
  }
`
export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;

  border-radius: 3px;

  background: rgb(99, 176, 194);
  background: linear-gradient(
    90deg,
    rgba(99, 176, 194, 0.85) 0%,
    rgba(3, 76, 111, 0.85) 100%
  );
`
export const Title = styled.h3`
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;

  transition: all 200ms;

  ${Container}:hover & {
    transform: scale(1.1);
  }
`
