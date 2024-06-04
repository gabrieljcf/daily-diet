import { TouchableOpacityProps } from "react-native";
import { Badge, Container, DietButtonStyleProps, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string
  type?: DietButtonStyleProps;
  badgeType: "PRIMARY" | "SECONDARY";
};

export function DietButton({ type = 'DEFAULT', title,  badgeType, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Badge type={badgeType}/>
      <Title>{title}</Title>
    </Container>
  )
}
