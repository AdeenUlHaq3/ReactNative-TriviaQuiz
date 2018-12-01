import React from 'react';
import { View, Button, Picker } from 'react-native';

class Quiz extends React.Component {
    state = {
        language: null,
    };

    render() {
        const { language } = this.state;
        const { startQuiz } = this.props.navigation.state.params;
        
        return (
            <View>
                <Picker
                    selectedValue={language}
                    style={{ height: 50, width: '100%' }}
                    onValueChange={(itemValue) => this.setState({ language: itemValue })}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Button
                    onPress={startQuiz}
                    title="Start Quiz"
                    color="#841584"
                />
            </View>
        );
    };
}

export default Quiz;