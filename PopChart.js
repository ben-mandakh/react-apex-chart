import Chart from 'react-apexcharts';
import React, { useState } from 'react';

const PopChart = () => {
    const[options, setOptions] = useState({
        chart: {
            background : '#f4f4f4',
            foreColor: '#333'
        },
        xaxis: {
            categories: [
                'New York',
                'Los Angeles',
                'Chicago',
                'Houston',
                "Philadelphia",
                'Phoenix',
                'San Antonio',
                'San Diego',
                'Dallas',
                'San Jose'
            ]
        },
        plotOptions: {
            bar: {
                horizontal: false
            }
        },
        fill: {
            colors: ['#f44336']
        },
        dataLabels: {
            enabled: false
        },
        title: {
            text: 'Largest US Cities By Population',
            align: 'center',
            margin: 20,
            offsetY: 20,
            style: {
                fontSize: '25px'
            }
        }


    })
    const[series, setSeries] = useState([
        {
            name: 'Population',
            data: [
                3550450,
                3971883,
                4720546,
                5979878,
                9433222,
                7809809,
                8909888,
                7090900,
                6545345,
                9980977
            ]
        }
    ])
    const [prices, setPrices] = useState([
        {
            data: [
                [1538856000000, [6593.34, 6600, 6582.63, 6500]],
                [1538856100000, [6503.34, 6600, 6582.63, 6700]],
                [1538856200000, [6593.34, 6600, 6582.63, 6650]],
                [1538856300000, [6593.34, 6600, 6582.63, 7600]],
                [1538856400000, [6593.34, 6600, 6582.63, 6800]],
                [1538856500000, [6593.34, 6600, 6582.63, 6900]],
                [1538856600000, [6593.34, 6600, 6582.63, 6000]],
                [1538856700000, [6593.34, 6600, 6582.63, 6250]],
                [1538856800000, [4593.34, 6600, 3582.63, 4600]],
                [1538856900000, [6593.34, 7300, 6482.63, 7000]],
                [1538857000000, [6595.16, 6604.76, 6590.73, 7593.86]]
            ] }
    ])

    const onClickBar = () => {
        setOptions({...options, plotOptions: {
            ... options.plotOptions, bar: {
                ... options.plotOptions.bar, 
                horizontal: !options.plotOptions.bar.horizontal
            }
        }})
    }
 

    return (
        <React.Fragment >
        <Chart 
        options={options}
        series = {series}
        type = 'bar'
        height= '450'
        width = '100%'
        />
        <button
            onClick={onClickBar}
        > Change </button>
        
            <Chart
                options={options}
                series={prices}
                type='candlestick'
                height='450'
                width='100%'
            />

        </React.Fragment>
    )
}

export default PopChart