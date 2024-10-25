import { View } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/globalStyles';
import WebView from 'react-native-webview';

export const VideoView = () => {
    return (
        <View>
            <WebView
                source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4?autoplay=1&mute=1' }}
                style={globalStyles.videoPlayer}
                allowsFullscreenVideo
                javaScriptEnabled={true}
                domStorageEnabled={true}
            />
        </View>
    )
};
