import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: ['1', '2', '3', '4', '5', '6'],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              fill: false,
              backgroundColor: 'rgba(25, 123, 189, 1)',
              borderColor: 'rgba(25, 123, 189, 1)',
            },
          ],
        }}
        height={890}
        width={2590}
        options={{
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              },
            },
            ],
          },
        }}
      />
    </div>
  )
}

export default LineChart