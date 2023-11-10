// import React from 'react';
// import { WebView } from 'react-native-webview';

// type Props = {
//   url: string;
// };

// const WebviewCoba: React.FC<Props> = ({ url }) => {
//   return <WebView source={{ uri: url }}/>;
// };

// export default WebviewCoba;

import React, {Component} from 'react';
import { Text } from 'react-native';
import {WebView} from 'react-native-webview';

class WebviewCoba extends Component {
  render() {
    return (
        // <Text style={{ backgroundColor:'#000' }}>Halooo</Text>        
    //   <WebView
    //     originWhitelist={['*']}
    //     source={{html: '<h1>This is a static HTML source!</h1>'}}
    //   />
    <WebView source={{ uri: 'https://psp.teknologikartu.com' }} />
    );
  }
}

export default WebviewCoba;
