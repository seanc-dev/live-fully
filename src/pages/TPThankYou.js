import React from "react";
import styled from "styled-components";

import { TextBox, Container, Margin } from "../components/utils";

import avatar from "../assets/avatar-lg.jpg";

const Image = styled.img`
  width: min-content;
  margin-top: 6vmin;
  max-height: 46vmin;

  @media (max-width: 768px) {
    max-height: 60vmin;
  }
`;

const Text = styled((props) => <TextBox {...props} />)`
  color: color: rgb(255, 255, 255, ${(props) => (props.big ? `1` : `0.7`)});
`;

const Link = styled.a`
  color: rgb(255, 255, 255, ${(props) => (props.bold ? `1` : `0.7`)});
  ${(props) => props.bold && `font-weight: bold;`}
`;

const ColoredContainer = styled(Container)`
  background: #004f73;
`;

const InnerContainer = styled(Container)`
  width: ${(props) => props.width};

  @media (max-width: 768px) {
    line-height: 28px;
    width: 80vw;
  }
`;

const TPThankYou = () => {
  return (
    <ColoredContainer id="thank-you">
      <Image src={avatar} />
      <InnerContainer width="55vw">
        <Margin marginTop="5vh" marginBottom="5vh">
          <Text big>
            <strong>
              As a thank you for taking the time, I'd love to offer you a free
              30-minute session with me
            </strong>{" "}
            where I can help you get clarity on the path forward so you can
            confidently transition through your break up
            <br />→ To take me up on the offer,{" "}
            <Link
              bold
              href="https://go.oncehub.com/SeanColey30Mins"
              target="_blank"
            >
              Click Here
            </Link>{" "}
            to book your free session.
          </Text>
          <Margin marginTop="2vh">
            <Text>
              → You can also feel free to connect with us in{" "}
              <Link href="">our private FB group</Link>, where we're building:
            </Text>
            <Text lineHeight="26px">
              A community of men processing these difficult experiences together
              <br />
              Recommendations and content from my premium coaching programs
              <br />
              Men sharing what going through and support from people who know
              exactly what it's like to be where you are
            </Text>
          </Margin>
        </Margin>
      </InnerContainer>
    </ColoredContainer>
  );
};

export default TPThankYou;
