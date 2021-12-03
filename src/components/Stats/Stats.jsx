import { Card, CardContent, Typography, CardHeader } from '@mui/material';


const Stats = ({ title }) => {
  return (
    <Card sx={{ 
      minWidth: '20rem',
      maxWidth: '40rem', 
      borderBottom: '0.75rem solid',
      borderBottomColor: title === 'Income' ? 'green' : 'red'  
      }}>
        <CardHeader title={`${title} Stats`}/>
        <CardContent>
            <Typography variant="body1">
                Coming soon...
            </Typography>
        </CardContent>
    </Card>
  );
}

export default Stats;
