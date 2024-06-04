import { TouchableOpacityProps } from "react-native";
import { ButtonStyleProps, Container, Icon, Title } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  showIcon?: boolean;
  title: string;
  full?: boolean;
  type?: ButtonStyleProps;
  icon?: keyof typeof MaterialIcons.glyphMap;
};

export function Button({
  showIcon = false,
  title,
  full,
  type = "PRIMARY",
  icon = "add",
  ...rest
}: Props) {
  return (
    <Container {...rest} full={full} type={type}>
      {showIcon && <Icon name={icon} type={type} />}
      <Title type={type}>{title}</Title>
    </Container>
  );
}
