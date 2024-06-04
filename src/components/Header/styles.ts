import theme from "@theme/index";
import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export type HeaderStyleProps = "PRIMARY" | "SECONDARY" | "DEFAULT";
type Props = {
  type: HeaderStyleProps;
};

const COLOR_MAPPING = {
  PRIMARY: theme.COLORS.GREEN_DARK,
  SECONDARY: theme.COLORS.RED_DARK,
  DEFAULT: theme.COLORS.GRAY_2,
};

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  margin-top: 64px;
  justify-content: space-between;
`;

export const ActionText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const BackButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;

export const BackButtonIcon = styled(ArrowLeft).attrs<Props>(({ type }) => ({
  size: 24,
  color: COLOR_MAPPING[type],
}))``;
