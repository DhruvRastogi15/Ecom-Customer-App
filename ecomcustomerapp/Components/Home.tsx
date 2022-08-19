import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default function Home({ route, navigation }: { route: any, navigation: any }) {
    const [count, setCount] = useState(0);

    const onPressButton = () => {
        navigation.navigate('Profile', {
            itemId: 86,
            otherParam: 'anything you want here',
        });
    };
    useEffect(() => {
        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
    });

    const onPressCounter = (value: string) => {
        if (value == 'Increase') {
            setCount(count + 1);
        } else if (value == 'Decrease') {
            if (count == 0) {
                setCount(0);
                alert('Count can not go below 0');
            } else {
                setCount(count - 1);
            }
        }
    };
    return (
        <View>
            <TouchableOpacity onPress={onPressButton}>
            <Text>Button</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressCounter('Increase')}>
                <Text>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressCounter('Decrease')}>
                <Text>Decrease</Text>
            </TouchableOpacity>
            <Text>{count}</Text>
        </View>
    );
}
function alert(arg0: string) {
    throw new Error('Function not implemented.');
}

