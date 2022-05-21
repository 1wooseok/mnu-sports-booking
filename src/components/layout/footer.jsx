import React from 'react';
import styled from "styled-components";

function Footer() {
  return (
    <Wrap>
      <div style={{ opacity: 0.4, fontSize: "12px" }}>© 목대컴공</div>
    </Wrap>
  );
}

const Wrap = styled.div`
  bottom: 0;
  margin: 1em;

  width: 90vw;
  
`;

export default Footer;