import styled from "styled-components";
import { Link } from "react-router-dom";

export default function HomeButton({ url }) {
  return (
    <StHomeLink to={url}>
      <StHomeImage src="/asset/images/MNU_LOGO.jpeg" alt="MNU" />
    </StHomeLink>
  );
}

const StHomeLink = styled(Link)`
  padding: 12px 20px;
  font-weight: bold;
  font-size: 14px;
`

const StHomeImage = styled.img`
  font-size: 1.8em;
  color: mediumseagreen;
  height: 1.5em;
`;
