import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import colors from '../config/colors';
import Color from 'color';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row'
  },
  text: {
    color: 'white'
  },
  disabled: {
    backgroundColor: colors.btDisabled
  },
  disabledText: {
    color: colors.btDisabledText
  }
});

export default class Button extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const {type, onPress, onLongPress, text, bgColor, disabled, size} = this.props;

    /* 自定义背景色，或读取type */
    let backgroundColor,
        borderStyle,
        borderTextStyle;
    if(bgColor){
      backgroundColor = bgColor;
    }else{
      switch (type) {
        case 'red':
          backgroundColor = colors.btRed;
          break;
        case 'blue':
          backgroundColor = colors.btBlue;
          break;
        default:
          backgroundColor = 'white';
          borderStyle = {
            borderWidth: 0.5,
            borderColor: colors.btWhiteLine
          };
          borderTextStyle = {
            color: 'black',
          }
      }
    }

    let underlayColor = Color(backgroundColor).darken(0.1).hexString();

    /* 读取size */
    switch(size){
      case 'large':
        sizeStyle = {
          borderRadius: 5,
            padding: 19,
            marginLeft: 15,
            marginRight: 15,
        },
        sizeTextStyle = {
          fontSize: 18
        }
        break;
      default:
        sizeStyle = {
          borderRadius: 2,
          height: 30,
          flex: -1,
          minWidth: 30,
          paddingLeft: 16,
          paddingRight: 16,
          marginLeft: 10,
          marginRight: 10,
          marginTop: 24,
          marginBottom: 24
        },
        sizeTextStyle = {
          fontSize: 14
        }
    }

    return(
      <TouchableHighlight
        style={[
          styles.button,
          {backgroundColor: backgroundColor},
          borderStyle,
          sizeStyle,
          disabled && styles.disabled
        ]}
        activeOpacity={1}
        disabled={disabled}
        onLongPress={onLongPress}
        onPress={onPress}
        underlayColor={underlayColor}
      >
          <Text style={[
              styles.text,
              borderTextStyle,
              sizeTextStyle,
              disabled && styles.disabledText
            ]}
          >
            {text}
          </Text>
      </TouchableHighlight>
    )
  }
}
