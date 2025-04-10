import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  ${({ size }) => sizes[size] || sizes.medium}
  ${({ variation }) => variations[variation] || variations.primary}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;

function Button({
  children,
  size = "medium",
  variation = "primary",
  onClick,
  isDisabled = false,
}) {
  return (
    <StyledButton
      size={size}
      variation={variation}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variation: PropTypes.oneOf(["primary", "secondary", "danger"]),
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};

export default Button;
