import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerItemList: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
    },
      itemList: {
        fontSize: 14,
      },
      deleteButton: {
        backgroundColor: "#b0003a",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 100
      },
      deleteButtonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
      },
})