import React, { FC } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { PostImage as PostImageTypes } from "../../types";
import PostImages from "../PostImages";

const LastFiveDaysImages: FC<{postImages?: PostImageTypes[]}> = ({postImages}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView style={styles.content}>
        {postImages?.map((item, index) => (
          <PostImages key={`post-image-${index}`} {...item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default LastFiveDaysImages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  title: {
    color: "#ffff",
    fontSize: 16,
    marginBottom: 18,
  },
  content: {
    paddingHorizontal: 24,
  },
});
