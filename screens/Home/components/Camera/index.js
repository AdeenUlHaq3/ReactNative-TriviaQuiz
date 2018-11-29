import React from 'react';
import { Camera } from 'expo';
import { View, Text, TouchableOpacity } from 'react-native';

const CameraComponent = (props) => {
    const { parentThis } = props;
    return (
        <View style={{ flex: 1 }}>
            <Camera 
                ref={ref => parentThis.camera = ref}
                style={{ flex: 1 }} 
                type={props.type}
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                        style={{
                            flex: 0.1,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                        }}
                        onPress={props.snap}>
                        <Text
                            style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                            {' '}Capture{' '}
                        </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

export default CameraComponent;