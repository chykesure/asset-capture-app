import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function LoginScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold mb-4">Login</Text>
      {/* form fields here */}
      <Link href="../dashboard" asChild>
        <Button title="Login" />
      </Link>
      <Link href="../signup" asChild>
        <Button title="Go to Signup" />
      </Link>
    </View>
  );
}
