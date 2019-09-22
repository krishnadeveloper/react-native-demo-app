import React, {Component} from "react";
import { Container, Content, Header, Left, Body, Icon, Title } from "native-base";

class Profile extends Component {
    render(){
        return(
            <Container>
                <Content>
                    <Header>
                        <Body>
                            <Left>
                                <Icon name="menu" onPress={()=>this.props.navigation.toggleDrawer()} />
                            </Left>
                            <Title>Profile</Title>
                        </Body>
                    </Header>
                </Content>
            </Container>
        )
    }
}

export default Profile;