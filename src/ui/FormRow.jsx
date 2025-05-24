import PropTypes from "prop-types";
import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 0;
  justify-content: end;
  align-items: center;

  color: var(--color-grey-600);
  font-size: 1.6rem;
  font-weight: 500;
`;

const StyledLabel = styled.span`
  font-size: 1.5rem;
  min-width: 300px;
`;

const StyledError = styled.div`
  color: var(--color-red-700);
  min-width: 300px;
`;
FormRowVertical.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  error: PropTypes.string,
};

function FormRowVertical({ label, children, error }) {
  return (
    <StyledFormRow>
      <StyledLabel>{label}</StyledLabel>
      {children}
      <StyledError>{error ? error : ""}</StyledError>
    </StyledFormRow>
  );
}

export default FormRowVertical;
