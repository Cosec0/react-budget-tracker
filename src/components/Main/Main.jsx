import { Card, CardContent, Typography, CardHeader, Divider  } from '@mui/material';
import Form from './Form/Form';
import ListComponent from './List/ListComponent';


const Main = () => {
  return (
    <Card sx={{ minWidth: '20rem', maxWidth: '40rem',  height: '90%'}}>
        <CardHeader title="Expense Tracker"  subheader="Made with &#128147; by Kosu" />
        <CardContent>
          <Typography variant="h5" component="div" align="center">
            Total Balance &#x20B9;550
          </Typography>
          <Typography variant="body1" align="center">
            Try Saying <br/> Add Expense &#x20B9;50 for Category Travel for Thursday
          </Typography>
          <Divider light />
          <Form/>
          <Divider light />
          <Typography variant="body1" sx={{ mt: "1rem" }} >
            Transactions history
          </Typography>
          <ListComponent/>
        </CardContent>
    </Card>
  );
}

export default Main;
