import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    letter: {
       backgroundColor: theme.colors.white,
       alignItems :'center',
       justifyContent: 'center'
    },
    text: {
        fontFamily: theme.fontFamily.medium,
    }
})