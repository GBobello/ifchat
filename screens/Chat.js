import React, { useEffect, useState } from 'react'
import { Component } from 'react';
import {
    View,
    Text,
    Vibration,
    YellowBox
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import api from '../API';

const Chat = props => {

    const user = props.navigation.state.params.idUser;
    const userChamado = props.navigation.state.params.idUserChamado;

    const [messages, setMessages] = useState([]);



    useEffect(() => {
        const idUser = user._id;
        const idUserChamado = userChamado._id;
        console.disableYellowBox = true;

        api.updateMessages((msg) => {
            setMessages((prevMsgs) => GiftedChat.append(prevMsgs, msg));
        }, idUser, idUserChamado);

    }, []);

    function onSendMessage(msgs){
        msgs.forEach(msgs => {
            msgs.createdAt = new Date().getTime();
            msgs.userRecebe = userChamado;
            api.createMessage(msgs);
        })
        console.log(msgs);
    }

    function onLongPress(){
        Vibration.vibrate(10 * 10);
    }

    return(
        <GiftedChat 
            placeholder={'Digite Aqui...'}
            timeFormat='hh:mm'
            dateFormat='DD/MM/YYYY'
            onLongPress={onLongPress} 
            user={user} 
            messages={messages} 
            onSend={onSendMessage} 
            renderAvatarOnTop={true}       
        />
    );
};


export default Chat;