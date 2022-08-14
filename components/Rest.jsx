import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import axios from "axios";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text>{title}</Text>
  </View>
);

const Rest = () => {
  const [data, setData] = useState([]);
  const renderItem = ({ item }) => <Item title={item.title} />;
  const axiosGet = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <View style={styles.container}>
      <Button title="AxiosGet" onPress={axiosGet} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default Rest;
