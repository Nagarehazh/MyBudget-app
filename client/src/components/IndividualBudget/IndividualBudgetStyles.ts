import styled from "styled-components";

interface ItemProps {
    type: string;
};


const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fcf1ed;
    position: relative;
    &:hover ${Info} {
        opacity: 1;
    }

`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
        cursor: pointer;
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

const ButtonEdit = styled.button`
    font-size: 2rem;
    font-weight: 500;
    color: white;
    margin-right: 30px;
    border: 1px solid black;
    padding: 5px;
    border-radius: 10px;
    background-color: green;
    transition: all 0.5s ease;
    &:hover {
        font-size: 2.5rem;
        transition: all 0.5s ease;
        cursor: pointer;
    }
`;

const DeleteButton = styled.button`
    font-size: 2rem;
    font-weight: 500;
    color: white;
    border: 1px solid black;
    padding: 5px;
    border-radius: 10px;
    background-color: red;
    transition: all 0.5s ease;
    &:hover {
        transition: all 0.5s ease;
        font-size: 2.5rem;
        cursor: pointer;
    }
    `;

const DeleteConfirmation = styled.button`
    font-size: 2rem;
    font-weight: 500;
    color: white;
    border: 1px solid black;
    padding: 5px;
    border-radius: 10px;
    background-color: red;
    transition: all 0.5s ease;
    &:hover {
        transition: all 0.5s ease;
        font-size: 2.5rem;
        cursor: pointer;
    }
    `;

const DeleteCancel = styled.button`
    font-size: 2rem;
    font-weight: 500;
    color: white;
    border: 1px solid black;
    padding: 5px;
    border-radius: 10px;
    margin-top: 20px;

    background-color: green;
    transition: all 0.5s ease;
    &:hover {
        transition: all 0.5s ease;
        font-size: 2.5rem;
        cursor: pointer;
    }
    `;

const InfoDelete = styled.div`
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

    h3 {
        font-size: 2rem;
        font-weight: bold;
        color: red;
        background-color: white;
        margin-bottom: 30px;
        text-align: center;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    }
    `;

const ContainerModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;

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
    Icon,
    Info,
    Card,
    CardTitle,
    CardValue,
    CardDate,
    CardType,
    CardCategory,
    ButtonEdit,
    DeleteButton,
    ContainerModal,
    Form,
    Input,
    ButtonModal,
    SelectCategory,
    OptionCategory,
    DeleteConfirmation,
    InfoDelete,
    DeleteCancel

};
