// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

export const BarChart = () => {

    const registros = [12, 20, 50];
    var labels = ['Dato 1', 'Dato 2', 'Dato 3'];

    const data = {
        labels: [''],
        datasets: [
            {
                label: labels[0],
                data: [registros[0]],
                backgroundColor: '#6366F1',
                borderColor: '#6366F1',
                borderWidth: 1
            },
            {
                label: labels[1],
                data: [registros[1]],
                backgroundColor: 'rgb(6 182 212)',
                borderColor: 'rgb(6 182 212)',
                borderWidth: 1
            },
            {
                label: labels[2],
                data: [registros[2]],
                backgroundColor: 'rgb(14 165 233)',
                borderColor: 'rgb(14 165 233)',
                borderWidth: 1
            },

        ]
    };

    return (
        <div className='dark:bg-gray-900 rounded-xl p-3'>
            <Bar
                data={data} height={480} width={100}
                options={
                    {
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom',
                                display: true,
                                labels: {
                                    color: '#ffffff',
                                    boxWidth: 20,
                                }
                            },
                        },
                        scales: {
                            y: {
                                ticks: {
                                    stepSize: 10,
                                    color: '#ffffff'
                                },
                            },
                        }
                    }
                }
            />
        </div>
    )
}
