// src/components/CustomerCard.tsx
import React from 'react';
import '../App.css'; 

interface Props {
  customer: {
    id: number;
    name: string;
    title: string;
  };
  isSelected: boolean;
  onSelect: () => void;
}

const CustomerCard: React.FC<Props> = ({ customer, isSelected, onSelect }) => {
  return (
    <div
      className={`customer-card ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <p>{customer.name} - {customer.title}</p>
    </div>
  );
};

export default CustomerCard;
