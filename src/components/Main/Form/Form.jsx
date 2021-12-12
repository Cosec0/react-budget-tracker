import { Grid, FormControl, Input, InputLabel, FormHelperText, Select, MenuItem, Button } from '@mui/material';
import { useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSpeechContext } from '@speechly/react-client';

import { expenseCategories, incomeCategories } from '../../../constants/categories';
import formatDate from '../../../utils/formatDate';
import toSentenceCase from '../../../utils/toTitleCase';
import { BudgetContext } from '../../../context/budgetContext';

const initialState = {
    type: 'Income',
    category: '',
    amount: 0,
    date: formatDate(new Date())
};

const Form = () => {
    const { addTransaction } = useContext(BudgetContext); 
    const [formData, setFormData] = useState(initialState);
    const { segment } = useSpeechContext();

    const selectedCategory = formData.type === 'Income' ? incomeCategories : expenseCategories;

    useEffect(() => {
        if(segment) {
            if(segment.intent.intent === 'add_income') {
                setFormData((prev) => ({ ...prev, type: 'Income' }))
            }
            else if(segment.intent.intent === 'add_expense') {
                setFormData((prev) => ({ ...prev, type: 'Expense' }))
            }

            segment.entities.forEach((e) => {
                let newCategory = '';
                switch(e.type) {
                    case 'amount':
                        setFormData((prev) => ({ ...prev, amount: Number(e.value) }));
                        break;
                    case 'date':
                        setFormData((prev) => ({ ...prev, date: e.value }));
                        break;
                    case 'category':
                        newCategory = toSentenceCase(e.value);
                        if(newCategory && (incomeCategories.map(iC => iC.type)).includes(newCategory)) {
                            setFormData((prev) => ({ ...prev, type: 'Income', category: newCategory }));
                        }
                        else if(newCategory && (expenseCategories.map(eC => eC.type)).includes(newCategory)) {
                            setFormData((prev) => ({ ...prev, type: 'Expense', category: newCategory }));
                        }
                        break;
                }
            })

            if(segment.isFinal && formData.type && formData.amount && formData.category && formData.category) {
                handleFormSubmit();
            }
        }
    }, [segment]);

    const handleFormSubmit = (e = null) => {        
        if(e) e.preventDefault();
        
        if(Number.isNaN(Number(formData.amount)) || !formData.date.includes('-')) return;

        const newTransaction = { id: uuidv4(), ...formData };
        addTransaction(newTransaction);
        setFormData(initialState);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <Grid container spacing={2} sx={{ marginTop: '1rem', marginBottom: '1rem'}}>
                <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="type">Type</InputLabel>
                    <Select
                        id="type"
                        value={formData.type}
                        label="Type"
                        onChange={(e) => setFormData(prev => ({...prev, type: e.target.value}))} 
                        requried
                    >
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="category">Category</InputLabel>
                        <Select
                            id="category"
                            value={formData.category}
                            label="Category"
                            onChange={(e) => setFormData(prev => ({...prev, category: e.target.value}))} 
                            required
                        >
                            {
                                selectedCategory.map(category => (
                                    <MenuItem value={category.type}>{category.type}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="amount">Amount</InputLabel>
                        <Input 
                            id="amount" 
                            type="number" 
                            min="1" 
                            value={formData.amount} 
                            onChange={(e) => setFormData(prev => ({...prev, amount: +(e.target.value)}))}
                            required
                        />
                        <FormHelperText id="amount-helper-text">Amount must be in Rupees (&#x20B9;)</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="date">Date</InputLabel>
                        <Input 
                            id="date" 
                            type="date" 
                            value={formData.date} 
                            onChange={(e) => setFormData(prev => ({...prev, date: e.target.value}))} 
                            required
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <Button type="submit" variant="outlined" fullWidth>ADD TRANSACTION</Button>
        </form>
    )
}

export default Form;
