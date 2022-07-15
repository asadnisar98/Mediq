import React, { useState } from 'react'
import { orders } from './data/FrontendTaskMockOrdersData'
import { AiOutlineArrowDown, AiFillCalendar } from 'react-icons/ai';

const Orderlist: React.FC = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(orders)
  const [colOrder, setcolOrder] = useState('ASC')
  const filtered = data.filter((val: any) => {
    if (search === '') {
      return val
    } else if (
      val.orderID.toLowerCase().includes(search.toLowerCase()) ||
      val.customerName.toLowerCase().includes(search.toLowerCase()) ||
      val.companyName.toLowerCase().includes(search.toLowerCase())
    ) {
      return val
    }
  })



  const sorted = (colname: any) => {
    if (colOrder === 'ASC') {
      const sorting = [...data].sort((a: any, b: any) =>
        a[colname] > b[colname] ? 1 : -1,
      )
      setData(sorting)
      setcolOrder('DSC')
    }
    if (colOrder === 'DSC') {
      const sorting = [...data].sort((a: any, b: any) =>
        a[colname] < b[colname] ? 1 : -1,
      )
      setData(sorting)
      setcolOrder('ASC')
    }
  }

  return (
    <div className="container">
      <input
        className="searchInput mb-3 mt-5"
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        placeholder="Enter Order ID, Customer Name or Company Name ...."
        style={{ width: 400, height: 40 }}
      />
      <table className="table">
        <thead className="thead-dark t_heaad">
          <tr>
            <th className="filtered" onClick={() => sorted('orderID')} scope="col">
              Order # <AiOutlineArrowDown className="icon_filter" />
            </th>
            <th scope="col">Order Status</th>
            <th scope="col">Customer</th>
            <th className="filtered" onClick={() => sorted('purDate')} scope="col">
              Purchase Date <AiOutlineArrowDown className="icon_filter" />
            </th>
            <th className="filtered" onClick={() => sorted('fulfillDate')} scope="col">
              Fullfilled Date <AiOutlineArrowDown className="icon_filter" />
            </th>
            <th scope="col">Invoice Status</th>
            <th className="filtered" onClick={() => sorted('amount')} scope="col">
              Amount <AiOutlineArrowDown className="icon_filter" />
            </th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item) => (
            <tr key={item.orderID}>
              <td>{item.orderID}</td>
              <td>{item.orderStatus}</td>
              <td>
                {item.companyName}
                <br />
                {item.customerName}
              </td>
              <td><AiFillCalendar /> {item.purDate}</td>
              <td><AiFillCalendar /> {item.fulfillDate}</td>
              <td>{item.invoiceStatus}</td>
              <td>
                {item.currency} {item.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Orderlist
