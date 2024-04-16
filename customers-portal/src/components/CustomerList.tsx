import React, { useState, useEffect } from 'react';
import CustomerCard from './CustomerCard';
import CustomerDetails from './CustomerDetails';
import axios from 'axios';

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
        title: "Mr/Ms", // Example static title
        address: user.address.street,
        content: "Amarnath" // Simplified example
      })));
    };

    fetchCustomers();
  }, []);

  const listStyle = {
    width: '250px',
    height: '100vh',  
    overflowY: 'auto',  
    borderRight: '1px solid #ccc'  
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{width: '250px',
    height: '100vh',  
    overflowY: 'auto',  
    borderRight: '1px solid #ccc'}}>
        {customers.map(customer => (
          <CustomerCard
            key={customer.id}
            customer={customer}
            isSelected={selectedCustomer?.id === customer.id}
            onSelect={() => setSelectedCustomer(customer)}
          />
        ))}
      </div>
      <div style={{ flex: 1 }}>
        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
      </div>
    </div>
  );
};

export default CustomerList;
