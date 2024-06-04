import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `};
  margin-bottom: 4px;
`;