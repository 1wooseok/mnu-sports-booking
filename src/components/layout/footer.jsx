import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrap>
      <div style={{ opacity: 0.4, fontSize: "12px" }}>© 목대컴공</div>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;

  width: 100vw;
  height: 4rem;
  max-width: 470px;
  max-height: 70px;

  margin: 0;

  border-top: 1px solid whitesmoke;
`;

export default Footer;
