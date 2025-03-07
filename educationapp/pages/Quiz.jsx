import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function QuizScreen() {
  const navigation = useNavigation();

  const quizData = [
    { id: "1", title: "Advanced React Native Navigation" },
    { id: "2", title: "React Native Fundamentals" },
    { id: "3", title: "Advanced AI Video Editing & Automation" },
    { id: "4", title: "AI for Short-Form Video Creation" },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={require("../assets/images/quiz-icon.png")} style={styles.cardImage} />
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Quiz</Text>
      </View>

      {/* Quiz Cards Section */}
      <FlatList
        data={quizData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    backgroundColor: "linear-gradient(90deg, #FF416C, #FF4B2B)", // Pink gradient
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  gridContainer: {
    padding: 20,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    width: "45%",
    margin: 10,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  cardText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
});
