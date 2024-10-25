import { View, FlatList, Dimensions } from 'react-native';
import React, { FC, useState } from 'react';
import { globalStyles } from '../styles/globalStyles';
import dummyData from '../data/dummyData.json';
import { FreshComponent } from '../components/FreshComponent';

const FreshScreen: FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    // const onViewableItemsChanged = useRef(({ viewableItems }: { viewableItems: any }) => {
    //     const currentIndex = viewableItems[0].index;
    //     if (currentIndex !== undefined) {
    //         setActiveIndex(currentIndex);
    //     }
    // });
    const calculateIndex = (offsetX) => {
        const itemWidth = Dimensions.get('window').width + 8;
        return Math.floor(offsetX / itemWidth);
    };
    return (
        <View style={globalStyles.container}>
            <FlatList
                data={dummyData.data}
                renderItem={({ item, index }) => {
                    return (
                        <View key={index} >
                            <FreshComponent
                                data={item}
                                selfIndex={index}
                                parentActiveIndex={activeIndex}
                            />
                        </View>
                    );
                }}
                onScroll={(event) => {
                    const newIndex = calculateIndex(event.nativeEvent.contentOffset.y);
                    setActiveIndex(newIndex)
                }}
            />
        </View>
    );
};

export default FreshScreen;
