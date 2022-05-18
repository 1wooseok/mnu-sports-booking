import styled from "styled-components";

export default function Footer() {
  return (
    <Wrap>
      <div style={{ opacity: 0.4, fontSize: "12px" }}>© 목대컴공</div>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: fixed;
  bottom: 0;
  padding: 1em;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
