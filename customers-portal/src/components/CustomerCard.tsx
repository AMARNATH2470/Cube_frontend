import React from 'react';

interface Props {
  customer: {
    id: number;
    name: string;
    title: string;
    content: string;
  };
  isSelected: boolean;
  onSelect: () => void;
}

const CustomerCard: React.FC<Props> = ({ customer, isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      style={{ padding: '10px', backgroundColor: isSelected ? '#ADD8E6' : '#FFFFFF', cursor: 'pointer' }}
    >
      <p>{customer.name} - {customer.title} - {customer.content}</p>
    </div>
  );
};

export default CustomerCard;
