import React from "react";
import { Card, CardItem, Left, Icon, Text, Body, Textarea, Input, Button, Right, Container, Content, Header } from "native-base";

export default props => {
    return (
        <Container>
            <Header>
                <Left>
                    <Icon name="menu" onPress={()=>props.navigation.toggleDrawer()} />
                </Left>
            </Header>
        <Content>
        <Card style={{flex:0, marginBottom:50}}>
            <CardItem>
                <Icon type="FontAwesome" name="user-circle" />
                <Body>
                    <Input multiline={true} placeholder="Share something...." style={{ borderColor: "green", width:"100%", borderWidth: 1, borderRadius: 5, padding: 25 }} />
                </Body>
            </CardItem>
            <CardItem footer  style={{flex:1, justifyContent:"flex-end"}}>
                <Button success style={{marginRight:20}}><Icon type="FontAwesome" name="upload" /></Button>
                <Button success><Icon name="send" /></Button>
            </CardItem>
        </Card>
        </Content>
        </Container>
    )
}