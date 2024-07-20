import { Table } from "reactstrap";
import InvoiceThreeBody from "./InvoiceThreeBody";
import { invoiceThreeHeader } from "../../../../../Data/Application/Ecommerce/Invoice";

const InvoiceThreeTable = () => {
  return (
    <td className="p-0">
      <Table className="order-details" style={{ width: "100%", borderSpacing:0 }} borderless>
        <thead>
          <tr style={{ background: "#43B9B2" }}>
            {invoiceThreeHeader.map((data, i) => (
              <th style={{ padding: "18px 15px", textAlign: "left", borderInline:i === 3 ?"":"3px solid #fff"  }} key={i}>
                <span style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>
                  {data}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <InvoiceThreeBody />
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceThreeTable;
