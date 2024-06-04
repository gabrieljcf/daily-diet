import { styled, css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export type StatisticsStyleProps = "PRIMARY" | "SECONDARY";
type Props = {
  type: StatisticsStyleProps;
};

export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const InfoContainer = styled.View`
  flex: 1;
  align-self: flex-start;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
  margin-bottom: 8px;
  align-self: flex-start;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `};
  align-self: flex-start;
  margin-bottom: 24px;
`;

export const Tag = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 34px;
  width: 144px;
  padding: 8px 16px;
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
`;

export type BadgeStyleProps = "PRIMARY" | "SECONDARY";
type BadgeProps = {
  type: BadgeStyleProps;
};

export const Badge = styled.View<BadgeProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  margin-right: 5px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `};
`;