import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerCard from './CustomerCard';
import CustomerDetails from './CustomerDetails';
import '../App.css'; 

interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
  content: string; 
}

const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setCustomers(response.data.map((user: any) => ({
        id: user.id,
        name: user.name,
        title: "Mr/Ms",
        address: user.address.street,
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      })));
    };

    fetchCustomers();
  }, []);

  return (
    <div className="customer-list-container">
      <div className="customer-list">
        {customers.map(customer => (
          <CustomerCard
            key={customer.id}
            customer={customer}
            isSelected={selectedCustomer?.id === customer.id}
            onSelect={() => setSelectedCustomer(customer)}
          />
        ))}
      </div>
      <div className="flex-grow">
        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
      </div>
    </div>
  );
};

export default CustomerList;
