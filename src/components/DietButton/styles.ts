import theme from "@theme/index";
import styled, { css } from "styled-components/native";

export type DietButtonStyleProps = "PRIMARY" | "SECONDARY" | "DEFAULT";
type Props = {
  type: DietButtonStyleProps;
};

const COLOR_MAPPING = {
  PRIMARY: theme.COLORS.GREEN_LIGHT,
  SECONDARY: theme.COLORS.RED_LIGHT,
  DEFAULT: theme.COLORS.GRAY_6,
};

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const Container = styled.TouchableOpacity<Props>`
  flex-direction: row;
  width: 48%;
  height: 50px;
  background-color: ${({ type }) => COLOR_MAPPING[type]};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

export type BadgeStyleProps = "PRIMARY" | "SECONDARY";
type BadgeProps = {
  type: BadgeStyleProps;
};

export const Badge = styled.View<BadgeProps>`
  width: 8px;
  height: 8px;
  border-radius: 100px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  margin-right: 5px;
`;
