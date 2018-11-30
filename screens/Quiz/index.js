import React from 'react';
import { View, Button } from 'react-native';

class Quiz extends React.Component {
    render() {
        const { startQuiz } = this.props.navigation.state.params;
        console.log(this.props);
        
        return (
            <View>
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