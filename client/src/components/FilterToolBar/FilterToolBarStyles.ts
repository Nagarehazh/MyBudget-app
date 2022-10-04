import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-bottom: 1rem;
    padding: 0 5rem;
`;

const WrapperFilter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
`;


const FilterContainer = styled.div`

    display: flex;
    align-items: center;
`;

const Filter = styled.div`
    margin-right: 1rem;
    display: flex;
    align-items: center;
`;

const Select = styled.select`
    padding: 0.5rem;
    margin-right: 1rem;
`;

const Option = styled.option``;

const SearchContainer = styled.form`
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Search = styled.input`
    padding: 0.5rem;
    margin-right: 1rem;
    border: none;
    border-bottom: 1px solid #000;
    background-color: transparent;
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: #008080;
        color: white;
        transition: all 0.3s ease;
        transform: scale(1.1);
        border-radius: 5px;
    }

`;



export {
    Container,
    FilterContainer,
    Filter,
    Select,
    Option,
    SearchContainer,
    Search,
    Button,
    WrapperFilter
}

