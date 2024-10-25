import React, { FC } from 'react';
import { View } from 'react-native';
import { trailerResponse, videoItemProps } from '../types';
import { globalStyles } from '../styles/globalStyles';
import { Gap } from './Gap';
import { WebView } from 'react-native-webview';

type dataCard = {
    data: trailerResponse;
    isPlaying: boolean;
}

const VideoItem: FC<videoItemProps> = ({ trailerId, isPlaying }) => {
  const videoUrl = `https://www.youtube.com/embed/${trailerId}?autoplay=${isPlaying ? 1 : 0}&mute=${isPlaying ? 1 : 0}`;
  return (
    <View>
      <View style={globalStyles.videoView}>
        <WebView
          source={{ uri: videoUrl }}
          style={globalStyles.videoBox}
          allowsFullscreenVideo
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </View>
      <Gap />
    </View>
  );
};


export const CardEpisode = ({data, isPlaying}: dataCard) => {
    const {key, id} = data;
    return (
        <View>
            {id && (
                <VideoItem
                    trailerId={key}
                    isPlaying={isPlaying}
                />
            )}
        </View>
    );
};
