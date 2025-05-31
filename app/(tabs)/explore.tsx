import { StyleSheet } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#dfe6e9', dark: '#2d3436' }}
      headerImage={
        <IconSymbol
          size={280}
          color="#636e72"
          name="plusminus.circle"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore Counter App</ThemedText>
      </ThemedView>

      <ThemedText style={styles.intro}>
        This app demonstrates a clean and user-friendly counter application built using Expo and React Native. Below are the core features and how they are implemented.
      </ThemedText>

      <Collapsible title="🔢 Increment & Decrement">
        <ThemedText>
          Users can increment or decrement a number with a single tap. The state is updated in real time using React's <ThemedText type="defaultSemiBold">useState</ThemedText> hook.
        </ThemedText>
      </Collapsible>

      <Collapsible title="🔄 Reset to Zero">
        <ThemedText>
          The reset button sets the count back to 0 instantly, which is helpful for restarting tasks or clearing user input.
        </ThemedText>
      </Collapsible>

      <Collapsible title="🎨 Responsive & Stylish UI">
        <ThemedText>
          The UI features gradient backgrounds, rounded counters, and color-coded buttons for clear interaction. Works great across devices.
        </ThemedText>
      </Collapsible>

      <Collapsible title="🌗 Dark & Light Mode Support">
        <ThemedText>
          The app adapts to your device's theme using the <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook, giving a smooth experience in both dark and light modes.
        </ThemedText>
      </Collapsible>

      <Collapsible title="🚀 Built with Expo">
        <ThemedText>
          Developed using the Expo SDK, this app runs on Android, iOS, and web with ease. The setup is fast, and development is smooth with hot reload.
        </ThemedText>
      </Collapsible>

      <Collapsible title="📁 Project Structure">
        <ThemedText>
          - <ThemedText type="defaultSemiBold">HomeScreen</ThemedText>: Main counter functionality  
          - <ThemedText type="defaultSemiBold">Explore</ThemedText>: Explains the app features  
          - <ThemedText type="defaultSemiBold">_layout.tsx</ThemedText>: Defines tab layout and navigation  
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#636e72',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  intro: {
    marginHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
});
