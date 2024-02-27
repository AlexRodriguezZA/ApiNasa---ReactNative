import React, { FC } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { PostImage, RouteStackParams } from "../../types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type postImageNavigatorProps = NativeStackNavigationProp<
  RouteStackParams,
  "Detail"
>;

const TodaysImage: FC<PostImage> = ({ date, title, url, explanation }) => {
  const { navigate } = useNavigation<postImageNavigatorProps>();
  const handleViewPress = () => {
    navigate("Detail", { title, date, url, explanation });
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.imagen} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <Pressable onPress={handleViewPress}>
          <Text style={styles.button}>View</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TodaysImage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  imagen: {
    width: "100%",
    borderRadius: 24,
    height: 190,
    borderWidth: 2,
    borderColor: "#fff",
  },
  title: {
    color: "#ffff",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  date: {
    color: "#ffff",
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
  button: {
    color: "#c7d2fe",
  },
});
