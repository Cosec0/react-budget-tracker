import { Card, CardContent, Typography, CardHeader, Chip } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import useTransactions from '../../utils/useTransactions';

const Stats = ({ title }) => {
  Chart.register(ArcElement);
  Chart.register(ChartDataLabels);

  const { total, chartData, selectedCategories } = useTransactions(title);

  return (
    <Card sx={{ 
      minWidth: '20rem',
      maxWidth: '40rem', 
      borderBottom: '0.75rem solid',
      borderBottomColor: title === 'Income' ? 'green' : 'red'  
      }}>
        <CardHeader title={`${title} Stats`}/>
        <CardContent>
          {
            total > 0 ?
            (
              <>
                <Typography variant="h5">
                  ₹{total}
                </Typography>
                {
                  selectedCategories.map(category => (
                    <Chip label={category.type} size="small" sx={{ backgroundColor: category.color, color: 'white' }} />
                  ))
                }
                <Doughnut data={chartData} style={{ padding: '1rem' }} />
              </>
            ) :
            (
              <Typography variant="body1">
                No {title} records found
              </Typography>
            )
          }
            
        </CardContent>
    </Card>
  );
}

export default Stats;
