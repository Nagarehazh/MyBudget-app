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
    color: #008080;
    background-color: #f5f5f5;
    border: 1px solid #008080;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    &:hover {
        background-color: #008080;
        color: white;
        transition: 0.5s;
        tranform: scale(1.1);
    }
`;

export {
    Container,
    CardsContainer,
    Card,
    CardTitle,
    CardValue,
    CardButton
};



