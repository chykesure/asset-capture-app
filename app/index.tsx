import { Redirect } from "expo-router";

export default function Index() {
  const isLoggedIn = false; // replace with auth state check
  return (
    <Redirect href={isLoggedIn ? "../dashboard" : "../login"} />
  );
}
