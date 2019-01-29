import React from 'react';
import {
    Platform,
    Text,
    View,
    StyleSheet,
    StatusBar
} from 'react-native';
import { systemWeights } from 'react-native-typography'
import SLIicon from 'react-native-vector-icons/SimpleLineIcons';
import MCIicon from 'react-native-vector-icons/MaterialCommunityIcons';

class Header extends React.Component {

    constructor() {
        super()
        this.state = {
            watch: false
        };
    }


    clickWatch(){
        this.setState({
            watch: !this.state.watch
        })
    }

    renderWatch(){
        if (this.state.watch === true){
            return(
                <MCIicon name="eye" style={{ fontSize: 35, color: '#21ce99', marginRight: 25 }} onPress={() => this.clickWatch()}></MCIicon>
            )
        }else {
            return(
                <SLIicon name="eye" style={{ fontSize: 35, color: 'white', marginRight: 25}} onPress={() => this.clickWatch()}></SLIicon>
            )
        }
    }

    render() {
        // const { viewStyle, textStyle } = styles;
        if (Platform.OS === 'ios') {
            styles = ios_styles
        } else if (Platform.OS === 'android') {
            styles = android_styles
        }

        return (
            <View style={styles.viewStyle}>
                <StatusBar
                    backgroundColor="#0e0d0d"
                    barStyle="light-content"
                />
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#0e0d0d' }}>
                    <View style={{ width: "100%", flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.textStylePrice}>${this.props.headerPrice}</Text>
                        <Text style={styles.textStyleTicker}>{this.props.headerTicker}</Text>
                    </View>
                    <View style={{ width: "100%", flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', position: 'absolute' }}>
                        {this.renderWatch()}
                    </View>
                </View>
            </View>
        )
    }

}

// iOS Styles
const ios_styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#0e0d0d',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 35,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStylePrice: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: systemWeights.bold.fontWeight
    },
    textStyleTicker: {
        fontSize: 15,
        color: '#FFFFFF',
        fontWeight: systemWeights.regular.fontWeight
    }
})

// Android Styles
const android_styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#0e0d0d',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        paddingTop: 20,
        paddingBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStylePrice: {
        fontSize: 25,
        color: '#FFFFFF',
        fontWeight: systemWeights.bold.fontWeight
    },
    textStyleTicker: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: systemWeights.regular.fontWeight
    }
})


export default Header;