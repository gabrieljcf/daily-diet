import styled, { css } from "styled-components/native";

export const Container = styled.Modal``;

export const Overlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #0000005c;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-radius: 8px;
  padding: 40px 24px 24px;
  align-items: center;
  width: 327px;
  height: 192px;
`;

export const Title = styled.Text`
   ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `};
  text-align: center;
`;

export const SplitContainer = styled.View`
  margin-top: 32px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
