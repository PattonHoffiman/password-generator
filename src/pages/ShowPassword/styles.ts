import styled from 'styled-components';

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

export const Content = styled.div`
  padding: 3rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface ILabelProps {
  margin?: string;
}

export const Label = styled.span<ILabelProps>`
  color: #2e3440;
  font-weight: 500;
  font-size: 1.5rem;
  margin: ${({ margin }) => margin || '0 0 0.25rem'};

  &.last {
    color: #d08770;
    font-weight: 700;
  }

  &.error {
    color: #bf616a;
    font-weight: 700;
    font-size: 1.5rem;
  }
`;
