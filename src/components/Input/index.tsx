import { TextInput, TextInputProps } from "react-native";
import { Container, Input as InputComponent } from "./styles";
import { Ref } from "react";
import { Label } from "@components/Label";

type Props = TextInputProps & {
  label: string;
  split?: boolean;
  inputRef?: Ref<TextInput>;
};

export function Input({ label, split = false, inputRef, ...rest }: Props) {
  return (
    <Container split={split}>
      <Label text={label}/>
      <InputComponent split={split} ref={inputRef} {...rest}/>
    </Container>
  );
}
