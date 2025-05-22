import PropTypes from "prop-types";
import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  gap: 2px;
  flex-direction: column;
  padding: 15px 0;
`;

const StyledLabel = styled.span`
  font-size: 1.5rem;
`;
FormRowVertical.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};

function FormRowVertical({ label, children }) {
  return (
    <StyledFormRow>
      <StyledLabel>{label}</StyledLabel>
      {children}
    </StyledFormRow>
  );
}

export default FormRowVertical;
