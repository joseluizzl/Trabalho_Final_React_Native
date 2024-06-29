import { NavigationContainer } from "@react-navigation/native"
import { MyStack } from "./StackNavigation"


export const Routes = () => {
    return <NavigationContainer>  
            <MyStack/>   
         </NavigationContainer>
}