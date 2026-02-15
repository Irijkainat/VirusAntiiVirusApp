import { Tabs } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
   <Tabs>
  <Tabs.Screen name="index" options={{ title: "Home" }} />
  <Tabs.Screen name="control-hub" options={{ title: "Control Hub" }} />
  <Tabs.Screen name="scan" options={{ title: "Scan" }} />
  <Tabs.Screen name="scanresults" options={{ title: "Results" }} />
  <Tabs.Screen name="login" options={{ title: "Login" }} />
  <Tabs.Screen name="signup" options={{ title: "Sign Up" }} />
  <Tabs.Screen name="injection-phase-1" options={{ title: "Phase 1" }} />
  <Tabs.Screen name="injection-phase-2" options={{ title: "Phase 2" }} />
</Tabs>
  );
}
