import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
   flex: 1;
   align-items: center;
   background-color: ${({ theme }) => theme.COLORS.GRAY_7};
   border-radius: 20px;
   padding: 40px 24px;
`;


export const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    
    elevation: 24,
  },
});