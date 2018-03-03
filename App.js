import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation'; // 1.0.0-beta.27
import { Ionicons } from 'react-native-vector-icons';

import { Calculator } from './src/components/calc.js';
import { MyScanner } from './src/components/barcodescanner.js';
import { Categories } from './src/components/categories.js';
import { Finisher } from './src/components/finisher.js';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Calculator />
        <Categories />
        <Finisher />
      </View>
    );
  }
}

class BarcodeScannerScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <MyScanner />
      </View>
    );
  }
}

class ArticlesScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Articles</Text>
        <Text>Searchbox</Text>
        <Text>List Articles with option to edit</Text>
        {/*<Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />*/}
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings</Text>
        <Text>Some of the Features could be payed Features</Text>
        <Text>Export Articles</Text>
        <Text>Import Articles</Text>
        <Text>Auto Upload</Text>
        <Text>Conform with Finance Regulations</Text>
      </View>
    );
  }
}

const RootStack = TabNavigator(
  {
    Calc: { screen: HomeScreen, },
    Barcode: { screen: BarcodeScannerScreen, },
    Article: { screen: ArticlesScreen, },
    Settings: { screen: SettingsScreen, },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Calc') {
          iconName = `ios-calculator${focused ? '' : '-outline'}`;
        } else if (routeName === 'Barcode') {
          iconName = `ios-barcode${focused ? '' : '-outline'}`;
        } else if (routeName === 'Article') {
          iconName = `ios-albums${focused ? '' : '-outline'}`;
        }else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: true,
  },
  {
    initialRouteName: 'Calc',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}