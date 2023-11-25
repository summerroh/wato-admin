import { Card } from './Card';

export const CardList = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
};
