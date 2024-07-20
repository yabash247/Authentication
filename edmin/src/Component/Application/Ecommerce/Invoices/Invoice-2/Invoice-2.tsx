import { Card, CardBody, Container, Table } from "reactstrap";
import InvoiceTwoHeader from "./InvoiceTwoHeader";
import InvoiceTwoDetails from "./InvoiceTwoDetails";
import InvoiceTwoBilling from "./InvoiceTwoBilling";
import InvoiceTwoContent from "./InvoiceTwoContent";
import InvoiceTwoTotal from "./InvoiceTwoTotal";
import { InvoiceButtons } from "../Common/InvoiceButtons";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Breadcrumbs from "../../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Invoice, InvoiceTwo } from "../../../../../utils/Constant";

const InvoiceTwoContainer = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <Breadcrumbs mainTitle={InvoiceTwo} parent={Invoice} />
      <div ref={componentRef}>
        <Container className="invoice-2">
          <Card>
            <CardBody>
              <Table responsive borderless className="theme-scrollbar table-wrapper">
                <tbody>
                  <tr>
                    <InvoiceTwoHeader />
                  </tr>
                  <tr>
                    <InvoiceTwoDetails />
                  </tr>
                  <tr>
                    <InvoiceTwoBilling />
                  </tr>
                  <tr>
                    <InvoiceTwoContent />
                  </tr>
                  <tr>
                    <InvoiceTwoTotal />
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

export default InvoiceTwoContainer;
