import { useState } from "react";
import { View, Text, TextInput, Pressable, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constant/Colors";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#EAF2F8",
      }}
    >
      {/* Gradient Background */}
      <View
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "50%",
          backgroundColor:Colors.PRIMARY,
          borderBottomLeftRadius: 80,
          borderBottomRightRadius: 80,
        }}
      />

      {/* Title */}
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 30,
          color: "#fff",
        }}
      >
        Create An Account
      </Text>

      <View
        style={{
          width: "100%",
          backgroundColor: "#fff",
          padding: 20,
          borderRadius: 15,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          elevation: 5,
        }}
      >

        {/* full name */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#F8F9F9",
            borderRadius: 12,
            paddingHorizontal: 15,
            marginBottom: 15,
            borderWidth: 1,
            borderColor: "#ccc",
          }}
        >
          <FontAwesome name="user" size={20} color="#888" style={{ marginRight: 10 }} />
          <TextInput
            style={{ flex: 1, height: 50 }}
            placeholder="Full Name"
            keyboardType="full-name"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Email Input */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#F8F9F9",
            borderRadius: 12,
            paddingHorizontal: 15,
            marginBottom: 15,
            borderWidth: 1,
            borderColor: "#ccc",
          }}
        >
          <FontAwesome name="envelope" size={20} color="#888" style={{ marginRight: 10 }} />
          <TextInput
            style={{ flex: 1, height: 50 }}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Password Input */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#F8F9F9",
            borderRadius: 12,
            paddingHorizontal: 15,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: "#ccc",
          }}
        >
          <FontAwesome name="lock" size={20} color="#888" style={{ marginRight: 10 }} />
          <TextInput
            style={{ flex: 1, height: 50 }}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 15,
            borderRadius: 30,
            alignItems: "center",
          }}
          onPress={() => router.push("/auth/login")}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            Signup
          </Text>
        </TouchableOpacity>
      </View>

      
      {/* Sign Up Link */}
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Text style={{ fontSize: 14, color: "#666" }}>Alraedy have an account?</Text>
        <TouchableOpacity onPress={() => router.push("/auth/login")}>
          <Text style={{ color: "#509BEB", fontSize: 14, marginLeft: 5, fontWeight: "bold" }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}