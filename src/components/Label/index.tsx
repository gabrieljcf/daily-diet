import { Container } from "./style";

type Props = {
  text: string;
};
export function Label({ text }: Props) {
  return <Container>{text}</Container>;
}
