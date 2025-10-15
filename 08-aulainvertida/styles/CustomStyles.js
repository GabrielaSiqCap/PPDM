import { StyleSheet } from "react-native";

export function customStyles() {
    const body = {
        text: {
            fontSize: 20, 
            fontWeight: "bold", 
            color: "green"
              },
    }
    return StyleSheet.create(body);
 }
