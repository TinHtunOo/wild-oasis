import styled from "styled-components";

const FileInput = styled.input`
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);
  padding: 0.3rem;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  width: 100%;

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background-color: var(--color-brand-700);
    }
  }
`;

export default FileInput;
