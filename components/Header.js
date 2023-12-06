import { View, Text } from 'react-native'
import React from 'react'

const Header = (props) => {
  return (
    <View style={{marginLeft:15}}>
      <Text Style={{fontWeight:'bold', fontSize:28}}>
        {props.name}
      </Text>
    </View>
  )
}

export default Header
