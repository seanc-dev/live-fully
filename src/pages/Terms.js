import React from "react";
import styled from "styled-components";
import {
  Container,
  Margin,
  TextBlock as TextBox,
  H1,
  H3,
  SubTitle,
} from "../components/utils.tsx";

export const InnerContainer = styled(Container)`
  width: 70%;

  @media (max-width: 768px;) {
    width: 80%;
  }
`;

export const TextBlock = ({ children, leftAlign, ...rest }) => (
  <Margin>
    <TextBox leftAlign {...rest}>
      {children}
    </TextBox>
  </Margin>
);

export const SectionHeader = ({
  children,
  marginTop = "4vh",
  marginBottom = "2vh",
  ...rest
}) => (
  <Margin marginTop={marginTop} marginBottom={marginBottom}>
    <H3 {...rest}>{children}</H3>
  </Margin>
);

const Terms = () => {
  return (
    <Container>
      <InnerContainer>
        <Margin marginTop="10vh" marginBottom="10vh">
          <H1>Terms of Service</H1>
          <SubTitle>For Live Fully Coaching</SubTitle>
          <Margin marginTop="5vh">
            <H3>Preamble</H3>
          </Margin>
          <TextBlock>
            Read carefully before purchasing, accessing or using any material
            published by Live Fully Coaching, including but not limited to any
            audio, visual and written material and online programs associated
            with Live Fully Coaching.
          </TextBlock>
          <TextBlock>
            <i>
              By purchasing, accessing or using the material and program(s), you
              acknowledge that you have read this agreement, you understand it,
              and you accept and agree to be bound by its terms.
            </i>
          </TextBlock>
          <TextBlock>
            This Agreement is a legal contract between the Parties known as Live
            Fully Coaching, located at Ruská 8, Praha 10-Vrsovice, Praha 101 00
            in Czechia (hereafter “Live Fully Coaching”, "We", "Our"), and
            Yourself (“the Student”, "Your", or “You”), whereas Live Fully
            Coaching is engaged in the business of client coaching services, and
            whereas You desire to engage Live Fully Coaching to provide personal
            guidance and training to You in the form of Webinars, Audio and/or
            Visual Presentations, Written Documents and periodic group and
            personal coaching and evaluation (“Programs”).
          </TextBlock>
          <TextBlock>The Parties agree as follows:</TextBlock>
          <SectionHeader>1. MEMBERSHIP AND PROGRAM FEES</SectionHeader>
          <TextBlock>
            1.1. Programs: Under the terms of this Agreement, Live Fully
            Coaching agrees to provide guidance and training services to You in
            the form of Webinars, Audio and/or Visual Presentations, Written
            Documents and periodic group and personal coaching and evaluation in
            exchange for a Program Fee. Program Fees will be determined
            according to paragraph 1.2 below.
          </TextBlock>
          {/* <TextBlock>
            The program is an online course which includes but is not limited
            to:
            <br />– Access to the Fuck Yes Academy training modules including
            all documents and supports therein.
            <br />– Access to 1 weekly 1-hour support call for 6 weeks or more.
          </TextBlock> */}
          <TextBlock>
            1.1.2 Term: The Term of this Agreement come into effect upon Your
            acceptance of this Agreement and payment of the applicable Program
            Fee.
          </TextBlock>
          <TextBlock>
            1.1.3 Termination: Live Fully Coaching may terminate this Agreement
            at any time if it deems your participation in one of its programs to
            be harmful either to Your wellbeing, or to the wellbeing of other
            participants. You may request termination of your account and rights
            of participation at any time upon request to Live Fully Coaching.
            Paragraph 3.1 below shall survive termination of this Agreement,
            binding You to Confidentiality and Non-Disclosure of Contents in
            perpetuity. Paragraph 2.3 below shall survive termination of this
            Agreement, thereby excluding any refund of paid fees unless
            otherwise agreed upon in written form by Live Fully Coaching.
          </TextBlock>
          <TextBlock>
            1.2 Program Fees: By accepting the terms of this Agreement, You
            agree and understand that You are committing to pay the full program
            fee before access to the course or You have agreed to a payment plan
            of which You will continue to pay until full program fee is paid off
            within 3 months of accepting these terms.
          </TextBlock>
          <TextBlock>
            1.3 Promotional Material: By accepting the terms of this Agreement
            and affirmatively seeking the benefits of membership in the
            Program(s) offered by Live Fully Coaching, You affirmatively agree
            and acknowledge that Live Fully Coaching may at any time reproduce
            and/ or disseminate any testimonial(s) describing or otherwise
            referencing, either directly or indirectly, Your experience
            participating in such Program(s), including any specific results
            experienced by You over the course of such participation. You agree
            and acknowledge that this includes any written statements that You
            may publish to social media accounts and online forums as well as
            any statements and/or images captured or otherwise recorded over the
            course of attendance at any event(s) related to such Program(s).
          </TextBlock>
          <TextBlock>
            1.4 Weekly Support Calls: The weekly support calls shall be recorded
            and may be shared to existing and future Live Fully Coaching
            Practitioner students for the purpose of supporting their training
            as facilitators of Our programs. In such a case, said students will
            be bound to the same level of confidentiality as anyone who is a
            party to this agreement.
          </TextBlock>
          <SectionHeader>2. WARRANTIES</SectionHeader>
          <TextBlock>
            2.1 You are responsible for your own success. That said, if you can
            show that You have fully engaged with the course material, put in an
            honest effort, and You do not see the results the program seeks to
            bring about then at the completion of the program You will be
            entitled to a full refund. This is Our promise.
          </TextBlock>
          <TextBlock>
            2.1.1 The specific criteria which will be used to assess whether You
            have 'fully engaged' with the material, 'made an honest effort', and
            acheived 'the results the program seeks to bring about' will vary by
            program. These criteria and any other necessary details will be
            specified in the Program Terms for that particular program.
          </TextBlock>
          <TextBlock>
            2.2 Limited Liability: In no event will Live Fully Coaching be
            liable to You or any party related to You for any damages, including
            but not limited to damages for loss of business profits or other
            pecuniary loss, whether under a theory of contract, warranty, tort
            (including negligence), products liability or otherwise, even if
            Live Fully Coaching has been advised of the possibility of such
            damages. Limitations herein described shall be applied to the
            greatest extent enforceable under applicable law.
          </TextBlock>
          <SectionHeader>3. CONFIDENTIALITY</SectionHeader>
          <TextBlock>
            3.1 It is a condition of participation in any program provided by
            Live Fully Coaching that the content of interactions with
            facilitators and other participants be kept strictly confidential.
            Failure to adhere to this condition may result in immediate
            termination of this agreement without refund.
          </TextBlock>
          <TextBlock>
            3.1.1 Live Fully Coaching understands that when participating in
            challenging transformational programs it may be necessary to share
            the content of some of the interactions mentioned in section 3.1
            with those close to You. This is permissible on the condition that
            this is done with great care, without the inclusion of any
            identifying information with respect to those involved, and to
            persons who are extremely unlikely to know the individuals involved.
          </TextBlock>
          <TextBlock>
            3.2 Only authorised users who have been granted access to a program
            are permitted to access said program. You are not permitted to
            distribute any course material provided to you in the context of one
            of Live Fully Coaching's programs to anyone for any reason without
            Live Fully Coaching's express permission.
          </TextBlock>
          <TextBlock>
            3.3 Live Fully Coaching does not own the ideas or concepts taught in
            its programs, and explicitly encourages you to share these with
            anyone who is interested in learning about them. If they'll sit
            still for long enough to hear it, then definitely share.
          </TextBlock>
          <TextBlock>
            3.4 Intellectual Property: You acknowledge that any Audio and/or
            Visual Presentations, Documentation, and other elements of the
            program are the sole Intellectual Property of Live Fully Coaching
            under copyright, trademark and other intellectual property laws and
            international treaties. You further acknowledge and agree that, as
            between You and Live Fully Coaching, Live Fully Coaching and its
            third party licensors own and shall continue to own all right,
            title, and interest in and to the Audio and/or Visual Presentations,
            Documentation, and other elements of the Program(s), including
            associated intellectual property rights under copyright, trade
            secret, patent, or trademark laws. Except for the limited, revocable
            license expressly granted to You herein, this Agreement does not
            grant You any ownership or other right or interest in or to the
            Audio and/or Visual Presentations, Documentation, and other elements
            of the Program(s), or any other intellectual property rights of Live
            Fully Coaching whether by implication, estoppel, or otherwise. Any
            and all trademarks or service marks that Live Fully Coaching uses in
            connection with services rendered by Live Fully Coaching are marks
            owned by Live Fully Coaching. This Agreement does not grant You any
            right, license, or interest in such marks, and You shall not assert
            any right, license, or interest in such marks or any words or
            designs that are confusingly similar to such marks.
          </TextBlock>
          <SectionHeader>4. REFUND POLICY</SectionHeader>
          <TextBlock>
            4.1 Upon purchase of the program and agreement to these terms, you
            have 48 hours within which a full refund will be granted with no
            questions asked.
          </TextBlock>
          <TextBlock>
            4.2 If the program is found not to support you in achieving the
            desired outcome in accordance with the criteria set out in that
            programs terms, then you are entitled to a full refund.
          </TextBlock>
          <TextBlock>
            4.3 Refunds for any other reason are at the discretion of Live Fully
            Coaching
          </TextBlock>
          <SectionHeader>5. MISCELLANEOUS</SectionHeader>
          <TextBlock>
            5.1. Non-transferability: The rights and obligations under this
            Agreement are personal to You. You may not assign or transfer any
            rights or obligations under this Agreement.
          </TextBlock>
          <TextBlock>
            5.2. Indemnification: You will, at Your own expense, defend,
            indemnify, and hold Live Fully Coaching, its agents, and employees
            harmless from any and all claims, actions, liabilities, injuries,
            damages, losses, grants, costs, and expenses, including attorney
            fees, arising out of or in connection with any use of the Program(s)
            of this Agreement.
          </TextBlock>
          <TextBlock>
            5.3. Integration: This Agreement, along with any additional terms or
            policies incorporated herein by reference, represents the entire
            Agreement between You and Live Fully Coaching concerning the
            Program, and this Agreement supersedes and replaces any prior
            proposal, representation, or understanding You may have had with
            Live Fully Coaching relating to the Program, whether oral or
            written.
          </TextBlock>
          <TextBlock>
            5.4. Amendment: Live Fully Coaching reserves the right, in its sole
            discretion, to amend this Agreement from time to time by posting an
            updated version of the Agreement at www.livefully.coach
          </TextBlock>
        </Margin>
      </InnerContainer>
    </Container>
  );
};

export default Terms;
