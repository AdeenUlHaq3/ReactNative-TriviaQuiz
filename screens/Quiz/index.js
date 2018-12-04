import React from 'react';
import { View, Button, Picker, ScrollView } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body } from "native-base";
import axios from 'axios';

class Quiz extends React.Component {
    state = {
        language: null,
        isQuiz: false,
        quizzes: []
    };

    startQuiz = () => {
        axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
            .then(response => {
                this.setState({
                    isQuiz: true,
                    quizzes: response.data.results
                });
            });
    };

    render() {
        const {
            language,
            isQuiz,
            quizzes
        } = this.state;

        return (
            isQuiz
                ?
                quizzes.map(quiz =>
                    <Container key={quiz.question}>
                        <Content padder>
                            <Card>
                                <CardItem header bordered>
                                    <Text>{quiz.question}</Text>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                        <Text>1. {quiz.correct_answer}</Text>
                                        {quiz.incorrect_answers.map((incorrect_answer, index) => <Text key={incorrect_answer}>{index+2}. {incorrect_answer}</Text>)}
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>
                    </Container>
                )
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