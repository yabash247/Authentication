import { useState } from 'react'
import CommonFullScreenData from '../Common/CommonFullScreenData';
import { FullScreenBelowSM } from '../../../../../utils/Constant';

const FullScreenBelowSm = () => {
  const [fullScreenSm, setFullScreenSm] = useState<boolean>(false);
  const fullScreenSmToggle = () => setFullScreenSm(!fullScreenSm);

  return <CommonFullScreenData color="info" onClick={fullScreenSmToggle} title={FullScreenBelowSM} fullscreen="sm" isOpen={fullScreenSm} toggle={fullScreenSmToggle} />;
}

export default FullScreenBelowSm