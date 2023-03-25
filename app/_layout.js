import { Slot } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeLayout() {
  return (
  <View style={{flex:1, flexDirection:'row', maxHeight:'100%', backgroundColor:'lightgrey'}}>
    {/* <View style={{flex:1, backgroundColor:''}}>
        <Text>Layout</Text>
    </View> */}
    <View style={{flex:5, backgroundColor:'lightblue', width:'90%'}}>
        <Slot />
    </View>
  </View>
  );
}