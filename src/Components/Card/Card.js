import { useRef, useEffect } from 'react'
import { Pressable, Text, Animated } from 'react-native'

import Styles from './CardStyles'

function Card({ card, flipped, disabled, handleSelect }) {
    useEffect(() => {
        if (!flipped) {
            flipToBack()
        }
    }, [flipped])

    const flipAnimation = useRef(new Animated.Value(0)).current

    let flipRotation = 0

    flipAnimation.addListener(({ value }) => flipRotation = value)

    const flipToFrontStyle = {
        transform: [{
            rotateY: flipAnimation.interpolate({
                inputRange: [0, 180],
                outputRange: ["0deg", "180deg"]
            })
        }]
    }
    const flipToBackStyle = {
        transform: [{
            rotateY: flipAnimation.interpolate({
                inputRange: [0, 180],
                outputRange: ["180deg", "360deg"]
            })
        }]
    }

    const flipToFront = () => {
        Animated.timing(flipAnimation, {
            toValue: 180,
            duration: 300,
            useNativeDriver: true,
        }).start()
    }
    const flipToBack = () => {
        Animated.timing(flipAnimation, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start()
    }

    const handleClick = () => {
        if (!disabled) {
            handleSelect(card)
            if (flipRotation) {
                flipToBack()
            } else {
                flipToFront()
            }
        }
    }

    return (
        <Pressable style={Styles.cardContainer} onPress={handleClick}>
            <Animated.View
                style={[Styles.cardNumberContainer, { ...flipToBackStyle }]}
            >
                <Text style={Styles.cardNumberText}>{card.number}</Text>
            </Animated.View>
            <Animated.View
                style={[Styles.cardGuessTextWrapper, { ...flipToFrontStyle }]}
            >
                <Text style={Styles.cardGuessText}>?</Text>
            </Animated.View>

        </Pressable>
    )
}

export default Card