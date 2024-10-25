import { View, Text, FlatList, Dimensions } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { freshComponentType } from '../types';
import { Avatar } from 'react-native-elements';
import { globalStyles } from '../styles/globalStyles';
import { ImageView } from './ImageView';
import WebView from 'react-native-webview';
import { colors } from '../styles/colors';

type itemType = {
  data: freshComponentType,
  selfIndex: number;
  parentActiveIndex: number;
}

const { width } = Dimensions.get('window');

export const FreshComponent = ({ data, selfIndex, parentActiveIndex }: itemType) => {
  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 };

  const currentIndex = useRef(0);
  const webViewRefs = useRef({});
  const playVideo = index => {
    if (webViewRefs.current[index]) {
      webViewRefs.current[index].injectJavaScript(`
        var video = document.getElementsByTagName('video')[0];
        if (video) video.play();
        true;
      `);
    }
  };

  const pauseVideo = (index) => {
    if (webViewRefs.current[index]) {
      webViewRefs.current[index].injectJavaScript(`
        var video = document.getElementsByTagName('video')[0];
        if (video) video.pause();
        true;
      `);
    }
  }

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const index = viewableItems[0].index;
      if (selfIndex === parentActiveIndex) {
        if (viewableItems[0].item?.type === 'video') {
          playVideo(index);
        }
        for (let i = 0; i < data.data.length; i++) {
          if (i !== index && data.data[i].type === 'video') {
            pauseVideo(i);
          }
        }
      } else {
        for (let i = 0; i < data.data.length; i++) {
          if (data.data[i].type === 'video') {
            pauseVideo(i);
          }
        }
      }
    }
  });

  useEffect(() => {
    if (selfIndex === parentActiveIndex) {
      const visibleItem = currentIndex.current;
      if (data.data[visibleItem]?.type === 'video') {
        playVideo(visibleItem);
      }
    } else {
      for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].type === 'video') {
          pauseVideo(i);
        }
      }
    }
  }, [parentActiveIndex]);

  return (
    <View style={globalStyles.freshContainer}>
      <View style={globalStyles.row}>
        <Avatar size={'medium'}
          rounded
          title={data.initial}
          containerStyle={globalStyles.avatarContainer}
        />
        <View>
          <Text style={globalStyles.avatarName}>{data.name}</Text>
          <Text style={globalStyles.date}>{data.date}</Text>
        </View>
      </View>
      <FlatList
        data={data.data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          return (
            <View key={index} style={{ width, marginHorizontal: 4 }}>
              {item.type === 'image' ? (
                <ImageView source={item} />
              ) : (
                <>
                  <WebView
                    ref={(ref) => {
                      webViewRefs.current[index] = ref;
                    }}
                    source={{ uri: item.uri }}
                    style={globalStyles.videoBox}
                    allowsFullscreenVideo
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                  />
                </>
              )}
              <View style={globalStyles.row}>
                {data.tag.map((el, idx) => (
                  <View style={[globalStyles.tag, { backgroundColor: el == 'sawer' ? colors.gold : colors.white }]} key={idx}>
                    <Text style={globalStyles.tagText}>#{el}</Text>
                  </View>
                ))}
              </View>
            </View>
          );
        }}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
};
