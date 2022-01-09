import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const WIDTH_CONSTANT = 3.3
const HEIGHT_CONSTANT = 4.8

const styles = StyleSheet.create({
    cardContainer: {
        width: width / WIDTH_CONSTANT,
        height: height / HEIGHT_CONSTANT,
        backgroundColor: 'white',
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden'
    },
    cardNumberContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        backfaceVisibility: 'hidden'
    },
    cardNumberText: {
        color: 'black',
        fontSize: 22
    },
    cardGuessTextWrapper: {
        width: '95%',
        height: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#80bfff',
        borderRadius: 10,
        position: 'absolute',
        backfaceVisibility: 'hidden'
    },
    cardGuessText: {
        fontSize: 30,
        color: '#ff3333'
    }
})

export default styles