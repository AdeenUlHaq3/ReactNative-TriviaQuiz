import React from 'react';
import { View, Button, Picker, ScrollView } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body, ListItem, Radio, Right, Left } from "native-base";
import axios from 'axios';

class Quiz extends React.Component {
    state = {
        language: null,
        isQuiz: false,
        quizzes: [],
        radio: false
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

    handleRadio = (e) => {
        const {radio} = this.state;
        this.setState({ radio: !radio })
    };

    render() {
        const {
            language,
            isQuiz,
            quizzes,
            radio
        } = this.state;

        return (
            isQuiz
                ?
                <ScrollView contentContainerStyle={{ justifyContent: 'flex-start', marginTop: 0 }}>
                    {
                        quizzes.map((quiz, index) =>
                            <Container key={index}>
                                <Content padder>
                                    <Card>
                                        <CardItem header bordered>
                                            <Text>{quiz.question}</Text>
                                        </CardItem>
                                        <CardItem bordered>
                                            <Body>
                                                <ListItem key={quiz.correct_answer}>
                                                    <Text>1. {quiz.correct_answer}</Text>
                                                    <Radio
                                                        name={quiz.correct_answer}
                                                        color={"#f0ad4e"}
                                                        selectedColor={"#5cb85c"}
                                                        selected={radio}
                                                        onPress={this.handleRadio}
                                                    />
                                                </ListItem>
                                                {
                                                    quiz.incorrect_answers.map((incorrect_answer, index) =>
                                                        <ListItem key={incorrect_answer}>
                                                            <Text>{index + 2}. {incorrect_answer}</Text>
                                                            <Radio
                                                                name={incorrect_answer}
                                                                color={"#f0ad4e"}
                                                                selectedColor={"#5cb85c"}
                                                                selected={radio}
                                                                onPress={this.handleRadio}
                                                            />
                                                        </ListItem>
                                                    )
                                                }
                                            </Body>
                                        </CardItem>
                                    </Card>
                                </Content>
                            </Container>
                        )
                    }
                </ScrollView>
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