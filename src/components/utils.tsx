import styled from "styled-components";
import theme from "../theme/theme.tsx";

type ThemeType = typeof theme;

export interface TextBoxProps {
  theme: ThemeType;
  fontWeight: string;
  lineHeight: string;
  big: boolean;
  leftAlign: boolean;
}

const TextBoxUnstyled = styled.div<TextBoxProps>`
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

export const TextBox: React.FC<Omit<TextBoxProps, "theme">> = (props) => (
  <TextBoxUnstyled {...props} theme={theme} />
);

export const SubTitle = styled(TextBox)`
  font-style: italic;
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : `40px`)};
  font-size: ${(props) => (props.big ? `30px` : `24px`)};

  @media (max-width: 768px) {
    line-height: ${(props) => (props.big ? props.lineHeight : `24px`)};
    font-size: ${(props) => (props.big ? `24px` : `20px`)};
  }
`;

export const H1 = styled(TextBox)`
  font-size: 84px;
  line-height: 112px;

  @media (max-width: 768px) {
    font-size: 72px;
    line-height: 96px;
  }
`;

export const H2 = styled(TextBox)`
  font-size: 64px;
  line-height: 86px;

  @media (max-width: 768px) {
    font-size: 54px;
    line-height: 72px;
  }
`;

export const H4 = styled(TextBox)`
  font-size: 32px;
  line-height: 42px;

  @media (max-width: 768px) {
    font-size: 27px;
    line-height: 36px;
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
