import React, { FC } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PostImage, RouteStackParams } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type postImageNavigatorProps = NativeStackNavigationProp<
  RouteStackParams,
  "Detail"
>;


const PostImages: FC<PostImage> = ({ title, date, url, explanation }) => {
  
  const { navigate } = useNavigation<postImageNavigatorProps>();
  const handleViewPress = () => {
    navigate("Detail", { title, date, url, explanation });
  };
  
  return (
    <View style={styles.container}>
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

export default PostImages;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(18,39,113,255)",
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: "#ffff",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 12
  },
  date: {
    color: "#ffff",
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
  button: {
    color: "#c7d2fe"

  },
});
