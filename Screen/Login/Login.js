import React, { Component, Fragment } from "react";
import {SafeAreaView} from "react-native";

import { Container, Content, Card, CardItem, Item, Input, Label, Icon, Form, Button, Text, Spinner,  } from "native-base";
class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            Loading:false
        }
    }

    handleLogon = () =>{
        this.setState({Loading:true})
        setTimeout(() => {
            this.setState({Loading:false})
            this.props.navigation.navigate('Home')    
        }, 5000);
    }

    render() {
        return (
            <Fragment>
            <SafeAreaView/>
            
            <Container>
                <Content>
                
                    <Card style={{ borderColor: "green", borderWidth: 5, marginTop:30 }}>
                        <CardItem header style={{ backgroundColor: "green" }}><Text style={{ color: "white" }}>Login</Text></CardItem>
                        <Form style={{ padding: 5 }}>
                            <CardItem>
                                <Item floatingLabel last>
                                    <Icon name="person" />
                                    <Label>Email</Label>
                                    <Input onChangeText={(email) => setEmail(email)} />
                                </Item>
                            </CardItem>
                            <CardItem>
                                <Item floatingLabel last>
                                    <Icon name="lock" />
                                    <Label>Password</Label>
                                    <Input secureTextEntry={true} onChangeText={(password) => setPassword(password)} />
                                </Item>
                            </CardItem>
                            <CardItem>
                                {
                                    this.state.Loading?
                                    <Button bordered success style={{ width: "100%", marginTop: 5, justifyContent:"center" }}><Spinner/></Button>
                                    :
                                    <Button block success style={{ width: "100%", marginTop: 5 }} onPress={() => this.handleLogon()}><Text>Login</Text></Button>

                                }
                                
                            </CardItem>
                        </Form>
                        <CardItem footer><Button success transparent><Text style={{ color: "black" }}>Don't have account,</Text><Text>signup here</Text></Button></CardItem>
                    </Card>
                </Content>
            </Container>
            </Fragment>
        )
    }
}

export default Login;