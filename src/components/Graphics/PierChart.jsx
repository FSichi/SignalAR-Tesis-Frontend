// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'

export const PierChart = () => {

    var cantInv = 85;
    var cantInvFin = 24;
    var labels = ['Completadas', 'Finalizado'];

    const data = {
        labels: labels,
        datasets: [{
            label: '',
            data: [cantInv, cantInvFin],
            backgroundColor: [
                '#6366F1',
                'rgb(14 165 233)',
            ],
            borderColor: [
                '#6366F1',
                'rgb(14 165 233)',
            ],
            color: 'red',
            borderWidth: 1
        }]
    };

    return (
        <div className='dark:bg-gray-900 rounded-xl p-3'>
            <Doughnut
                data={data} height={460} width={100} //313
                options={
                    {
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'left',
                                display: true,
                                labels: {
                                    color: '#ffffff',
                                    boxWidth: 20,
                                }
                            }
                        }
                    }
                }
            />
        </div>
    )
}
