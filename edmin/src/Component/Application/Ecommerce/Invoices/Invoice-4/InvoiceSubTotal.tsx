import { LI, UL } from "../../../../../AbstractElements";
import { Discount, Subtotal, Tax, TotalDue } from "../../../../../utils/Constant";

const InvoiceSubTotal = () => {
  return (
    <UL style={{ padding: 0, margin: 0, listStyle: "none" }} className="simple-list">
      <LI className="pt-0 ps-0 pe-0" style={{ display: "flex", paddingBottom: 16 }}>
        <span style={{ display: "block", width: 95 }}>{Subtotal} </span>
        <span style={{ display: "block", width: 25 }}>:</span>
        <span style={{ display: "block", width: 95, color: "#43B9B2", opacity: "0.9", fontWeight: 600 }} >
          $6100.00
        </span>
      </LI>
      <LI className="pt-0 ps-0 pe-0" style={{ display: "flex", paddingBottom: 16 }}>
        <span style={{ display: "block", width: 95 }}>{Tax}</span>
        <span style={{ display: "block", width: 25 }}> :</span>
        <span style={{ display: "block", width: 95, color: "#43B9B2", opacity: "0.9", fontWeight: 600 }}>
          $50.00
        </span>
      </LI>
      <LI className="pt-0 ps-0 pe-0" style={{ display: "flex", paddingBottom: 20 }}>
        <span style={{ display: "block", width: 95 }}>{Discount} </span>
        <span style={{ display: "block", width: 25 }}> :</span>
        <span style={{ display: "block", width: 95, color: "#43B9B2", opacity: "0.9", fontWeight: 600}} >
          $30.00
        </span>
      </LI>
      <LI className="p-0" style={{ display: "flex", alignItems: "center" }}>
        <span style={{ display: "block", width: 95 }}>{TotalDue}</span>
        <span style={{ display: "block",color: "#43B9B2", opacity: "0.9", fontWeight: 600, padding: "12px 25px", borderRadius: 5, background: "rgba(67, 185, 178 , 0.1)", fontSize: 18}} >
          $6120.00
        </span>
      </LI>
    </UL>
  );
};

export default InvoiceSubTotal;
