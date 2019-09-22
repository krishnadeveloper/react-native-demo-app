import React, {Component} from "react";
import { Container, Header, Left, Icon, Title, Body } from "native-base";

class Page extends Component {
    render(){
        return(
            <Container>
                <Header>
                    <Left>
                    <Icon name="menu" onPress={()=>this.props.navigation.toggleDrawer()} />
                    </Left>
                    <Body>
                        <Title>Page</Title>
                    </Body>
                </Header>
            </Container>
        )
    }
}

export default Page;