import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  full?: boolean,
  type: ButtonStyleProps
}

export const Container = styled.TouchableOpacity<Props>`
  width: ${({ full }) => full && '100%'};
  height: 50px;
  border-radius: 6px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_7};
  border: ${({ theme, type }) => type === 'SECONDARY' && `1px solid ${theme.COLORS.GRAY_1}`};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding:0 24px;
`;


type IconProps = {
  type: ButtonStyleProps;
};

export const Icon = styled(MaterialIcons).attrs<IconProps>(({ theme, type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1,
}))`
  margin-right: 12px;
`;

type TitleProps = {
  type: ButtonStyleProps;
};

export const Title = styled.Text<TitleProps>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'PRIMARY'? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  `}
`;


