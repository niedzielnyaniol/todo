import { styled } from '@compiled/css-in-js';

const StyledContent = styled.div<{height: number}>`
  background: #fff;
  padding: 24px;
  min-height: ${(props) => `${props.height}px`};
  height: 100%;
`;

export { StyledContent };
