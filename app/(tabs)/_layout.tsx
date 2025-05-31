import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import { Platform, Pressable, useColorScheme as _useSystemColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedView } from '@/components/ThemedView';

export default function TabLayout() {
  const currentScheme = useColorScheme(); // This is your app's color scheme (can be customized)
  const systemScheme = _useSystemColorScheme(); // fallback to system theme
  const [theme, setTheme] = useState<'light' | 'dark'>(currentScheme ?? systemScheme ?? 'light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    // OPTIONAL: Persist theme using context or AsyncStorage if needed
  };

  return (
    <Tabs
      screenOptions={{
        headerRight: () => (
          <Pressable
            onPress={toggleTheme}
            style={({ pressed }) => ({
              marginRight: 15,
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <Ionicons
              name={theme === 'light' ? 'moon' : 'sunny'}
              size={24}
              color={theme === 'light' ? '#333' : '#f1c40f'}
            />
          </Pressable>
        ),
        headerTitle: '',
        tabBarActiveTintColor: Colors[theme].tint,
        tabBarButton: (props) => (
          <HapticTab
            {...props}
            style={{
              flex: 1,
              paddingVertical: Platform.OS === 'ios' ? 12 : 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        ),
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            height: 65,
          },
          android: {
            height: 60,
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
