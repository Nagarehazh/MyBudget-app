import React from 'react'
import {
    Container,
    CardsContainer,
    Card,
    CardTitle,
    CardValue,
    CardButton
} from './CurrentlyBalanceStyles'

const CurrentlyBalance = () => {
    return (
        <Container>
            <CardsContainer>
                <Card>
                    <CardTitle>Current Balance</CardTitle>
                    <CardValue>$0.00</CardValue>
                    <CardButton>New operation</CardButton>
                </Card>
            </CardsContainer>
        </Container>
    )
}

export default CurrentlyBalance