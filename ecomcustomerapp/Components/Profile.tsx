import {useEffect} from 'react'
import {View,TouchableOpacity,Text} from 'react-native'

export default function Profile({ route, navigation }:{ route:any, navigation: any }) {
  useEffect(()=>{
    alert(JSON.stringify(route.params))
  },[])

  return(
    <View>
    <Text>Profile</Text>
    </View>
  )
}

function alert(arg0: string) {
    throw new Error('Function not implemented.')
}
