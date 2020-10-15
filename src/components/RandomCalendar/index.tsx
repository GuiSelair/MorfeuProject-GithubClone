import React from 'react';
import Heatmap from 'react-calendar-heatmap';
import { subYears } from 'date-fns';

import { Container } from './styles';

interface HeatmapValue {
  date: Date;
  count: number;
}

const RandomCalendar: React.FC = () => {
  const startDate = subYears(new Date(), 1);
  const endDate = new Date();

  const values: HeatmapValue[] = [];

  values.push({ date: new Date(), count: 3 });

  return (
    <Container>
      <div className="wrapper">
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={values}
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
