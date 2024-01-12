import { Label, Percentage, StatisticsLi } from './Statistics.styled';

export const StatisticsItem = ({ label, percentage }) => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const randomBackgroundColor = getRandomColor();

  return (
    <StatisticsLi style={{ backgroundColor: randomBackgroundColor }}>
      <Label>{label}</Label>
      <Percentage>{percentage}</Percentage>
    </StatisticsLi>
  );
};
