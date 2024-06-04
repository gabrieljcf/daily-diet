import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

type ContainerStyleProps =  {
  split: boolean
}

export const Container = styled.View<ContainerStyleProps>`
  width: ${({ split }) => split ? '48%' : '100%'};
  margin-bottom: 24px;
`;

type InputStyleProps = {
  multiline?: boolean;
  split: boolean
};

export const Input = styled(TextInput)<InputStyleProps>`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  border-radius: 6px;
  min-height: ${({ multiline }) => (multiline ? "120px" : "48px")};
  max-height: ${({ multiline }) => (multiline ? "120px" : "48px")};
  padding: 14px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `};
`;
