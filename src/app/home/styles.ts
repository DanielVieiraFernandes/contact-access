import { theme } from "@/theme";
import BottomSheet from "@gorhom/bottom-sheet";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: theme.colors.gray_300
    },
    header:{
        width: '100%',
        height: 132,
        backgroundColor: theme.colors.blue,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        zIndex: 1
    },
    input:{
        marginBottom: -27,
    },
    titleSection : {fontSize: 18,
        fontFamily: theme.fontFamily.bold,
        backgroundColor: theme.colors.blue,
        width: 34,
        height: 34,
        color: theme.colors.white,
        textAlign: "center",
        textAlignVertical: "center",
        borderRadius: 12,
        marginTop: 32
    },
    contentList: {
        padding: 24,
        gap: 12,
        paddingTop: 64
    },
    separator:{
        width: "100%",
        height: 1,
        backgroundColor: theme.colors.gray_100,
        marginTop: 12
    },
    BottomSheet: {
        backgroundColor: 'transparent'
    },
    bottomSheetContent:{
        flex: 1,
        backgroundColor: theme.colors.gray_100,
        borderTopStartRadius: 32,
        borderTopEndRadius: 32,
        paddingTop: 64,
        alignItems: "center",
        padding: 32
    },
    image: {
        marginBottom: -50,
        zIndex: 1,
        alignSelf: "center"
    },
    contactName:{
        fontSize: 32,
        fontFamily: theme.fontFamily.bold,
    },
    phoneNumber:{flexDirection: "row",
        alignItems: "center",
        gap: 5,
        marginBottom: 34
    },
    phone:{fontSize: 18,
        fontFamily: theme.fontFamily.bold,
        color: theme.colors.blue
    },
})