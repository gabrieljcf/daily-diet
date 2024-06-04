import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

type TitleStyleProps = "PRIMARY" | "SECONDARY";
type Props = {
  type: TitleStyleProps;
};

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === "PRIMARY"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `};
`;

export const SubTitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 8px 0 40px 0;
`;

type SubTitleProps = {
  highlight?: boolean;
};

export const SubTitle = styled.Text<SubTitleProps>`
  ${({ theme, highlight }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${highlight
      ? theme.FONT_FAMILY.BOLD
      : theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `};
 margin-right: 2px;
`;

export const FeedbackImage = styled.Image`
  min-height: 288px;
  max-height: 288px;
  margin-bottom: 32px;
`;
