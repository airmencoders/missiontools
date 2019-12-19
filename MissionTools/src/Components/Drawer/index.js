import React from "react";
import { View } from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import { StyleSheet } from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import { Drawer } from 'react-native-paper';



const MTDrawerNavigator = props => (
  
  <SafeAreaView style={[styles.container]}>
    {/* <DrawerItems
      activeBackgroundColor={"black"}
      activeTintColor={"white"}
      iconContainerStyle={styles.icons}
      {...props}
    /> */}
    <Drawer.Section title="Some title">
    <Drawer.Item
            label="First Page"
        
            onPress={() => props.navigation.navigate("Home")}
          />
          <Drawer.Item
            label="Second Page"
     
            onPress={() => props.navigation.navigate("Notifications")}
          />
     </Drawer.Section>
  </SafeAreaView>
);

export default MTDrawerNavigator;



const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  icons: {
    width: 30
  }
});

