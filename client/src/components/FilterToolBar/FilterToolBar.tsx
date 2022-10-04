import { SearchOutlined } from '@material-ui/icons'
import {useState, useEffect} from 'react'
import {
    Container,
    FilterContainer,
    Filter,
    Select,
    Option,
    SearchContainer,
    Search,
    Button,
    WrapperFilter
} from './FilterToolBarStyles'
import {useDispatch} from 'react-redux'
import { setSearch } from '../../redux/searchRedux'
import { setType } from '../../redux/typeRedux'
import { setCategory } from '../../redux/categoryRedux'


const FilterToolBar = () => {
    const dispatch = useDispatch()
    const [SearchValue, setSearchValue] = useState('')
    const [typeFilter, setTypeFilter] = useState('')
    const [categoryFilter, setCategoryFilter] = useState('')
    

    const onSubmitForm = (e: any) => {
        e.preventDefault()
        dispatch(setSearch(SearchValue))

    }

    
    useEffect(() => {
        dispatch(setType(typeFilter))
        
    }, [typeFilter, dispatch])

    useEffect(() => {
        dispatch(setCategory(categoryFilter))
    }, [categoryFilter, dispatch])

    
    return (
        <Container>
           <SearchContainer onSubmit={onSubmitForm}>
                    <Search 
                        placeholder="Search" 
                        value={SearchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <Button><SearchOutlined/></Button>
                </SearchContainer>
                <WrapperFilter>
                <FilterContainer>
                <Filter>
                    <Select name='typefilter' onChange={(e) => setTypeFilter(e.target.value)} >
                        <Option value="">Type</Option>
                        <Option value="income">Income</Option>
                        <Option value="expense">Expense</Option>
                    </Select>
                </Filter>
                <Filter>
                    <Select name='categoryfilter' onChange={(e) => setCategoryFilter(e.target.value)}>
                        <Option value="">Category</Option>
                        <Option value="food">Food</Option>
                        <Option value="clothes">Clothes</Option>
                        <Option value="entertainment">Entertainment</Option>
                        <Option value="transportation">Transportation</Option>
                        <Option value="health">Health</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            </WrapperFilter>
        </Container>
    )
}

export default FilterToolBar