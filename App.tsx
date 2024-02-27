import { StyleSheet, Text, View, StatusBar } from "react-native";
import Routes from "./src/routes/Routes";

export default function App(): JSX.Element {
  return (
     <View style={styles.container}>
      <StatusBar/>
      <Routes/>
    </View> 
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)'
  },
});
