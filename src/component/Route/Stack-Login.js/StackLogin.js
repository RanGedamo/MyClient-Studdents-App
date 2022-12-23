import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/Login";
import Register from "../../screens/Register";






function StackLogin() {
    const StackLogin = createStackNavigator();
    return (
        <StackLogin.Navigator>
          <StackLogin.Screen
                      name="Login"
                      component={Login}
            options={{ headerShown: false }}
          />
          <StackLogin.Screen name="Register" component={Register} options={{headerShown:false}}/>


        </StackLogin.Navigator>
    );
  }
  export default StackLogin