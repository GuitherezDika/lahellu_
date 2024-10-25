import React, { useRef, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { useFetchData } from '../hooks/useFetchData';
import { CardEpisode } from '../components/CardEpisode';

const HomeScreen: React.FC = () => {
    const { data, loading, error, number, setNumber, fetchData } = useFetchData();
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);
    const viewabilityConfig = {viewAreaCoveragePercentThreshold: 50};

    const onViewableItemsChanged = useRef(({ viewableItems }: {viewableItems: any}) => {
        if(viewableItems.length > 0) {
            const currentIndex = viewableItems[0].index;
            if(currentIndex !== playingIndex){
                setPlayingIndex(currentIndex);
            }
        }
    });

    if (loading) return <ActivityIndicator size="large" />;
    if (error) return <Text>Error: {error}</Text>;

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={data}
                renderItem={({item, index}) => {
                    return (
                        <View key={index}>
                            <CardEpisode data={item} isPlaying={index === playingIndex} />
                        </View>
                )}}
                keyExtractor={(item) => item.id.toString()}
                onViewableItemsChanged={onViewableItemsChanged.current}
                viewabilityConfig={viewabilityConfig}
                onEndReached={() => {
                    const newPage = number + 1;
                    setNumber(newPage);
                    fetchData({page: newPage, limit: 10});
                }}
                onScroll={() => {}}
            />
        </View>
    );
};

export default HomeScreen;