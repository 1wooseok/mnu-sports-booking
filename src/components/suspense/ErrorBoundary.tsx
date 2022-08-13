import React, { Component, ErrorInfo, ReactNode } from "react";
import styled from "styled-components";
import { flexCenter } from "../../style/LayoutStyle";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

// Error boundaries do not catch errors for:

// Event handlers
// Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
// Server side rendering
// Errors thrown in the error boundary itself (rather than its children)
export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <FallBack>
          <p>알수없는 오류가 발생했습니다...</p>
          <button onClick={() => location.reload()}>새로고침</button>
        </FallBack>
      );
    }

    return this.props.children;
  }
}

const FallBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  ${flexCenter}
`;
