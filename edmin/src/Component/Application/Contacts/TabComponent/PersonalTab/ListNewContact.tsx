import { Col, Nav, NavLink } from 'reactstrap';
import { H6, Image, P } from '../../../../../AbstractElements';
import { useState } from 'react';
import SearchNotFoundClass from './SearchNotFoundClass';
import { ListNewContactPropsType, UserCallbackUser } from '../../../../../Type/Application/Contacts/Contacts';
import { Href } from '../../../../../utils/Constant';
import { dynamicImage } from '../../../../../Service';

const ListNewContact = ({ users, userCallback }:ListNewContactPropsType) => {
  const [dynamicTab, setDynamicTab] = useState(0);
  const ContactDetails = (user:UserCallbackUser) => {
    userCallback({ id: user.id, name: user.name, sureName: user.sureName, avatar: user.avatar, mobile: user.mobile });
  };
  return (
    <Col xl="4" md="5" className='xl-50'>
      <Nav className="flex-column nav-pills">
        {users.length > 0 ?
          users.map((user:UserCallbackUser, index:number) => {
            return (
              <NavLink className={dynamicTab === index ? 'active' : ''} onClick={() => setDynamicTab(index)} key={index} href={Href}>
                <div className="d-flex" onClick={() => ContactDetails(user)}>
                  <Image className='img-50 img-fluid m-r-20 rounded-circle update_img_0' src={dynamicImage("user/4.jpg")} alt= 'userImage'  />
                  <div className="flex-grow-1">
                    <H6>
                      <span className="first_name_0">{user.name}</span>
                      <span className="last_name_0">{user.sureName}</span>
                    </H6>
                    <P className= 'email_add_0' >{user.name}{'@gmail.com'}</P>
                  </div>
                </div>
              </NavLink>
            );
          })
          :
          <SearchNotFoundClass />
        }
      </Nav>
    </Col>
  )
}

export default ListNewContact