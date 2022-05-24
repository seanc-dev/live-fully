import React from "react";
import styled from "styled-components";
import {
  Container,
  InnerContainer,
  Margin,
  Link,
  H1,
  SectionHeader,
  H4 as Header4,
} from "../components/utils.tsx";
import { TextBlock } from "./Terms";

import { cookies, lists } from "./Privacy.data.tsx";
import { ListItem } from "@mui/material";

const H4 = ({ children, marginTop, marginBottom, leftAlign, ...rest }) => (
  <Header4 marginTop="4vh" marginBottom="1vh" leftAlign {...rest}>
    {children}
  </Header4>
);

const ListBlock = styled(TextBlock)`
  transform: translate(2.65vw, 0);
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
          <TextBlock>For the purposes of this Privacy Policy:</TextBlock>
          <ListBlock>
            <ul>
              {lists.definitions.map(({ strong, text }, idx) => (
                <li key={idx}>
                  <strong>{strong}</strong>
                  {text}
                </li>
              ))}
            </ul>
          </ListBlock>
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
            <ul>
              {cookies.map(({ name, type, admin, purpose }, idx) => (
                <li key={idx}>
                  <strong>{name}</strong>
                  <br />
                  Type: {type}
                  <br />
                  Administered by: {admin}
                  <br />
                  Purpose: {purpose}
                </li>
              ))}
            </ul>
          </ListBlock>
          <H4>Use of Your Personal Data</H4>
          <TextBlock styles={{ transform: "translate(-3vw, 0)" }}>
            The Company may use Personal Data for the following purposes:
          </TextBlock>
          <ListBlock>
            <ul>
              {lists.dataUsage.map(({ strong, text }, idx) => (
                <li key={idx}>
                  <strong>{strong}</strong>
                  {text}
                </li>
              ))}
            </ul>
          </ListBlock>
          <TextBlock styles={{ transform: "translate(-3vw, 0)" }}>
            We may share your personal information in the following situations:
          </TextBlock>
          <ListBlock>
            <ul>
              {lists.dataSharing.map(({ strong, text }, idx) => (
                <li key={idx}>
                  <strong>{strong}</strong>
                  {text}
                </li>
              ))}
            </ul>
          </ListBlock>
          <H4>Retention of Your Personal Data</H4>
          <TextBlock>
            The Company will retain Your Personal Data only for as long as is
            necessary for the purposes set out in this Privacy Policy. We will
            retain and use Your Personal Data to the extent necessary to comply
            with our legal obligations (for example, if we are required to
            retain your data to comply with applicable laws), resolve disputes,
            and enforce our legal agreements and policies.
            <br />
            The Company will also retain Usage Data for internal analysis
            purposes. Usage Data is generally retained for a shorter period of
            time, except when this data is used to strengthen the security or to
            improve the functionality of Our Service, or We are legally
            obligated to retain this data for longer time periods.
          </TextBlock>
          <H4>Transfer of Your Personal Data</H4>
          <TextBlock>
            Your information, including Personal Data, is processed at the
            Company’s operating offices and in any other places where the
            parties involved in the processing are located. It means that this
            information may be transferred to — and maintained on — computers
            located outside of Your state, province, country or other
            governmental jurisdiction where the data protection laws may differ
            than those from Your jurisdiction.
            <br />
            Your consent to this Privacy Policy followed by Your submission of
            such information represents Your agreement to that transfer.
            <br />
            The Company will take all steps reasonably necessary to ensure that
            Your data is treated securely and in accordance with this Privacy
            Policy and no transfer of Your Personal Data will take place to an
            organization or a country unless there are adequate controls in
            place including the security of Your data and other personal
            information.
          </TextBlock>
          <H4>Disclosure of Your Personal Data</H4>
          <TextBlock>
            <strong>Business Transactions</strong>
            <br />
            If the Company is involved in a merger, acquisition or asset sale,
            Your Personal Data may be transferred. We will provide notice before
            Your Personal Data is transferred and becomes subject to a different
            Privacy Policy.
          </TextBlock>
          <TextBlock>
            <strong>Law enforcement</strong>
            <br />
            Under certain circumstances, the Company may be required to disclose
            Your Personal Data if required to do so by law or in response to
            valid requests by public authorities (e.g. a court or a government
            agency).
          </TextBlock>
          <TextBlock>
            <strong>Other legal requirements</strong>
          </TextBlock>
          <ListBlock>
            <ul styles={{ transform: "translate(-3vw, 0)" }}>
              {lists.otherLegalReqs.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </ListBlock>
          <H4>Security of Your Personal Data</H4>
          <TextBlock>
            The security of Your Personal Data is important to Us, but remember
            that no method of transmission over the Internet, or method of
            electronic storage is 100% secure. While We strive to use
            commercially acceptable means to protect Your Personal Data, We
            cannot guarantee its absolute security.
          </TextBlock>
          <H4>Detailed Information on the Processing of Your Personal Data</H4>
          <TextBlock>
            Service Providers have access to Your Personal Data only to perform
            their tasks on Our behalf and are obligated not to disclose or use
            it for any other purpose.
          </TextBlock>
          {lists.serviceProviders.map(
            ({ type, preamble, providers, postamble, linkUrl }, idx) => (
              <TextBlock key={idx}>
                <strong>{type}</strong>
                <br />
                {preamble}
                <ListItem>
                  <ul>
                    {providers.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </ListItem>
                {postamble} You can view their privacy policy here:{" "}
                <Link href={linkUrl}>{linkUrl}</Link>.
              </TextBlock>
            )
          )}
          <H4>GDPR Privacy</H4>
          <TextBlock>
            <strong>Legal Basis for Processing Personal Data under GDPR</strong>
            <br />
            We may process Personal Data under the following conditions:
          </TextBlock>
          <ListBlock>
            <ul>
              {lists.gdpr.legalBasis.map(({ strong, text }, idx) => (
                <li key={idx}>
                  <strong>{strong}</strong>
                  {text}
                </li>
              ))}
            </ul>
          </ListBlock>
          <TextBlock>
            In any case, the Company will gladly help to clarify the specific
            legal basis that applies to the processing, and in particular
            whether the provision of Personal Data is a statutory or contractual
            requirement, or a requirement necessary to enter into a contract.
          </TextBlock>
          <H4>Your Rights under the GDPR</H4>
          <TextBlock>
            The Company undertakes to respect the confidentiality of Your
            Personal Data and to guarantee You can exercise Your rights.
          </TextBlock>
          <TextBlock>
            You have the right under this Privacy Policy, and by law if You are
            within the EU, to:
          </TextBlock>
          <ListBlock>
            <ul>
              {lists.gdpr.rights.map(({ strong, text }, idx) => (
                <li key={idx}>
                  <strong>{strong}</strong>
                  {text}
                </li>
              ))}
            </ul>
          </ListBlock>
          <H4>Exercising of Your GDPR Data Protection Rights</H4>
          <TextBlock>
            You may exercise Your rights of access, rectification, cancellation
            and opposition by contacting Us. Please note that we may ask You to
            verify Your identity before responding to such requests. If You make
            a request, We will try our best to respond to You as soon as
            possible.
            <br />
            You have the right to complain to a Data Protection Authority about
            Our collection and use of Your Personal Data. For more information,
            if You are in the European Economic Area (EEA), please contact Your
            local data protection authority in the EEA.
          </TextBlock>
          <SectionHeader>Facebook Fan Page</SectionHeader>
          <H4>Data Controller for the Facebook Fan Page</H4>
          <TextBlock>
            The Company is the Data Controller of Your Personal Data collected
            while using the Service. As operator of the Facebook Fan Page (
            <Link href="https://www.facebook.com/livefullycoaching">
              https://www.facebook.com/livefullycoaching
            </Link>
            ), the Company and the operator of the social network Facebook are
            Joint Controllers.
          </TextBlock>
          <TextBlock>
            The Company has entered into agreements with Facebook that define
            the terms for use of the Facebook Fan Page, among other things.
            These terms are mostly based on the Facebook Terms of Service:{" "}
            <Link href="https://www.facebook.com/terms.php">
              https://www.facebook.com/terms.php
            </Link>
          </TextBlock>
          <TextBlock>
            Visit the Facebook Privacy Policy
            https://www.facebook.com/policy.php for more information about how
            Facebook manages Personal data or contact Facebook online, or by
            mail: Facebook, Inc. ATTN, Privacy Operations, 1601 Willow Road,
            Menlo Park, CA 94025, United States.
          </TextBlock>
          <H4>Facebook Insights</H4>
          <TextBlock>
            We use the Facebook Insights function in connection with the
            operation of the Facebook Fan Page and on the basis of the GDPR, in
            order to obtain anonymized statistical data about Our users. For
            this purpose, Facebook places a Cookie on the device of the user
            visiting Our Facebook Fan Page. Each Cookie contains a unique
            identifier code and remains active for a period of two years, except
            when it is deleted before the end of this period.
          </TextBlock>
          <TextBlock>
            Facebook receives, records and processes the information stored in
            the Cookie, especially when the user visits the Facebook services,
            services that are provided by other members of the Facebook Fan Page
            and services by other companies that use Facebook services.
          </TextBlock>
          <TextBlock>
            For more information on the privacy practices of Facebook, please
            visit Facebook Privacy Policy here:{" "}
            <Link href="https://www.facebook.com/full_data_use_policy">
              https://www.facebook.com/full_data_use_policy
            </Link>
          </TextBlock>
          <SectionHeader>Miscellaneous</SectionHeader>
          <H4>Children’s Privacy</H4>
          <TextBlock>
            Our Service does not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from anyone
            under the age of 13. If You are a parent or guardian and You are
            aware that Your child has provided Us with Personal Data, please
            contact Us. If We become aware that We have collected Personal Data
            from anyone under the age of 13 without verification of parental
            consent, We take steps to remove that information from Our servers.
            <br />
            We also may limit how We collect, use, and store some of the
            information of Users between 13 and 18 years old. In some cases,
            this means We will be unable to provide certain functionality of the
            Service to these users.
            <br />
            If We need to rely on consent as a legal basis for processing Your
            information and Your country requires consent from a parent, We may
            require Your parent’s consent before We collect and use that
            information.
          </TextBlock>
          <H4>Links to Other Websites</H4>
          <TextBlock>
            Our Service may contain links to other websites that are not
            operated by Us. If You click on a third party link, You will be
            directed to that third party’s site. It is your responsibility to
            review the Privacy Policy of every site You visit.
            <br />
            We have no control over and assume no responsibility for the
            content, privacy policies or practices of any third party sites or
            services.
          </TextBlock>
          <H4>Changes to this Privacy Policy</H4>
          <TextBlock>
            We may update our Privacy Policy from time to time. We will notify
            You of any changes by posting the new Privacy Policy on this page.
            <br />
            We will let You know via email and/or a prominent notice on Our
            Service, prior to the change becoming effective and update the “Last
            updated” date at the top of this Privacy Policy.
            <br />
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </TextBlock>
          <H4>Contact Us</H4>
          <TextBlock>
            If you have any questions about this Privacy Policy, You can contact
            us by email:{" "}
            <Link href="mailto: sean@livefully.coach">
              sean@livefully.coach
            </Link>
          </TextBlock>
        </Margin>
      </InnerContainer>
    </Container>
  );
};

export default Privacy;
