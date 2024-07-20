import { Card, CardBody, Container, Table } from "reactstrap";
import InvoiceThreeHeader from "./InvoiceThreeHeader";
import InvoiceClientDetail from "./InvoiceClientDetail";
import InvoiceThreeTable from "./InvoiceThreeTable";
import InvoiceBankTransfer from "./InvoiceBankTransfer";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Breadcrumbs from "../../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Invoice, InvoiceThree } from "../../../../../utils/Constant";

const InvoiceThreeContainer = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <Breadcrumbs mainTitle={InvoiceThree} parent={Invoice} />
      <div ref={componentRef}>
        <Container className="invoice-2">
          <Card>
            <CardBody>
              <Table borderless responsive className="theme-scrollbar">
                <tbody>
                  <tr>
                    <InvoiceThreeHeader />
                  </tr>
                  <tr>
                    <InvoiceClientDetail />
                  </tr>
                  <tr>
                    <td className="p-0">
                      <span style={{ display: "block", background: "#43B9B2", height: 1, width: "100%", marginBottom: 20 }} ></span>
                    </td>
                  </tr>
                  <tr>
                    <InvoiceThreeTable />
                  </tr>
                  <tr>
                    <InvoiceBankTransfer />
                  </tr>
                  <tr>
                    <td className="p-0">
                      <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 24 }} />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Container>
      </div>
      <InvoiceButtons handlePrint={handlePrint}/>
    </>
  );
};

export default InvoiceThreeContainer;
