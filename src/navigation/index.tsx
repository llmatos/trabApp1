import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton, Text } from '@react-navigation/elements';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from '@expo/vector-icons/Ionicons';

import { Home } from './screens/Home';
import { Profile } from './screens/Profile';
import { Settings } from './screens/Settings';
import { Updates } from './screens/Updates';
import { NotFound } from './screens/NotFound';

// Nossas novas telas!
import { ProductDetails } from './screens/ProductDetails';
import { Cart } from './screens/Cart';

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        title: 'Kabum',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home-sharp" size={size} color={color} />
        ),
      },
    },
    Departamentos: {
      screen: Updates,
      options: {
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="list-sharp" size={size} color={color} />
        ),
      },
    },
    Favoritos: {
      screen: Updates,
      options: {
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="heart-sharp" size={size} color={color} />
        ),
      },
    },
    "Minha conta": {
      screen: Updates,
      options: {
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-sharp" size={size} color={color} />
        ),
      },
    }
  },
  screenOptions: {
    headerShown: false,
    tabBarStyle: {
      backgroundColor: '#0060B1', 
      borderTopWidth: 0,         
    },
    tabBarActiveTintColor: '#FFFFFF',   
    tabBarInactiveTintColor: '#A1C7E5',
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        title: 'Home',
        headerShown: false,
      },
    },
    ProductDetails: {
      screen: ProductDetails,
      options: {
        title: 'Detalhes do Produto',
        headerStyle: { backgroundColor: '#0060B1' },
        headerTintColor: '#FFF',
      },
    },
    Cart: {
      screen: Cart,
      options: {
        title: 'Meu Carrinho',
        headerStyle: { backgroundColor: '#0060B1' },
        headerTintColor: '#FFF',
      },
    },
    Profile: {
      screen: Profile,
      linking: {
        path: ':user(@[a-zA-Z0-9-_]+)',
        parse: {
          user: (value) => value.replace(/^@/, ''),
        },
        stringify: {
          user: (value) => `@${value}`,
        },
      },
    },
    Settings: {
      screen: Settings,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text>Close</Text>
          </HeaderButton>
        ),
      }),
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: '404',
      },
      linking: {
        path: '*',
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackType = typeof RootStack;

declare module '@react-navigation/core' {
  interface RootNavigator extends RootStackType {}
}