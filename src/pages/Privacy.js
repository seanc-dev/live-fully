import React from "react";
import styled from "styled-components";
import {
  Container,
  Margin,
  TextBox,
  H1,
  H3,
  H4 as Header4,
  SubTitle,
} from "../components/utils.tsx";
import { InnerContainer, SectionHeader, TextBlock } from "./Terms";

const H4 = ({ children, marginTop, leftAlign, ...rest }) => (
  <Header4 marginTop="2vh" leftAlign {...rest}>
    {children}
  </Header4>
);

const Privacy = (props) => {
  return (
    <Container>
      <InnerContainer>
        <Margin marginTop="10vh" marginBottom="10vh">
          <H1>Privacy Policy</H1>
          <TextBlock>Last Updated 20th May 2022</TextBlock>
          <TextBlock>
            <i>
              This website is run by Live Fully Coaching, hereafter referred to
              as “Our Company”. This privacy policy will explain how we use the
              data we collect from you when you use our website.
            </i>
          </TextBlock>
          <H4>A note on advertising</H4>
          <TextBlock>
            If you're reading this then you're likely interested in
            understanding how we use your data. I'm glad you're taking an
            interest in this - far too few people do.
            <br /> This Privacy Policy describes Our policies and procedures on
            the collection, use and disclosure of Your information when You use
            the Service and tells You about Your privacy rights and how the law
            protects You.
            <br />
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy.
          </TextBlock>
          <H3>Interpretation and Definitions</H3>
          <H4>Interpretation</H4>
          <TextBlock>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions.
            <br />
            The following definitions shall have the same meaning regardless of
            whether they appear in singular or in plural.
          </TextBlock>
          <H4>Definitions</H4>
          <TextBlock>
            For the purposes of this Privacy Policy:
            <ul>
              <li>
                <strong>You</strong> means the individual accessing or using the
                Service, or the company, or other legal entity on behalf of
                which such individual is accessing or using the Service, as
                applicable. Under GDPR (General Data Protection Regulation), You
                can be referred to as the Data Subject or as the User as you are
                the individual using the Service.
              </li>
              <li>
                <strong>Company</strong> (referred to as either “the Company”,
                “We”, “Us” or “Our” in this Agreement) refers to Live Fully
                Coaching, Ruská 8, Praha 10-Vrsovice, Praha. For the purpose of
                the GDPR, the Company is the Data Controller.
              </li>
              <li>
                <strong>Affiliate</strong> means an entity that controls, is
                controlled by or is under common control with a party, where
                “control” means ownership of 50% or more of the shares, equity
                interest or other securities entitled to vote for election of
                directors or other managing authority.
              </li>
              <li>
                <strong>Account</strong> means a unique account created for You
                to access our Service or parts of our Service.
              </li>
              <li>
                <strong>Website</strong> refers to the website accessible at
                livefullycoaching.com
              </li>
              <li>
                <strong>Service</strong> refers to the Website.
              </li>
              <li>
                <strong>Country</strong> refers to Czechia
              </li>
              <li>
                <strong>Service Provider</strong> means any natural or legal
                person who processes the data on behalf of the Company. It
                refers to third-party companies or individuals employed by the
                Company to facilitate the Service, to provide the Service on
                behalf of the Company, to perform services related to the
                Service or to assist the Company in analyzing how the Service is
                used.
              </li>
            </ul>
          </TextBlock>
        </Margin>
      </InnerContainer>
    </Container>
  );
};

export default Privacy;
