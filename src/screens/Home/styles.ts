import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export type PercentageButtonStyleProps = "PRIMARY" | "SECONDARY";
type Props = {
  type: PercentageButtonStyleProps;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const HomeHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  min-height: 40px;
  max-height: 40px;
`;

export const PercentageButton = styled.TouchableOpacity<Props>`
  width: 100%;
  height: 102px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  margin: 40px 0 36px;
  padding: 20px 0;
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
  position: absolute;
  align-self: flex-end;
  top: 8px;
  right: 8px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Profile = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const Title = styled.Text`
  margin-bottom: 12px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const MealDate = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
  margin: 32px 0 12px;
`;
