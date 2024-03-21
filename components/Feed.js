import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import {
  View,
  Text,
  FlatList,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Post = ({
  title,
  content,
  author,
  onLike,
  onDislike,
  likes,
  dislikes,
}) => (
  <View style={styles.postContainer}>
    <Text style={styles.postAuthor}>{author}</Text>
    <Text style={styles.postTitle}>{title}</Text>
    <Text>{content}</Text>
    <View style={styles.reactionsContainer}>
      <Button title={`Like (${likes})`} onPress={onLike} />
      <Button title={`Dislike (${dislikes})`} onPress={onDislike} />
    </View>
  </View>
);

const Feed = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addPost = () => {
    if (user) {
      const newPost = {
        title,
        content,
        author: user.name,
        likes: 0,
        dislikes: 0,
      };
      setPosts([...posts, newPost]);
    }
    setTitle("");
    setContent("");
  };

  const likePost = (index) => {
    const newPosts = [...posts];
    newPosts[index].likes += 1;
    setPosts(newPosts);
  };

  const dislikePost = (index) => {
    const newPosts = [...posts];
    newPosts[index].dislikes += 1;
    setPosts(newPosts);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Feed</Text>
      <FlatList
        data={posts}
        renderItem={({ item, index }) => (
          <Post
            title={item.title}
            content={item.content}
            author={item.author}
            likes={item.likes}
            dislikes={item.dislikes}
            onLike={() => likePost(index)}
            onDislike={() => dislikePost(index)}
          />
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
    </View>
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
  postAuthor: {
    fontStyle: "italic",
    marginBottom: 5,
  },
  reactionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default Feed;
