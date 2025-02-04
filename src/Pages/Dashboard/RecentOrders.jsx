import React from 'react';

const recentOrderData = [
  {
    id: 1,
    orderNumber: 'ORD-000',
    date: '2021-08-01',
    customer: 'John Doe',
    total: 101
  },
  {
    id: 2,
    orderNumber: 'ORD-001',
    date: '2021-08-02',
    customer: 'Jane Doe',
    total: 202
  },
  {
    id: 3,
    orderNumber: 'ORD-001',
    date: '2021-08-02',
    customer: 'Jane Doe',
    total: 203
  },
  {
    id: 4,
    orderNumber: 'ORD-001',
    date: '2021-08-02',
    customer: 'Jane Doe',
    total: 204
  },
  {
    id: 5,
    orderNumber: 'ORD-001',
    date: '2021-08-02',
    customer: 'Jane Doe',
    total: 205
  },
  
]


function RecentOrders() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className='text-gray-700 font-medium'>Recent</strong>
      {recentOrderData.map((order) => (
        <div>{order.id}</div>
      ))}
    </div>
  );
};

export { RecentOrders };