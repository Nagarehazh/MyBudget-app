import { useEffect, useState } from 'react'
import {
  Container,
  CardsContainer,
  IsLoading
} from './ListInformationStyles'
import { IndividualBudget } from '..'
// import { dataItems } from '../../constants/data'
import { useGetUserBudgetsQuery } from '../../redux/serverCall'
import { useSelector } from 'react-redux';
import { setSearch } from '../../redux/searchRedux';
import { setType } from '../../redux/typeRedux';
import { setCategory } from '../../redux/categoryRedux';

interface dataItemstypes {
  id: number;
  concept: string;
  amount: number;
  date: string;
  type: string;
  category?: string;
}

const ListInformation = () => {
  const DataUser = JSON.parse(localStorage.getItem('user') || '{}')

  if (DataUser.userName) {
      var { id } = DataUser;
  }

  
  const { data, isLoading } = useGetUserBudgetsQuery(id)

  const { payload } = useSelector(setSearch)
  const { payload: typePayload } = useSelector(setType)
  const { payload: categoryPayload } = useSelector(setCategory)
  const [filteredData, setFilteredData] = useState<dataItemstypes[]>([])
  
  useEffect(() => {
    const filtered = data && (data as any).filter((item: dataItemstypes) => {
      return item.concept.toLowerCase().includes(payload.search.search.toLowerCase()) && item.type.includes(typePayload.type.typefilter) && item.category?.includes(categoryPayload.category.categoryfilter)
    })
    if (filtered) {
      setFilteredData(filtered)
    }

  }, [payload, typePayload, categoryPayload, data])

  
  if (isLoading) return <IsLoading>Loading...</IsLoading>

  return (
    <Container>
      <CardsContainer>
        {filteredData ? (
          (filteredData as any).slice(0, 10).map((item: dataItemstypes) => (
            <IndividualBudget
              key={item.id}
              item={item}
            />
          ))
        ) : (
          (data as any).slice(0, 10).map((item: dataItemstypes) => (
            <IndividualBudget key={item.id} item={item} />
          ))
        )}
      </CardsContainer>
    </Container>
  )
}

export default ListInformation