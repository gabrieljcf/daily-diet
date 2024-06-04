import { KeyboardAvoidingViewProps, ViewProps } from "react-native";
import { Container } from "./styles";

export function Content(props: KeyboardAvoidingViewProps) {
  return <Container {...props}></Container>
}