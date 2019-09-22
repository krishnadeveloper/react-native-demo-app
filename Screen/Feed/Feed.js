import React from "react";
import { Container, Content, Header, Icon, Body, Right, Title } from "native-base";
import Feeditem from "./Feeditem";

const Feed = props =>{
    
    return(
        
        <Container>
            <Content>
                <Header>
                    <Icon name="menu" onPress={()=>props.navigation.toggleDrawer()} />
                    <Body style={{justifyContent:"center"}}>
                        <Title>Welcome Krishna!</Title>
                    </Body>
                    <Right />
                </Header>
                <Feeditem 
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    thumb={require('../../images/avatar1.jpg')}
                    image={require('../../images/feed1.png')}
                />
                <Feeditem 
                    text="when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    thumb={require('../../images/avatar2.jpg')}
                    image={require('../../images/feed2.jpg')}
                />
                <Feeditem 
                    text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    thumb={require('../../images/avatar2.jpg')}
                    image={null}
                />
                <Feeditem 
                    text={null}
                    thumb={require('../../images/avatar2.jpg')}
                    image={require('../../images/avatar2.jpg')}
                />
            </Content>
        </Container>
    )
}
export default Feed;