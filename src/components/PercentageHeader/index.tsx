import { ViewProps } from "react-native";
import { Container, SubTitle, Title } from "./styles";

type Props = ViewProps & {
  percentage: number
};

export function PercentageHeader({ percentage, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{percentage}%</Title>
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  );
}
