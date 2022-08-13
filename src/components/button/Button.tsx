import React from "react";
import styled from "styled-components";

interface ButtonProps {
  size: string;
  text?: string;
  disabled?: boolean;
  children: string | React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  size,
  text,
  children,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <StButton className={size} disabled={disabled} onClick={onClick}>
      {children}
      <span>{text}</span>
    </StButton>
  );
}

const StButton = styled.button`
  margin: 0;
  border: none;
  cursor: pointer;

  .small {
  }

  .medium {
  }

  .large {
  }

  .success {
  }

  .error {
  }

  .warning {
  }
`;
