import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpeneses from './screens/AllExpenses';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import { Ionicons } from '@expo/vector-icons';

  const Stack=createNativeStackNavigator()
  const BottomTabs=createBottomTabNavigator()

  function ExpensesOverview() {
    return (
      <BottomTabs.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#3c7ce3'},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: '#3c7ce3'},
        tabBarActiveTintColor: 'white'
      }}>
        <BottomTabs.Screen name="AllExpenses" component={AllExpeneses} options={{
          title: 'All Expenses',
          tabBarIcon: ({color,size})=>(
            <Ionicons name="calendar" size={size} color={color} />
          )
        }} />
        <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} options={{
          title: 'Recent Expenses',
          tabBarIcon: ({color,size})=>(
            <Ionicons name="hourglass" size={size} color={color} />
          )
        }}/>
      </BottomTabs.Navigator>
    )
  }

export default function App() {

  return (
    <>
    <StatusBar style="auto" />
      <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="ExpenseOverview" component={ExpensesOverview} options={{headerShown: false}} />
         <Stack.Screen name="ManageExpense" component={ManageExpense} />
       </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
