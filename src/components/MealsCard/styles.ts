import styled, { css } from "styled-components/native";

type Props = {
  diet: boolean;
};

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 49px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HourText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
`;

export const MealText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `};
`;

export const MealBadge = styled.View<Props>`
  border-radius: 100px;
  width: 14px;
  height: 14px;
  background-color: ${({ theme, diet }) =>
    diet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;

export const Divider = styled.View`
  height: 14px;
  width: 1px;
  margin: 0 12px 0 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4}
`;
