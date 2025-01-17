import CommonModal from "../../Common/CommonModal";
import WebDesign from "./WebDesign";
import UXDesigner from "./UXDesigner";
import { Btn } from "../../../../../AbstractElements";
import { CommonFullScreenDataType } from "../../../../../Type/Ui-Kits/UiKitsTypes";

const CommonFullScreenData:React.FC<CommonFullScreenDataType> = ({ color, onClick, title, fullscreen, isOpen, toggle }) => {
  return (
    <>
      <Btn outline color={color} onClick={onClick}>{title}</Btn>
      <CommonModal fullscreen={fullscreen} modalTitleClassName="fs-5" fullTitle={title} isOpen={isOpen} toggle={toggle} modalBodyClassName="dark-modal">
        <WebDesign />
        <UXDesigner />
      </CommonModal>
    </>
  );
};

export default CommonFullScreenData;