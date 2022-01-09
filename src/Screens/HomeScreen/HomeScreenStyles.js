import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#39ac73',
        width: '100%',
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    restartText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 20,
        marginTop: 8,
    },
    stepsText: {
        color: 'white',
        margin: 5,
        fontSize: 22,
        fontWeight: '500',
        marginRight: 20,
    },
    cardsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default styles