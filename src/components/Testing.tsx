import React from 'react'
import { Badge } from './ui/Badge'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {View} from 'react-native'
export default function TestingScreen() {

    const insets = useSafeAreaInsets();
    const paddingTop = insets.top + 1.4 * insets.top;

  return (

    <>
    <View
        style={{ paddingTop: paddingTop }}
        className="flex flex-col justify-center items-center w-[100%] mx-[2%] bg-cornflowerblue-light"
      >
        <Badge
        type='md'
        text="Badge"
        textStyle={{color: 'white', textAlign: 'center'}}
        className="rounded-full my-2 justify-center items-center "
        />

        <Badge
          type='md'
          text="Badge"
          textStyle={{color: 'white', textAlign: 'center'}}
          className="rounded-full my-2 justify-center items-center "
        />    
    </View>
    </>
    
  );
}


