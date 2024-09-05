import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 99vh;
  background-color: #eceff4;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  font-family: var(--font-roboto-slab), monospace;
`;

interface IWrapper {
  margin?: string;
}

export const Wrapper = styled.div<IWrapper>`
  width: 30rem;
  display: flex;
  flex-direction: column;
  margin: ${({ margin }) => margin || ''};
`;

interface ILabelProps {
  error?: boolean;
  color?: string;
}

export const Label = styled.label<ILabelProps>`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;

  &.title {
    color: #2e3440;
    font-weight: 700;
    font-size: 1.5rem;
  }

  &.message {
    color: #a3be8c;
    font-weight: 500;
    font-size: 1.2rem;
    text-align: center;
  }

  &.status {
    font-weight: 400;
    font-size: 0.8rem;
    margin-left: 0.25rem;

    > span {
      font-weight: 700;
      margin-left: 0.25rem;
      color: ${({ color }) => color};
    }
  }

  ${({ error }) =>
    error && css`
      color: #bf616a;
      font-weight: 700;
      margin-top: 0.5rem;
    `};
`;

export const ErrorContainer = styled.div`
  width: 100%;
  max-width: 30rem;
  padding-top: 6rem;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
