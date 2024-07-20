import { Btn } from "../../../../AbstractElements";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setCategoryModal } from "../../../../ReduxToolkit/Reducers/ContactSlice";
import { AddCategory, Cancel, EnterCategoryName, Save } from "../../../../utils/Constant";
import { Col, Form, FormGroup, Input, Modal, ModalBody, ModalHeader, Row } from "reactstrap";

const CategoryCreate = () => {
  const { categoryModal } = useAppSelector((state) => state.contact);
  const dispatch = useAppDispatch();
  const categoryToggle = () => dispatch(setCategoryModal());
  return (
    <>
      <Btn color="transparent" className="btn-category" onClick={categoryToggle}>
        <span className="title font-primary f-w-600"> + {AddCategory}</span>
      </Btn>
      <Modal fade isOpen={categoryModal} toggle={categoryToggle}>
        <ModalHeader toggle={categoryToggle}>
          <h3 className="modal-title">{AddCategory}</h3>
        </ModalHeader>
        <ModalBody>
          <Form className="form-bookmark">
            <Row className="g-2">
              <Col md="12">
                <FormGroup>
                  <Input type="text" required placeholder={EnterCategoryName} autoComplete="off" />
                </FormGroup>
              </Col>
            </Row>
            <Btn color="secondary" onClick={categoryToggle} className="me-2">
              {Save}
            </Btn>
            <Btn color="primary" onClick={categoryToggle}>
              {Cancel}
            </Btn>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default CategoryCreate;
