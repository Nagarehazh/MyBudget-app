import styled from "styled-components";

interface ItemProps {
    type: string;
}; 

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    width: 100%;
    height: 100%;
    padding: 20px;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    border: 1px solid #008080;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    animation: animateCard 1s;
    @keyframes animateCard {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const CardTitle = styled.span`
    font-size: 2rem;
    font-weight: bold;
    color: black;
    margin-bottom: 30px;
`;

const CardValue = styled.span`
    font-size: 2rem;
    font-weight: 500;
    color: black;
    margin-bottom: 30px;
`;

const CardDate = styled.span`
    font-size: 2rem;
    font-weight: 500;
    color: black;
    margin-bottom: 30px;
`;

const CardType = styled.span<ItemProps>`
    font-size: 2rem;
    font-weight: 500;
    color: ${(props) => props.type === "expense" ? "red" : "green"};
    margin-bottom: 30px;
    border: 1px solid ${(props) => props.type === "expense" ? "red" : "green"};
    padding: 5px;
    border-radius: 10px;
`;

const CardCategory = styled.span`
    font-size: 2rem;
    font-weight: 500;
    color: black;
    margin-bottom: 30px;
`;

export {
    Container,
    CardsContainer,
    Card,
    CardTitle,
    CardValue,
    CardDate,
    CardType,
    CardCategory,
}