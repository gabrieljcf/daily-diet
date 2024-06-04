import theme from "@theme/index";
import styled, { css } from "styled-components/native";

export type StatisticStyleProps = "PRIMARY" | "SECONDARY" | "DEFAULT";
type Props = {
  fullWidth?: boolean;
  type: StatisticStyleProps;
};

const COLOR_MAPPING = {
  PRIMARY: theme.COLORS.GREEN_LIGHT,
  SECONDARY: theme.COLORS.RED_LIGHT,
  DEFAULT: theme.COLORS.GRAY_6,
};

export const Container = styled.View<Props>`
  align-items: center;
  width: ${({ fullWidth }) => fullWidth ? "100%" : "48%"};
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 8px;
  background-color: ${({ type }) => COLOR_MAPPING[type]};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
  margin-bottom: 8px;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `};
  width: 80%;
  text-align: center;
`;
