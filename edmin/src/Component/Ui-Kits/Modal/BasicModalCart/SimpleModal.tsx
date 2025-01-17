import { useState } from 'react'
import { Modal, ModalBody } from 'reactstrap'
import { Btn, H4, Image, P } from '../../../../AbstractElements'
import { ExploreMore, Simple } from '../../../../utils/Constant';
import { dynamicImage } from '../../../../Service';
import SvgIcon from '../../../../CommonElements/SVG/SvgIcon';

const SimpleModal = () => {
  const [simpleModal, setSimpleModal] = useState(false);
  const toggle = () => setSimpleModal(!simpleModal);
  return (
    <>
      <Btn color="secondary" onClick={toggle} className='px-xl-2 px-xxl-3'>{Simple}</Btn>
      <Modal isOpen={simpleModal} toggle={toggle}>
        <ModalBody>
          <div className="modal-toggle-wrapper">
            <H4>Up to <strong className="font-danger">85% OFF</strong>, Hurry Up Online Shopping</H4>
            <div className="modal-img">
              <Image src={dynamicImage(`gif/online-shopping.gif`)} alt="online-shopping" />
            </div>
            <P className="text-sm-center">Our difficulty in finding regular clothes that was of great quality, comfortable, and didn't impact the environment given way to Creatures of Habit.</P>
            <Btn color="primary" className="d-flex align-items-center gap-2 text-light ms-auto" onClick={toggle}>{ExploreMore}
              <SvgIcon iconId='arrow-right' className='feather' />
            </Btn>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default SimpleModal