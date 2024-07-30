// CustomBarChart.jsx
import React from 'react';
import './CustomBarChart.css';

const data = [


  { label: 'USDINR 23JUN FUT (NRML)', value: -200, type: 'negative' },
  { label: '11th 23MAY 18700 CE (NRML)', value: -50, type: 'negative' },
  { label: 'USDINR 23MAY FUT (NRML)', value: -42.5, type: 'negative' },
  { label: '11th 23MAY 18750 CE (NRML)', value: -12.5, type: 'negative' },
  { label: '11th 23MAY 17300 PE (MIS)', value: -12.5, type: 'negative' },
  { label: 'IDFCFIRSTB (CNC)', value: -0.25, type: 'negative' },
  { label: '11th 23MAY 18650 CE (NRML)', value: 40, type: 'positive' },
  { label: 'GOLDPETAL 23MAY FUT (NRML)', value: 4, type: 'positive' }
];

const BarChart = () => {
  const maxValue = Math.max(...data.map(item => Math.abs(item.value)));
  
  return (
<>
        <div className="bar-chart">
          {data.map((item, index) => (
            <div className={`bar bar-${item.type}`} key={index}>
              <div
                className="rect"
                style={{
                  left: item.value > 0 ? '50%' : `${50 + (item.value / maxValue) * 50}%`,
                  width: `${(Math.abs(item.value) / maxValue) * 50}%`,
                }}
                data-balloon={item.value}
                data-balloon-pos="up"
              />
              <div
                className="label"
                style={{
                  left: item.value > 0 ? '0%' : '50%',
                  width: '50%',
                  textAlign: item.value > 0 ? 'right' : 'left',
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
</>
  );
};

export default BarChart;
