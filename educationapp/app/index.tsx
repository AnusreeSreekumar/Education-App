import { Image, StyleSheet, Text, View,  } from "react-native";
import Colors from './../constant/Colors';
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>

      <Image 
        source={require('./../assets/images/landing.png')}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Coaching Guru</Text>
        <Text style={styles.subtitle}>
          Transform your ideas into engaging educational content, effortlessly with AI!
        </Text>

        <Link href='/auth/login' asChild>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </View>
        </Link>

        <Link href='/auth/signup' asChild>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Already have an account?</Text>
          </View>
        </Link>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  image: {
    width: '100%',
    height: 400, 
  },
  content: {
    flex: 1,
    padding: 25,
    backgroundColor: Colors.PRIMARY,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.WHITE,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.WHITE,
    textAlign: "center",
    marginTop: 10,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: Colors.WHITE,
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: Colors.PRIMARY,
    fontWeight: "bold",
  },
});
