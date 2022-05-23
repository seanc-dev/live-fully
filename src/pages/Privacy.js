import React from "react";
import styled from "styled-components";
import {
  Container,
  Margin,
  TextBox,
  H1,
  SectionHeader,
  H4 as Header4,
  SubTitle,
} from "../components/utils.tsx";
import { InnerContainer, TextBlock } from "./Terms";

import { cookies, lists } from "./Privacy.data.tsx";

const H4 = ({ children, marginTop, marginBottom, leftAlign, ...rest }) => (
  <Header4 marginTop="4vh" marginBottom="1vh" leftAlign {...rest}>
    {children}
  </Header4>
);

const ListBlock = styled(TextBlock)`
  transform: translate(3vw, 0);
`;

const Privacy = (props) => {
  return (
    <Container>
      <InnerContainer>
        <Margin marginTop="10vh" marginBottom="10vh">
          <Margin marginBottom="7vh">
            <H1>Privacy Policy</H1>
          </Margin>
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
          <SectionHeader>Interpretation and Definitions</SectionHeader>
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
              <li>
                <strong>Third-party Social Media Service</strong> refers to any
                website or any social network website through which a User can
                log in or create an account to use the Service.
              </li>
              <li>
                <strong>Facebook Fan Page</strong> is a public profile named
                Aspasia Provou – Health Coach specifically created by the
                Company on the Facebook social network, accessible from
                https://www.facebook.com/livefullycoaching
              </li>
              <li>
                <strong>Personal Data</strong> is any information that relates
                to an identified or identifiable individual.
              </li>
              <li>
                <strong>Cookies</strong> are small files that are placed on Your
                computer, mobile device or any other device by a website,
                containing the details of Your browsing history on that website
                among its many uses.
              </li>
              <li>
                <strong>Usage Data</strong> refers to data collected
                automatically, either generated by the use of the Service or
                from the Service infrastructure itself (for example, the
                duration of a page visit).
              </li>
              <li>
                <strong>Data Controller</strong>, for the purposes of the GDPR
                (General Data Protection Regulation), refers to the Company as
                the legal person which alone or jointly with others determines
                the purposes and means of the processing of Personal Data.
              </li>
            </ul>
          </TextBlock>
          <SectionHeader>Collecting and Using Your Personal Data</SectionHeader>
          <H4>Types of Data Collected</H4>
          <TextBlock>
            <strong>Personal Data</strong>
            <br />
            Usage Data is collected automatically when using the Service.
            <br />
            Usage Data may include information such as Your Device’s Internet
            Protocol address (e.g. IP address), browser type, browser version,
            the pages of our Service that You visit, the time and date of Your
            visit, the time spent on those pages, unique device identifiers and
            other diagnostic data.
            <br />
            When You access the Service by or through a mobile device, We may
            collect certain information automatically, including, but not
            limited to, the type of mobile device You use, Your mobile device
            unique ID, the IP address of Your mobile device, Your mobile
            operating system, the type of mobile Internet browser You use,
            unique device identifiers and other diagnostic data.
            <br />
            We may also collect information that Your browser sends whenever You
            visit our Service or when You access the Service by or through a
            mobile device.
          </TextBlock>
          <TextBlock>
            <strong>Tracking Technologies and Cookies</strong>
            <br />
            We use Cookies and similar tracking technologies to track the
            activity on Our Service and store certain information. Tracking
            technologies used are beacons, tags, and scripts to collect and
            track information and to improve and analyze Our Service.
            <br />
            You can instruct Your browser to refuse all Cookies or to indicate
            when a Cookie is being sent. However, if You do not accept Cookies,
            You may not be able to use some parts of our Service.
            <br />
            Cookies can be “Persistent” or “Session” Cookies. Persistent Cookies
            remain on your personal computer or mobile device when You go
            offline, while Session Cookies are deleted as soon as You close your
            web browser.
            <br />
            <br />
            We use both session and persistent Cookies for the purposes set out
            below:
          </TextBlock>
          <ListBlock>
            {cookies.map(({ name, type, admin, purpose }) => (
              <ul>
                <li>
                  <strong>{name}</strong>
                  <br />
                  Type: {type}
                  <br />
                  Administered by: {admin}
                  <br />
                  Purpose: {purpose}
                </li>
              </ul>
            ))}
          </ListBlock>
          <ListBlock>
            The Company may use Personal Data for the following purposes:
          </ListBlock>
          {lists.dataUsage}
        </Margin>
      </InnerContainer>
    </Container>
  );
};

export default Privacy;
