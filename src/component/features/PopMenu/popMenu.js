import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'




export function PopMenu() {

    return (
        <View>
            <TouchableOpacity style={{marginTop:15,display:"flex",alignItems:"flex-end",}}>
            <Ionicons name="ios-add-circle-outline" size={30}/>
            </TouchableOpacity>
        </View>
    )
}