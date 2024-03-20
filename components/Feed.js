import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

const Post = ({ title, content }) => (
  <View style={styles.postContainer}>
    <Text style={styles.postTitle}>{title}</Text>
    <Text>{content}</Text>
  </View>
);

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addPost = () => {
    setPosts([...posts, { title, content }]);
    setTitle("");
    setContent("");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Feed</Text>
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <Post title={item.title} content={item.content} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
        <TextInput
          placeholder="Content"
          value={content}
          onChangeText={setContent}
          style={styles.input}
          multiline
        />
        <Button title="Add Post" onPress={addPost} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  postContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
  },
  postTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default Feed;
