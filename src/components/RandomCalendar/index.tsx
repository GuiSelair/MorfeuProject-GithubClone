import React from 'react';
import Heatmap from 'react-calendar-heatmap';
import { subYears, isBefore, isSameDay, addDays } from 'date-fns';

import { Container } from './styles';

interface HeatmapValue {
  date: Date;
  count: number;
}

const generateHeatmapValues = (
  startDate: Date,
  endDate: Date,
): HeatmapValue[] => {
  const values: HeatmapValue[] = [];
  let currentDate = startDate;

  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
    const generatedValue = Math.round(Math.random() * 4);
    values.push({
      date: currentDate,
      count: generatedValue,
    });

    currentDate = addDays(currentDate, 1);
  }

  return values;
};

const RandomCalendar: React.FC = () => {
  const startDate = subYears(new Date(), 1);
  const endDate = new Date();

  return (
    <Container>
      <div className="wrapper">
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={generateHeatmapValues(startDate, endDate)}
          gutterSize={3.5}
          classForValue={(item: HeatmapValue) => {
            let clampetCount = 0;

            if (item !== null) {
              clampetCount = Math.max(item.count, 0);
              clampetCount = Math.min(item.count, 4);
            }
            return `scale-${clampetCount}`;
          }}
          showWeekdayLabels
        />
      </div>
      <span>Random calendar (do not represent actual data)</span>
    </Container>
  );
};

export default RandomCalendar;
