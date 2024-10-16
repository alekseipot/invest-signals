// src/components/StrategyChart.js

import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip } from 'chart.js';

// Register necessary Chart.js components
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip);

const StrategyChart = () => {
    const chartRef = useRef(null);

    const data = {
        labels: [
            '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
            '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019',
            '2020', '2021', '2022', '2023', '2024'
        ],
        datasets: [
            {
                label: 'Strategie',
                data: [
                    100, 125, 150, 170, 200, 230, 275, 300, 375, 500,
                    600, 650, 700, 750, 800, 850, 900, 1000, 1100, 1250,
                    1350, 1500, 1600, 1700, 1800
                ],
                borderColor: '#0066CC',
                borderWidth: 2,
                fill: false,
            },
            {
                label: 'MSCI World Net',
                data: [
                    100, 115, 125, 130, 140, 160, 190, 200, 210, 220,
                    240, 250, 275, 300, 350, 375, 400, 425, 450, 475,
                    500, 550, 600, 650, 700
                ],
                borderColor: '#999999',
                borderWidth: 2,
                fill: false,
            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    callback: (value) => value + 'T', // Format Y-axis labels with 'T' for trillions
                },
            },
        },
        plugins: {
            legend: {
                position: 'bottom',
            },
            tooltip: {
                enabled: true,
                intersect: false,
                mode: 'index',
                callbacks: {
                    label: function (context) {
                        const index = context.dataIndex;
                        const year = context.label;
                        const strategyValue = context.dataset.data[index];
                        const msciValue = data.datasets[1].data[index]; // MSCI World Net data

                        // Custom tooltip content
                        return [
                            `Date: ${year}`,
                            `capital curve: ${strategyValue.toLocaleString()} €`,
                            `MSCI World Net: ${msciValue.toLocaleString()} €`,
                        ];
                    }
                }
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        animation: false, // Disable animation for better performance when drawing dynamic lines
    };

    // Dynamically draw a vertical line on hover
    const drawVerticalLine = (chart) => {
        if (chart.tooltip && chart.tooltip._active && chart.tooltip._active.length) {
            const ctx = chart.ctx;
            const activePoint = chart.tooltip._active[0];
            const x = activePoint.element.x;
            const yAxis = chart.scales.y;

            // Save current drawing state
            ctx.save();

            // Draw vertical line at hovered point
            ctx.beginPath();
            ctx.moveTo(x, yAxis.top);
            ctx.lineTo(x, yAxis.bottom);
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'red'; // Vertical line color
            ctx.stroke();

            // Restore drawing state
            ctx.restore();
        }
    };

    useEffect(() => {
        const chartInstance = chartRef.current;

        if (chartInstance) {
            // Hook into 'afterDraw' to draw the vertical line dynamically
            chartInstance.options.plugins.tooltip.external = (context) => {
                const chart = context.chart;
                drawVerticalLine(chart);
            };

            chartInstance.update(); // Ensure the chart updates after modifying tooltip behavior
        }
    }, []);

    return (
        <div style={{ position: 'relative', height: '400px' }}>
            <Line ref={chartRef} data={data} options={options} />
        </div>
    );
};

export default StrategyChart;
