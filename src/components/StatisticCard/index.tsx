import { Container, StatisticStyleProps, SubTitle, Title } from "./styles";

type Props = {
  fullWidth?: boolean;
  title: number;
  subTitle: string;
  type?: StatisticStyleProps;
};

export function StatisticCard({ type = "DEFAULT", subTitle, title, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}
