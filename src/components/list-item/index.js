import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from "./styles";

const ListItem = ({ item, onPress }) => {
    return (<View key={item.id} style={styles.containerItemList}>
      <Text style={styles.itemList}>{item.value}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onPress(item.id)}
      >
          <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>);
}
export default ListItem;