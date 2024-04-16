import React from 'react';
import PhotoGrid from './PhotoGrid';

interface Props {
  customer: {
    name: string;
    title: string;
    address: string;
    content: string;
  };
}

const CustomerDetails: React.FC<Props> = ({ customer }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      <p>{customer.content}</p>
      <PhotoGrid />
    </div>
  );
};

export default CustomerDetails;
