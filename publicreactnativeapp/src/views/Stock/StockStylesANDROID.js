import {
    StyleSheet
  } from 'react-native';

export const android_styles = StyleSheet.create({
  container_textbox: {
    flex: 0,
    flexDirection: 'row',
    height: '10%'
  },

  flatlist: {
    height: '100%',
    borderWidth: 3,
    borderColor: '#F92672',
    padding: 5,
  },

  chatbox: {
    borderWidth: 10,
    borderColor: 'yellow',
  },

  base: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  container: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#272822',
    borderWidth: 10,
    borderColor: '#272822',
  },

  connection: {
    height: 50,
    borderWidth: 10,
    borderColor: 'black',
    backgroundColor: 'red',
    width: '100%'
  },

  container_textinput: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'green',
  },

  textinput: {
    width: '80%',
    height: 40,
    backgroundColor: 'white',
  },
  button: {
    width: '20%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
});