import { StatisticsItem } from 'components/Statistics/StatisticsItem';
import {
  StatisticsList,
  StatisticsSection,
  StatisticsTitle,
} from './Statistics.styled';

export const Statistics = ({ data, title }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle >{title}</StatisticsTitle>}

      <StatisticsList >
        {data.map(element => (
          <StatisticsItem key={element.id} {...element} />
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};
