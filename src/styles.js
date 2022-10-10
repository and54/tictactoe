import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

export const Centered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Header = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
`;

export const TicTacToeContainer = styled.div`
  width: 360px;
  height: 360px;
  display: flex;
  flex-flow: row wrap;
`;

export const Cell = styled.div`
  width: calc(33% - 1px);
  height: 33%;
  border: 1px solid black;
  text-align: center;
`;