import React from "react";
import { createAppContainer, SafeAreaView } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import CustomNavigation from "./CustomNavigation";
import { Icon } from "native-base";

import Feed from "../Screen/Feed";
import Feedform from "../Screen/Feedform";
import Page from "../Screen/Page";
import Profile from "../Screen/Profile";
import Contents from "../Screen/Contents";
import Login from "../Screen/Login";

export default class AppNavigation extends React.Component {
    render() {
        return (
            <NavigationContainer />
        )
    }
}

const NavigationContainer = createAppContainer(createDrawerNavigator({
    Home: {
        screen: Feed,
        navigationOptions:{
            drawerIcon : <Icon name="home" />
        }
    },
    Chat:{
        screen:Feedform,
        navigationOptions:{
            drawerIcon:<Icon type="FontAwesome" name="comments" />
        }
    },
    Profile:{
        screen:Profile,
        navigationOptions:{
            drawerIcon:<Icon name="person" />
        }
    },
    Content:{
        screen:Contents,
        navigationOptions:{
            drawerIcon:<Icon name="list" />
        }
    },
    Page:{
        screen:Page,
        navigationOptions:{
            drawerIcon:<Icon type="FontAwesome" name="file" />
        }
    },
    Logout:{
        screen:Login,
        navigationOptions:{
            drawerIcon:<Icon type="FontAwesome" name="sign-out" />
        }
    }


},
    {
        drawerPosition: "left", 
        contentComponent:CustomNavigation
    }));
