import React from 'react'
import {
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
} from './CurrentlyBalanceStyles'
import { Modal } from '..'
import { useAddBudgetMutation } from '../../redux/serverCall'

const CurrentlyBalance = () => {
    const [addBudget] = useAddBudgetMutation()

    const [description, setDescription] = React.useState('')
    const [amount, setAmount] = React.useState('')
    const [date, setDate] = React.useState('')
    const [type, setType] = React.useState('')
    const [category, setCategory] = React.useState('')
    const [modal, setModal] = React.useState(false);

    const onSubmitForm = (e: any) => {
        e.preventDefault();

        addBudget({
            concept: description,
            amount: Number(amount),
            date: date,
            type: type,
            category: category
        })
        window.location.reload()
    }

    const handleAddOperation = () => {
        setModal(!modal);
    }


    return (
        <Container>
            <CardsContainer>
                <Card>
                    <CardTitle>Current Balance</CardTitle>
                    <CardValue>$0.00</CardValue>
                    <CardButton onClick={handleAddOperation}>Add Transaction</CardButton>
                </Card>
            </CardsContainer>
            <Modal
                modal={modal}
                setModal={setModal}

            >
                <ContainerModal>
                    <Form onSubmit={onSubmitForm}>
                        <Input
                            type="text"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                        <Input
                            type="number"
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                        <Input
                            type="date"
                            placeholder="Date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                        <SelectType
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            required
                        >
                            <OptionType value="">Select type</OptionType>
                            <OptionType value="income">Income</OptionType>
                            <OptionType value="expense">Expense</OptionType>
                        </SelectType>
                        <SelectCategory
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <OptionCategory value="">Select category</OptionCategory>
                            <OptionCategory value="food">Food</OptionCategory>
                            <OptionCategory value="clothes">Clothes</OptionCategory>
                            <OptionCategory value="entertainment">Entertainment</OptionCategory>
                            <OptionCategory value="transportation">Transportation</OptionCategory>
                            <OptionCategory value="health">Health</OptionCategory>
                            <OptionCategory value="other">Other</OptionCategory>
                        </SelectCategory>
                        <ButtonModal>Create</ButtonModal>
                    </Form>
                </ContainerModal>
            </Modal>
        </Container>
    )
}

export default CurrentlyBalance