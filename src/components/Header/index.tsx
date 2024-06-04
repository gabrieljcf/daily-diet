import { useNavigation } from "@react-navigation/native";
import {
  ActionText,
  BackButton,
  BackButtonIcon,
  Container,
  HeaderStyleProps,
} from "./styles";

type Props = {
  type?: HeaderStyleProps;
  action?: string;
};
export function Header({ type = 'DEFAULT', action }: Props) {
  const navigation = useNavigation()
  function handleGoback() {
    navigation.goBack()
  }

  return (
    <Container>
      <BackButton onPress={handleGoback}>
        <BackButtonIcon type={type} />
      </BackButton>
      {action && <ActionText>{action}</ActionText>}
      <ActionText></ActionText>
    </Container>
  );
}
