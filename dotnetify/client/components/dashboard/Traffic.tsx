import React from 'react';
import { Line } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import purple from '@material-ui/core/colors/purple';

const useStyles = makeStyles({
  card: {
    backgroundColor: purple[100],
    height: 700
  },
  header: {
    fontSize: 24,
    color: 'white',
    backgroundColor: purple[600],
    padding: 10
  },
  body: {
      padding: '5px 15px 0 15px',
      height: 550
  }
});

const chartOptions = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },

        ],
    },
};

export interface ITrafficProps {
    data: number[];
    value: number[];
    
}

export default function Traffic(props: ITrafficProps) {
  const classes = useStyles({});
  const data = {
    labels: [1,2,3,4],
    datasets: [
        {
            label: '# of Votes',
            data: props.data,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
        {
            label: '# of Votes2',
            data: props.value,
            fill: false,
            backgroundColor: 'rgb(155, 252, 0)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        }
    ]
  };

  return (
    <Card className={classes.card}>
      <div className={classes.header}>Traffic</div>
      <div className={classes.body}>
         <Line data={data} options={chartOptions}/>
      </div>
    </Card>
  );
}
