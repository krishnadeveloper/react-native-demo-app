import React, {Component} from "react";
import { Container, Header, Left, Icon, Body, Title } from "native-base";

class Contents extends Component {
    render(){
        return(
            <Container>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={()=>this.props.navigation.toggleDrawer()} />
                    </Left>
                    <Body>
                        <Title>Content</Title>
                    </Body>
                </Header>
            </Container>
        )
    }
}

export default Contents;