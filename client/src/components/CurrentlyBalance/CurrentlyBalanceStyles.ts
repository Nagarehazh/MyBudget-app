import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    padding: 20px;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
        
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 20px;
`;

const CardTitle = styled.span`
    font-size: 3rem;
    font-weight: 500;
    color: white;
    margin-bottom: 30px;
`;

const CardValue = styled.span`
    font-size: 3rem;
    font-weight: 500;
    color: white;
    margin-bottom: 30px;
`;

const CardButton = styled.button`    
    font-size: 20px;
    font-weight: 500;
    background-color: #008080;
    color: white;
    border: 1px solid #008080;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    &:hover {
        background-color: #019E9E;
        letter-spacing: 1px;       
    }
`;

const ContainerModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 4.2rem;
        font-weight: 800;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.8rem;
        margin-bottom: 20px;
    }

`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
`;

const Input = styled.input`
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.6rem;
`;

const ButtonModal = styled.button`
margin-top: 2rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    background-color: #e6e6e6;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #4caf50;
        color: white;
        transform: scale(1.1);
    }
`;

const SelectType = styled.select`
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.6rem;
`;

const OptionType = styled.option`
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.6rem;
`;

const SelectCategory = styled.select`
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.6rem;
`;

const OptionCategory = styled.option`
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.6rem;
`;

export {
    Container,
    CardsContainer,
    Card,
    CardTitle,
    CardValue,
    CardButton,
    ContainerModal,
    Form,
    Input,
    ButtonModal,
    SelectType,
    OptionType,
    SelectCategory,
    OptionCategory

};



