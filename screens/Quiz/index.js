import React from 'react';
import { View, Button, Picker } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body } from "native-base";
import axios from 'axios';

class Quiz extends React.Component {
    navigationOptions = {
        title: 'Quiz'
    };

    state = {
        language: null,
        isQuiz: false
    };

    startQuiz = () => {
        this.setState({ isQuiz: true });
        var instance = axios.create({
            baseURL: 'https://opentdb.com',
            timeout: 10000
          });
        instance.get('/api.php?amount=10&category=9&difficulty=easy&type=multiple')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        const {
            language,
            isQuiz
        } = this.state;

        return (
            isQuiz
                ?
                <Container>
                    <Content padder>
                        <Card>
                            <CardItem header bordered>
                                <Text>NativeBase</Text>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text>
                                        NativeBase is a free and open source framework that enable
                                        developers to build
                                        high-quality mobile apps using React Native iOS and Android
                                        apps
                                        with a fusion of ES6.
                </Text>
                                </Body>
                            </CardItem>
                            <CardItem footer bordered>
                                <Text>GeekyAnts</Text>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
                :
                <View>
                    <Picker
                        selectedValue={language}
                        style={{ height: 50, width: '100%' }}
                        onValueChange={(itemValue) => this.setState({ language: itemValue })}>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                    <Button
                        onPress={this.startQuiz}
                        title="Start Quiz"
                        color="#841584"
                    />
                </View>
        );
    };
}

export default Quiz;