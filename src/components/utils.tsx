import styled from "styled-components";
import theme from "../theme/theme.tsx";

type ThemeType = typeof theme;

export interface TextBlockProps {
  theme: ThemeType;
  children: React.FC;
  fontWeight?: string;
  lineHeight?: string;
  big?: boolean;
  leftAlign?: boolean;
  marginTop?: string;
  marginBottom?: string;
}

const TextBlockUnstyled = styled.div<TextBlockProps>`
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.colors.fonts.main};
  font-weight: ${(props) => props.fontWeight};
  width: 100%;
  text-align: ${(props) => (props.leftAlign ? "left" : "center")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : `32px`)};
  font-size: ${(props) => (props.big ? `24px` : `20px`)};

  @media (max-width: 768px) {
    line-height: ${(props) => (props.lineHeight ? props.lineHeight : `28px`)};
    font-size: ${(props) => (props.big ? `20px` : `16px`)};
  }
`;

export const TextBlock: React.FC<Omit<TextBlockProps, "theme">> = ({
  children,
  leftAlign,
  marginBottom = "2vh",
  marginTop = "2vh",
  ...rest
}) => (
  <Margin marginBottom={marginBottom} marginTop={marginTop}>
    <TextBlockUnstyled leftAlign={leftAlign} {...rest} theme={theme}>
      {children}
    </TextBlockUnstyled>
  </Margin>
);

export const SubTitle = styled(TextBlock)`
  font-style: italic;
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : `40px`)};
  font-size: ${(props) => (props.big ? `30px` : `24px`)};

  @media (max-width: 768px) {
    line-height: ${(props) => (props.big ? props.lineHeight : `24px`)};
    font-size: ${(props) => (props.big ? `24px` : `20px`)};
  }
`;

const H1Raw = styled(TextBlock)`
  font-size: 96px;
  line-height: 90px;

  @media (max-width: 768px) {
    font-size: 84px;
    line-height: 80px;
  }
`;

export const H1 = ({ children, marginBottom = "2vh", ...rest }) => (
  <Margin marginBottom={marginBottom}>
    <H1Raw {...rest}>{children}</H1Raw>
  </Margin>
);

export const H2 = styled(TextBlock)`
  font-size: 64px;
  line-height: 86px;

  @media (max-width: 768px) {
    font-size: 54px;
    line-height: 72px;
  }
`;

export const H3 = styled(TextBlock)`
  font-size: 32px;
  line-height: 42px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;

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

export const H4 = styled(TextBlock)`
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 32px;
  }
`;

export interface MarginProps {
  marginTop: string;
  marginBottom: string;
  marginLeft: string;
  marginRight: string;
}

export const Margin = styled.div<MarginProps>`
  height: min-content;
  width: 100%;
  ${(props) => props.marginTop && `margin-top: ${props.marginTop};`}
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom};`}
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft};`}
  ${(props) => props.marginRight && `margin-right: ${props.marginRight};`}
`;

export const Container = styled.div`
  width: 100%;
  height: min-content;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
