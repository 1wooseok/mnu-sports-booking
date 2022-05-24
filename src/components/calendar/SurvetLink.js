import React from 'react';
import styled from 'styled-components';

const surveyLink = "https://naver.me/FIp9ILfg";

function SurveyLink() {
    return (
      <StLinkBox>
        <StLink href={surveyLink} target="_blank" rel="noreferrer">
          &gt; 피드백 남기기
        </StLink>
      </StLinkBox>
    );
  }

  const StLinkBox = styled.div`
  ${'' /* position: relative; */}
  bottom:1rem;
  right: 0.7rem;
  margin-right: 0.8em;
`;

const StLink = styled.a`
  font-size: 0.5rem;
  font-weight: normal;
  text-decoration: underline;
  text-underline-position: under;
  float: right;
  &:hover {
    font-weight: 500;
  }
`;

export default SurveyLink;