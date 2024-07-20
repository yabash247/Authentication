import { Table } from "reactstrap";
import { PaymentTeams } from "../../../../../utils/Constant";
import InvoiceSubTotal from "./InvoiceSubTotal";

const InvoiceTotal = () => {
  return (
    <td className="p-0">
      <Table style={{ width: "100%" }}>
        <tbody>
          <tr style={{ display: "flex", justifyContent: "space-between", margin: "16px 0 24px 0", alignItems: "end" }} >
            <td className="p-0" style={{ display: "flex", gap: 10 }}>
              <span style={{ color: "#43B9B2", fontSize: 16, fontWeight: 600}}>
                {PaymentTeams} :
              </span>
              <span style={{ display: "block",lineHeight: "1.5", fontSize: 16, fontWeight: 400, width: "55%" }} >
                {"This denotes a payment credit for a full month's supply."}
              </span>
            </td>
            <td className="p-0">
              <InvoiceSubTotal />
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceTotal;
