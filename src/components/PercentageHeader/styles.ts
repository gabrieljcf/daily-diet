import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text `
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `};
  text-align: center;
`;

export const SubTitle = styled.Text `
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `};
  text-align: center;
`;