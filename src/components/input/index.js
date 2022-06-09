import react from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";

const Input = ({placeholder, style, placeholderTextColor = '#212121', value, onChangeText, ...props}) => {
    const onHandleChangeText = (text) => {
        onChangeText(text)
    }

    return (
        <TextInput 
            {...props}
          placeholder={placeholder}
          style={[styles.input, {...style}]}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onHandleChangeText}  
        />
    )
}

export default Input;