/*****************************************************************************
* _title_    = 'App'                                                         *   
* _author_   = 'Gabriel Bobello'                                             *   
* _revinfo_  =  ('2021-03-17 08:28', 'Gabriel Bobello')                      *   
* _status_   = 'revisado'                                                    *   
* _exename_  = ('IFChat-Application')                                        *                   
*                                                                            *
* Copyright ©: IFChat-Application                                            *
******************************************************************************/



import React from "react";
import { color } from "react-native-reanimated";
import { Actions, Router, Scene } from 'react-native-router-flux'
import Chat from "./screens/Chat";
import Home from "./screens/Home";
import ChatsExistentes from "./screens/ChatsExistentes";
import Usuario from "./screens/Usuario";
import Loading from "./screens/Loading";
import 
{ToastAndroid,
  StyleSheet
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
 



export default function App() {
  return (
    <Router>
      <Scene key="root" >
        
        <Scene key="Home" 
              component={Home}
              navTransparent={1}
              initial />

        <Scene key="Usuario"
              component={Usuario}
              hideNavBar={true}
              />

        <Scene key="Loading"
              title="Loading"
              component={Loading}
              hideNavBar={true}
        />
       
       <Scene key="ChatsExistentes"  
              component={ChatsExistentes}
              title="IFChat - Application" 
              titleStyle={{
                color: "#FFF",         
              }}
              onRight={null} 
              onBack={()=>{null}} 
              onLeft={() => {null}}
              hideBackImage={true}
              backToInitial={false}
              rightButtonStyle={{
                heigth: 10,
                width: 45,
              }}
              leftButtonStyle={{
                heigth: 0,
                width: 0,
              }}
              rightButtonImage={require('./img/msg.png')}
              leftButtonImage={require('./assets/verde.png')}
              navigationBarStyle={{backgroundColor: '#8dc641'}} />

        <Scene key="Chat"
              title="Chat"
              titleStyle={{
                color: "#FFF",         
              }}
              navigationBarStyle={{backgroundColor: '#8dc641'}}
              component={Chat}
              />
      

      </Scene>
    </Router> 
  );
};

