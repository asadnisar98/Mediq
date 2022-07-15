
enum status {
  UNVERIFIED,
  REFUNDED,
  CANCELLED,
  VERIFIED,
  FULFILLED,
}

type OrderStatus = keyof typeof status;

interface orderType {
  orderID?: string;
  orderStatus: OrderStatus;
  companyName?: string;
  customerName?: string;
  purDate?: string;
  fulfillDate?: string;
  invoiceStatus?: "Paid" | "Unpaid",
  amount?: number;
  currency?: string;
}

export const orders : orderType[] = [
  {
    orderID: "2542",
    orderStatus: "FULFILLED",
    companyName: "GÅRDSBUA AS",
    customerName: "John Doe",
    purDate: "26 Jan 2022",
    fulfillDate: "26 Jan 2022",
    invoiceStatus: "Paid",
    amount: 250,
    currency: "NOK"
  }, {
    orderID: "2544",
    orderStatus: "FULFILLED",
    companyName: "GÅRDSBUA AS",
    customerName: "John Doe",
    purDate: "26 Jan 2022",
    fulfillDate: "26 Jan 2022",
    invoiceStatus: "Paid",
    amount: 400,
    currency: "NOK"
  }, {
    orderID: "2502",
    orderStatus: "VERIFIED",
    companyName: "GÅRDSBUA AS",
    customerName: "James Smith",
    purDate: "29 Jan 2022",
    fulfillDate: "30 Jan 2022",
    invoiceStatus: "Paid",
    amount: 630,
    currency: "PKR"
  }, {
    orderID: "5020",
    orderStatus: "REFUNDED",
    companyName: "SMITH INC",
    customerName: "Peter Johnson",
    purDate: "1 Feb 2022",
    fulfillDate: "4 Feb 2022",
    invoiceStatus: "Paid",
    amount: 5656,
    currency: "USD"
  }, {
    orderID: "2548",
    orderStatus: "UNVERIFIED",
    companyName: "LOMES LLC",
    customerName: "Barry Jones",
    purDate: "23 Jan 2022",
    fulfillDate: "25 Jan 2022",
    invoiceStatus: "Unpaid",
    amount: 980,
    currency: "USD"
  }
]