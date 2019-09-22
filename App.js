/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Form,
  Item,
  Label,
  Input,
  Button,
  Icon
} from "native-base";

import {
SafeAreaView
} from "react-native"
//import Feed from './Screen/Feed';
import AppNavigation from './AppNavigation';


const App = () => {

  return <AppNavigation />;

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  
  // const [loginFormSubmit, setLoginFormSubmit] = useState('');

  // const handleLoginForm = e =>{
  //   alert(`Email : ${email}, Password : ${password}`)
  // }

  // return (
  //     <Fragment>
  //       {/* <Container>
  //       <Content>
  //         <Card style={{borderColor:"green", borderWidth:5}}>
  //           <CardItem header style={{backgroundColor:"green"}}><Text style={{color:"white"}}>Login</Text></CardItem>
  //               <Form style={{padding:5}}>
  //                 <CardItem>
  //                 <Item floatingLabel last>
  //                   <Icon name="person"/>
  //                   <Label>Email</Label>
  //                   <Input onChangeText={(email)=>setEmail(email)}/>
  //                 </Item>
  //                 </CardItem>
  //                 <CardItem>
  //                 <Item floatingLabel last>
  //                   <Icon name="lock"/>
  //                   <Label>Password</Label>
  //                   <Input secureTextEntry={true} onChangeText={(password)=>setPassword(password)}/>
  //                 </Item>
  //                 </CardItem>
  //                 <CardItem>
  //                   <Button block success style={{width:"100%", marginTop:5}}  onPress={(e)=>handleLoginForm(e)}><Text>Login</Text></Button>
  //                 </CardItem>
  //               </Form>

  //           <CardItem footer><Button success transparent><Text style={{color:"black"}}>Don't have account,</Text><Text>signup here</Text></Button></CardItem>
  //         </Card>
  //       </Content>
  //     </Container> */}
  //     <Feed />
  //     </Fragment>
      
    
  // );
};


export default App;
