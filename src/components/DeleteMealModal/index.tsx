import React, { useState } from "react";
import { Container, Content, Overlay, SplitContainer, Title } from "./styles";
import { Button } from "@components/Button";

type Props = {
  openModal: boolean;
  onCloseModal: () => void;
  onConfirmModal: () => void;
};

export function DeleteMealModal({
  openModal = false,
  onCloseModal,
  onConfirmModal,
}: Props) {
  return (
    <Container
      animationType="fade"
      transparent
      visible={openModal}
      onRequestClose={() => onCloseModal}
    >
      <Overlay>
        <Content>
          <Title>Deseja realmente excluir o registro da refeição?</Title>
          <SplitContainer>
            <Button
              title="Cancelar"
              type="SECONDARY"
              onPress={onCloseModal}
            />
            <Button title="Sim, excluir" onPress={onConfirmModal}/>
          </SplitContainer>
        </Content>
      </Overlay>
    </Container>
  );
}
