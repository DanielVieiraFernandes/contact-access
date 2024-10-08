import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.colors.gray_100,
        borderRadius: 18,
        height: 54,
        flexDirection: "row",
        alignItems: 'center',
        padding: 12,
        gap: 7,
    },
    input: {
        flex: 1,
        color: theme.colors.black,
        fontSize: 16,
        fontFamily: theme.fontFamily.regular,
    },
})