import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const SplitContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;


export const FieldsContainer = styled.View`
  flex: 1;
  width: 100%;
`;

