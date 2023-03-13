import styled from 'styled-components';

const StyledHelpError = styled.span<{ $error: boolean }>`
  color: ${({ $error }) => ($error ? ' #f42c4f' : '#a7a7a7')};
`;

export { StyledHelpError };
