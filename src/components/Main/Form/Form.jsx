import { Grid, FormControl, Input, InputLabel, FormHelperText, Select, MenuItem, Button } from '@mui/material';
import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { expenseCategories, incomeCategories } from '../../../constants/categories';
import formatDate from '../../../utils/formatDate';
import { BudgetContext } from '../../../context/budgetContext';

const Form = () => {
    const { addTransaction } = useContext(BudgetContext); 
    const [formData, setFormData] = useState({
        type: 'Income',
        category: '',
        amount: 0,
        date: formatDate(new Date())
    });

    const selectedCategory = formData.type === 'Income' ? incomeCategories : expenseCategories;
    //setFormData(prev => ({...prev, category: selectedCategory[0].type}));

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newTransaction = { id: uuidv4(), ...formData };
        addTransaction(newTransaction);
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
