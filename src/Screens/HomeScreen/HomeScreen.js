import { useEffect, useState } from 'react'
import { Text, SafeAreaView, TouchableOpacity, View, Alert } from 'react-native'

import Card from '../../Components/Card/Card'

import { getRandomNumbers, shuffleArray } from '../../Utils/CommonUtils'
import Styles from './HomeScreenStyles'

function HomeScreen() {
    const [cards, setCards] = useState([])
    const [steps, setSteps] = useState(0)
    const [firstChoice, setFirstChoice] = useState(null)
    const [secondChoice, setSecondChoice] = useState(null)
    const [validatedCardsCount, setValidatedCardsCount] = useState(0)

    const [disabled, setDisabled] = useState(false)
    const [reset, setReset] = useState(false)

    const generateAndShuffleCards = () => {
        const randomNumbers = getRandomNumbers()
        const pairOfRandomNumbers = [...randomNumbers, ...randomNumbers]
        shuffleArray(pairOfRandomNumbers)
        const randomCards = []
        pairOfRandomNumbers.forEach(randomNumber => {
            const card = { number: randomNumber, id: Math.random(), matched: false }
            randomCards.push(card)
        });
        setCards(randomCards)
        setSteps(0)
        setFirstChoice(null)
        setSecondChoice(null)
        setDisabled(false)
        setValidatedCardsCount(0)
    }

    useEffect(() => {
        generateAndShuffleCards()
    }, [])

    useEffect(() => {
        if (reset) {
            setReset(false)
            setTimeout(() => {
                generateAndShuffleCards()
            }, 500);
        }
    }, [reset])

    useEffect(() => {
        if (firstChoice && secondChoice) {
            setDisabled(true)
            if (firstChoice.number === secondChoice.number) {
                setValidatedCardsCount(prevvalidatedCardsCount => prevvalidatedCardsCount + 2)
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.number === firstChoice.number) {
                            return { ...card, matched: true }
                        }
                        return card
                    })
                })
                resetValues()
            } else {
                setTimeout(() => resetValues(), 1000)
            }
        }

    }, [firstChoice, secondChoice])

    useEffect(() => {
        console.log(validatedCardsCount)
        if (validatedCardsCount === cards.length && cards.length) {
            console.log(cards, validatedCardsCount)
            Alert.alert(
                "Congratulations!",
                `You win this game by ${steps} steps!`,
                [
                    { text: "Try another round", onPress: handleRestart }
                ]
            );
        }
    }, [validatedCardsCount])

    const handleSelect = card => {
        setSteps(prevSteps => prevSteps + 1)
        if (firstChoice) {
            setSecondChoice(card)
        } else {
            setFirstChoice(card)
        }
    }

    const resetValues = () => {
        setFirstChoice(null)
        setSecondChoice(null)
        setDisabled(false)
    }

    const handleRestart = () => {
        setCards(cards => {
            return (
                cards.map(card => ({ ...card, matched: false }))
            )
        })
        setReset(true)
    }

    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.topContainer} >
                <TouchableOpacity onPress={handleRestart}>
                    <Text style={Styles.restartText}>Restart</Text>
                </TouchableOpacity>
                <Text style={Styles.stepsText}>STEPS : {steps}</Text>
            </View>
            <View style={Styles.cardsContainer}>
                {cards.map(card =>
                    <Card
                        key={card.id}
                        card={card}
                        flipped={card === firstChoice || card === secondChoice || card.matched}
                        handleSelect={handleSelect}
                        disabled={disabled}
                    />
                )}
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen