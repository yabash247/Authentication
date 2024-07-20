import React, { useState } from 'react';
import { Bell, Disc } from 'react-feather';
import { Toast, ToastBody } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { CommonToastProp } from '../../../../Type/BonusUi/BonusUiTypes';

const CommonToast:React.FC<CommonToastProp> = ({ item }) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <Toast isOpen={open}>
      <div className="toast-header">
        {item.bell ? <Bell className={`toast-icons toast-${item.iconColor}`} /> : <Disc className={`toast-icons toast-${item.iconColor}`} />}
        <strong className="me-auto">{item.title}</strong>
        <small className={item.bell ? "" : "text-muted d-sm-block d-none"}>{item.time}</small>
        <Btn close className="p-0" onClick={() => setOpen(false)}></Btn>
      </div>
      <ToastBody className="toast-dark">{item.bodyText}</ToastBody>
    </Toast>
  )
}

export default CommonToast