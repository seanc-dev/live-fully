import React from "react";
import styled from "styled-components";
import { Container, TextBlock, TextBlockProps, Link } from "./utils.tsx";

type TextUnderlineProps = TextBlockProps & { color: string };

const TextUnderline = styled(TextBlock)<TextUnderlineProps>`
  color: ${(props) => props.color};
  opacity: 0.4;
  line-height: 18px;
  font-size: 14px;

  top: 0px;
  margin: 0px;
  padding: 10px 2px 10px 3px;
  border-width: 1px;
  border-top-width: 1px;
  border-top-color: White;
  border-top-style: solid;

  @media (max-width: 768px) {
    line-height: 14px;
    font-size: 10px;
  }
`;

const ColouredContainer = styled(Container)`
  background-color: ${(props) => (props.color ? props.color : "transparent")};
`;

const InnerContainer = styled(Container)`
  width: 80% !important;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const LinksContainer = styled.div`
  width: max;
  padding-top: 5vh;
  display: flex;
  align-items: center;

  @media (max-width: 320px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const LinkDiv = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  opacity: 0.7;
`;

interface FBFooterProps {
  textColor: string;
  bgColor: string;
}

const FBFooter: React.FC<FBFooterProps> = ({ bgColor, textColor }) => {
  return (
    <ColouredContainer color={bgColor}>
      <InnerContainer>
        <LinksContainer>
          <LinkDiv>
            <Link color={textColor} href="http://www.livefully.coach/terms">
              Terms of Service
            </Link>
          </LinkDiv>
          <LinkDiv>
            <Link color={textColor} href="http://www.livefully.coach/privacy">
              Privacy Policy
            </Link>
          </LinkDiv>
        </LinksContainer>
        <TextUnderline color={textColor}>
          This site is not a part of the Facebook website or Facebook Inc.
          Additionally, This site is NOT endorsed by Facebook in any way.
          FACEBOOK is a trademark of FACEBOOK, Inc.
        </TextUnderline>
      </InnerContainer>
    </ColouredContainer>
  );
};

export default FBFooter;
