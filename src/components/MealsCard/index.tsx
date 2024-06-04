import { TouchableOpacityProps } from "react-native";
import {
  Container,
  Divider,
  HourText,
  MealBadge,
  MealText,
  TextContainer,
} from "./styles";

type Props = TouchableOpacityProps & {
  diet: boolean;
  meal: string;
  hour: string
};

export function MealsCard({ diet, meal, hour, ...rest }: Props) {
  return (
    <Container {...rest}>
      <TextContainer>
        <HourText>{hour}</HourText>
        <Divider />
        <MealText>{meal}</MealText>
      </TextContainer>
      <MealBadge diet={diet}/>
    </Container>
  );
}
