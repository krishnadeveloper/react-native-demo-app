import React from "react";
import {DrawerNavigatorItems} from "react-navigation-drawer";
import { Container, Header, Body, Text, Content } from "native-base";

class CustomNavigation extends React.Component{
    render(){
        return(
            <Container>
                <Header style={{height:200}}>
                    <Body>
                        <Text>Logo</Text>
                    </Body>
                </Header>
                <Content>
                    <DrawerNavigatorItems {...this.props} />
                </Content>  
            </Container>
        )
    }
}

export default CustomNavigation;