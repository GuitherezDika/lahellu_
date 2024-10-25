import { Dimensions, StyleSheet } from 'react-native';
import { colors } from './colors';

const { height, width } = Dimensions.get('screen');

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: colors.white,
    },
    episode: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    videoView: {
        height: height / 3,
        width: '100%',
        backgroundColor: colors.gray,
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.black,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    videoBox: {
        width: '100%',
        height: '100%',
    },
    freshContainer: {
        minHeight: height / 3.3,
        width: '100%',
        marginBottom: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8
    },
    avatarName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.black
    },
    date: {
        fontSize: 14,
        color: colors.gray
    },
    avatarContainer: {
        backgroundColor: colors.gray,
        marginRight: 8,
    },
    videoPlayer: {
        width: width,
        minHeight: height / 3.3,
    },
    imgView: {
        width: width,
        minHeight: height / 3.3,
    },
    tag: {
        flexDirection: 'row', 
        height: 20,
        minWidth: 20, 
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: colors.gray,
        marginRight: 8,
        paddingHorizontal: 6,
        marginTop: 6
    },
    tagText: {
        fontSize: 12,
        color: colors.black
    }
});
