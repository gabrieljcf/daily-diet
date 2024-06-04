import { StyleSheet } from "react-native";
import styled, { css } from "styled-components/native";

export type StatisticsStyleProps = "PRIMARY" | "SECONDARY";
type Props = {
  type: StatisticsStyleProps;
};

export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Content = styled.View`
   flex: 1;
   align-items: center;
   background-color: ${({ theme }) => theme.COLORS.GRAY_7};
   border-radius: 20px;
   padding: 24px;
`;


export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
  margin: 32px 0 24px;
`;

export const DietStatisticContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const styles = StyleSheet.create({
  mt32: {
    marginBottom: 32
  },
});
