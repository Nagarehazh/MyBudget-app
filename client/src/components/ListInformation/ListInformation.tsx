import React from 'react'
import {
  Container,
  CardsContainer,
  Card,
  CardTitle,
  CardValue,
  CardDate,
  CardType,
  CardCategory,
} from './ListInformationStyles'
import { dataItems } from '../../constants/data'


const ListInformation = () => {
  return (
    <Container>
      <CardsContainer>
        {dataItems.map((item) => (
          <Card key={item.id}>
            <CardTitle>Concept: {item.title}</CardTitle>
            <CardValue>Amount: ${item.value}</CardValue>
            <CardDate>Date: {item.date}</CardDate>
            <CardType type={item.type}>Type: {item.type}</CardType>
            <CardCategory>Category: {item.category}</CardCategory>
          </Card>
        ))}
      </CardsContainer>
    </Container>
  )
}

export default ListInformation