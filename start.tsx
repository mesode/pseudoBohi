import React, { Component } from 'react';
import { Button } from 'react-native';

const Start = () => {
    const handlePress = () => false

    return (
        <Button
            onPress = {handlePress}
            title = "START!"
            color = "red"
        />
    )
}
export default Start;