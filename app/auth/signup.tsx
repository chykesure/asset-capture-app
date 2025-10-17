import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function SignupScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold mb-4">Signup</Text>
      {/* form fields here */}
      <Link href="../login" asChild>
        <Button title="Go to Login" />
      </Link>
    </View>
  );
}
