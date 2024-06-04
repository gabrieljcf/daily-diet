import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "@components/Button";
import {
  Container,
  FeedbackImage,
  SubTitle,
  SubTitleContainer,
  Title,
} from "./style";
import feedbackImage from "@assets/feedback.png";
import failedFeedback from "@assets/failed-feedback.png";

type RouteParams = {
  inDiet: boolean;
};

export function Feedback() {
  const route = useRoute();
  const navigation = useNavigation();
  const { inDiet } = route.params as RouteParams;

  function handleHome() {
    navigation.navigate("home");
  }

  return (
    <Container>
      <Title type={inDiet ? "PRIMARY" : "SECONDARY"}>
        {inDiet ? "Continue assim!" : "Que pena!"}
      </Title>
      <SubTitleContainer>
        <SubTitle>{inDiet ? "Você continua" : "Você"}</SubTitle>
        <SubTitle highlight>
          {inDiet ? "dentro da dieta." : "saiu da dieta."}
        </SubTitle>
        <SubTitle>
          {inDiet ? "Muito bem!" : "Mas continue se esforçando e não desista!"}
        </SubTitle>
      </SubTitleContainer>
      <FeedbackImage source={inDiet ? feedbackImage : failedFeedback} />
      <Button title="Ir para a página inicial" onPress={handleHome}/>
    </Container>
  );
}
