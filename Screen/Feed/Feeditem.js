import React from "react";
import {Image} from "react-native";
import {Card, CardItem, Text, Left, Icon, Thumbnail, Button, Body, Right} from "native-base";

export default props =>{
    return(
        <Card style={{flex:0}}>
                    <CardItem bordered>
                        <Left>
                            <Thumbnail source={props.thumb} />
                            <Body>
                            <Text>Krishna Kumar</Text>
                            <Text note> 2 days ago</Text>
                            </Body>
                        </Left>

                        <Right>
                            <Button transparent ><Icon name="more" /></Button>
                        </Right>
                    </CardItem>
                    <CardItem cardBody bordered>
                        <Body>
                            {
                                props.image && <Image source={props.image} style={{height:200, width:"100%", flex:1, marginBottom:10}} />
                            }
                        
                        <Text style={{padding:10}}>{props.text}</Text>
                        </Body>
                    </CardItem>
                    <CardItem footer>
                        <Left>
                        <Text>1 Up</Text>
                        <Text>1 Down</Text>
                        </Left>
                        <Body>
                        <Text>2 comments</Text>
                        </Body>
                    </CardItem>
                </Card>  
    )
}