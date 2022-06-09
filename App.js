import React, {useState} from 'react';
import { View, Button, Text, FlatList, TouchableOpacity } from 'react-native';
import CustomModal from './src/components/modal/index';
import ListItem from './src/components/list-item';
import Input from './src/components/input';
import { styles } from './styles';

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleOnChangeText = (text) => {
    //console.warn(text);
    setText(text);
  };

  const addItem = () => {
    if (text !== "") { 
      setList((currentList) => [
        ...currentList,
        {id: Math.random(), value: text}
      ]);
      setText("");
    }
  };

  const onHandlerModal = (id) => {
    setItemSelected(list.filter((item) => item.id ===id)[0]);
    setModalVisible(!modalVisible);
  };

  const onHandlerDelete = (id) => {
    setList((currentList) => currentList.filter((item) => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  };

  const renderItem = ({item} ) => (
    <ListItem item={item} onPress={onHandlerModal}/>
  );

  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Input 
          placeholder="Item to Shopping List"
          style={styles.input}
          placeholderTextColor="#b0003a"
          value={text}
          onChangeText={(text) => handleOnChangeText(text)}  
        />

        <TouchableOpacity onPress={() => addItem()} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    
      <FlatList 
        data={list}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}/>

        <CustomModal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => null}
        >
           <TouchableOpacity style={styles.modalContent} onPress={() => setModalVisible(!modalVisible)}>
            <View style={styles.modalTitleContainer}>
              <Text style={styles.modalTitle}>Delete Item</Text>
            </View>
            <Text style={styles.modalText}> from Shopping List?</Text>
            <Text style={styles.modalMessage}>{itemSelected.value}</Text>

            <TouchableOpacity onPress={() => onHandlerDelete(itemSelected.id)} style={styles.button}>
              <Text style={styles.buttonText}>Ok</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </CustomModal>
    </View>
  );
}
