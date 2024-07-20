import { Btn } from "../../../../AbstractElements";
import { BottomRightBtn } from "../../../../utils/Constant";
import SweetAlert from "sweetalert2";

const BottomRight = () => {
  const displayAlert = () => {
    SweetAlert.fire({
      position: "bottom-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  };
  return (
    <Btn color="tertiary" className="sweet-19" onClick={displayAlert}>
      {BottomRightBtn}
    </Btn>
  );
};

export default BottomRight;
