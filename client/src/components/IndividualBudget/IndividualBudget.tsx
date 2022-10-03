import React from 'react'
import { Link } from 'react-router-dom';
import {
    Container,
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
} from './IndividualBudgetStyles'
import { Modal } from '..'
import {useDeleteBudgetMutation, useUpdateBudgetMutation} from '../../redux/serverCall'



interface itemProps {
    item: {
        id: number;
        concept: string;
        amount: number;
        date: string;
        type: string;
        category?: string;
    }
}

const IndividualBudget = ({ item }: itemProps) => {
    const [deleteBudget] = useDeleteBudgetMutation()
    const [description, setDescription] = React.useState('')
    const [amount, setAmount] = React.useState('')
    const [date, setDate] = React.useState('')
    const [category, setCategory] = React.useState('')
    const [modal, setModal] = React.useState(false);
    const [deleteSure, setDeleteSure] = React.useState(true);

    

    const onSubmitForm = (e: any) => {
        e.preventDefault();
        console.log('submit');
    }

    const handleUploadOperation = (id:number) => {
        setModal(!modal);
    }

    const handleDeleteOperation = (id:number) => {
        setDeleteSure(!deleteSure);
       
    }

    const handleDeleteConfirmation = (id:number) => {
        setDeleteSure(!deleteSure);
        deleteBudget(id)
        window.location.reload();
    }

    const handleDeleteCancel = (id:number) => {
        setDeleteSure(!deleteSure);
    }

    return (
        <Container>
            <Card key={item.id}>
                <CardTitle>{item.concept}</CardTitle>
                <CardValue>Amount: ${item.amount}</CardValue>
                <CardDate>Date: {item.date}</CardDate>
                <CardType type={item.type}>{item.type}</CardType>
                <CardCategory>Category: {item.category}</CardCategory>
            </Card>
            
                {deleteSure 
                ? 
                <Info>
                <ButtonEdit onClick={() => handleUploadOperation(item.id)}> Edit </ButtonEdit>
                <DeleteButton onClick={() => handleDeleteOperation(item.id)}> Delete </DeleteButton>
                </Info>
             : <Info>
                <InfoDelete>
                <h3>Are you sure you want to delete this operation?</h3>
                <DeleteConfirmation onClick={() => handleDeleteConfirmation(item.id)}>Yes, Delete</DeleteConfirmation>
                <DeleteCancel onClick={() => handleDeleteCancel(item.id)}>Cancel</DeleteCancel>
                </InfoDelete>
                </Info>
                
            }
           
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
                        />
                        <Input
                            type="number"
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        <Input
                            type="date"
                            placeholder="Date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <SelectCategory
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <OptionCategory value="">Select category</OptionCategory>
                            <OptionCategory value="food">Food</OptionCategory>
                            <OptionCategory value="clothes">Clothes</OptionCategory>
                            <OptionCategory value="entertainment">Entertainment</OptionCategory>
                            <OptionCategory value="transportation">Transportation</OptionCategory>
                            <OptionCategory value="health">Health</OptionCategory>
                            <OptionCategory value="other">Other</OptionCategory>
                        </SelectCategory>
                        <ButtonModal>Upload</ButtonModal>
                    </Form>
                </ContainerModal>
            </Modal>
        </Container>
    )
}

export default IndividualBudget