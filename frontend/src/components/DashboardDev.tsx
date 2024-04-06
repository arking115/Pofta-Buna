import * as React from 'react';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import Card from './Card';
import { CardProps } from '@mui/material';

type TickParamsSelectorProps = {
  tickPlacement: 'end' | 'start' | 'middle' | 'extremities';
  tickLabelPlacement: 'tick' | 'middle';
  setTickPlacement: React.Dispatch<
    React.SetStateAction<'end' | 'start' | 'middle' | 'extremities'>
  >;
  setTickLabelPlacement: React.Dispatch<React.SetStateAction<'tick' | 'middle'>>;
};

function TickParamsSelector({
  tickPlacement,
  tickLabelPlacement,
  setTickPlacement,
  setTickLabelPlacement,
}: TickParamsSelectorProps) {
  return (
    <div className='ml-12'>
    <Stack direction="column" justifyContent="space-between" sx={{ width: '100%' }}>
      <FormControl>
        <FormLabel id="tick-placement-radio-buttons-group-label">
          Tick Placement
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="tick-placement-radio-buttons-group-label"
          name="tick-placement"
          value={tickPlacement}
          onChange={(event) =>
            setTickPlacement(
              event.target.value as 'start' | 'end' | 'middle' | 'extremities',
            )
          }
        >
          <FormControlLabel value="start"  control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: '1rem' } }} />} label="start" />
          <FormControlLabel value="end" control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: '1rem' } }} />} label="end" />
          <FormControlLabel value="middle" control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: '1rem' } }} />} label="middle" />
          <FormControlLabel
            value="extremities"
            control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: '1rem' } }} />}
            label="extremities"
          />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="label-placement-radio-buttons-group-label">
          Tick Label Placement
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="label-placement-radio-buttons-group-label"
          name="label-placement"
          value={tickLabelPlacement}
          onChange={(event) =>
            setTickLabelPlacement(event.target.value as 'tick' | 'middle')
          }
        >
          <FormControlLabel value="tick" control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: '1rem' } }} />} label="tick" />
          <FormControlLabel value="middle" control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: '1rem' } }} />} label="middle" />
        </RadioGroup>
      </FormControl>
    </Stack>
    </div>
  );
}

const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: 'Jan',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: 'Fev',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: 'Mar',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: 'Apr',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: 'June',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: 'July',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: 'Aug',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: 'Sept',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: 'Oct',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: 'Nov',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    month: 'Dec',
  },
];

const cardData = [
    { name: 'Card 1', base: 'Base 1', endpoints: 3, status: 'green' },
    { name: 'Card 2', base: 'Base 2', endpoints: 6, status: 'yellow' },
    { name: 'Card 3', base: 'Base 3', endpoints: 1, status: 'red' },
    { name: 'Card 3', base: 'Base 3', endpoints: 1, status: 'red' },
    { name: 'Card 3', base: 'Base 3', endpoints: 1, status: 'red' },
    { name: 'Card 3', base: 'Base 3', endpoints: 1, status: 'red' },
    { name: 'Card 3', base: 'Base 3', endpoints: 1, status: 'red' },
    { name: 'Card 3', base: 'Base 3', endpoints: 1, status: 'red' },
    { name: 'Card 3', base: 'Base 3', endpoints: 1, status: 'red' },
  ];

const chartSetting = {
  yAxis: [
    {
      label: 'applications',
    },
  ],
  series: [
    { dataKey: 'seoul', label: 'Stable', color: '#9C69EF' },
    { dataKey: 'seoul', label: 'Unstable', color: '#9C27B0' },
    { dataKey: 'seoul', label: 'Down', color: '#7B1FA2' },
  ],  
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};

export default function DashboardDev() {
  const [tickPlacement, setTickPlacement] = React.useState<
    'start' | 'end' | 'middle' | 'extremities'
  >('middle');
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState<
    'middle' | 'tick'
  >('middle');

  return (
    <div className='bg-gray-100 my-10'>
        <div className='w-full flex justify-center'>
            <div style={{ width: '80%' }} className='rounded-lg shadow-2xl p-8'>
            <TickParamsSelector
                tickPlacement={tickPlacement}
                tickLabelPlacement={tickLabelPlacement}
                setTickPlacement={setTickPlacement}
                setTickLabelPlacement={setTickLabelPlacement}
            />
            <BarChart
                dataset={dataset}
                xAxis={[
                { scaleType: 'band', dataKey: 'month', tickPlacement, tickLabelPlacement },
                ]}
                {...chartSetting}
            />
            </div>
        </div>
        
        <div className='w-full flex justify-center mt-10'>
            <div style={{ width: '80%' }} className='grid grid-cols-3 gap-10'>
               {
                cardData.map((card, index) => (
                    <Card key={index} {...card} />
                ))
               }
            </div>
        </div>
    </div>
  );
}
