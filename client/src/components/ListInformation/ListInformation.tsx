import { useEffect, useState } from 'react'
import {
  Container,
  CardsContainer,
  IsLoading
} from './ListInformationStyles'
import { IndividualBudget } from '..'
import { dataItems } from '../../constants/data'
import { useGetBudgetsQuery } from '../../redux/serverCall'

interface dataItemstypes {
  id: number;
  concept: string;
  amount: number;
  date: string;
  type: string;
  category?: string;
}



const ListInformation = () => {
  const { data, isLoading } = useGetBudgetsQuery()

  if (isLoading) return <IsLoading>Loading...</IsLoading>

  return (
    <Container>
      <CardsContainer>
        {(data as any).map((item: dataItemstypes) => (
          <IndividualBudget key={item.id} item={item} />
        ))}
      </CardsContainer>
    </Container>
  )
}

export default ListInformation