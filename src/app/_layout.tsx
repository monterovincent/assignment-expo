import { Stack } from "expo-router";

// This file is Expo Router's "shell" — it wraps every screen in the app
// directory. By default it auto-adds that gray header bar with the gear
// icon (dev tools shortcut) on top of every screen, which is NOT part of
// the Instagram design we're cloning —  building our own nav bar by
// hand inside index.tsx, so we don't want Router's version showing too.
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // turns off the auto-generated header globally
      }}
    />
  );
}
