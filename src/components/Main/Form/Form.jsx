import { Grid, FormControl, Input, InputLabel, FormHelperText, Select, MenuItem, Button } from '@mui/material';

const Form = () => {
    return (
        <>
            <Grid container spacing={2} sx={{ marginTop: '1rem', marginBottom: '1rem'}}>
                <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="type">Type</InputLabel>
                    <Select
                        id="type"
                        value="Income"
                        label="Type"
                        // onChange={handleChange}
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
                            value="Food"
                            label="Category"
                            // onChange={handleChange}
                        >
                            <MenuItem value="Gaming">Gaming</MenuItem>
                            <MenuItem value="Food">Food</MenuItem>
                            <MenuItem value="Travel">Travel</MenuItem>
                            <MenuItem value="Others">Others</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="amount">Amount</InputLabel>
                        <Input id="amount "type="number" min="1" required/>
                        <FormHelperText id="amount-helper-text">Amount must be in Rupees (&#x20B9;)</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="date">Date</InputLabel>
                        <Input id="date" type="date" required/>
                    </FormControl>
                </Grid>
            </Grid>
            <Button variant="outlined" fullWidth>ADD TRANSACTION</Button>
        </>
    )
}

export default Form;
