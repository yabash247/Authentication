import Swal from "sweetalert2";
import { Btn } from "../../../../AbstractElements";
import { SelectInput } from "../../../../utils/Constant";

const SelectInputBtn = () => {
  const displayAlert = () => {
    const { value: fruit }:any = Swal.fire({
      title: "Select field validation",
      input: "select",
      inputOptions: {
        Fruits: {
          apples: "Apples",
          bananas: "Bananas",
          grapes: "Grapes",
          oranges: "Oranges"
        },
        Vegetables: {
          potato: "Potato",
          broccoli: "Broccoli",
          carrot: "Carrot"
        },
        icecream: "Ice cream"
      },
      inputPlaceholder: "Select a fruit",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === "oranges") {
            resolve();
          } else {
            resolve("You need to select oranges :)");
          }
        });
      }
    });
    if (fruit) {
      Swal.fire(`You selected: ${fruit}`);
    }
  }
  return (
    <Btn color="primary" className="sweet-26" onClick={displayAlert}>
      {SelectInput}
    </Btn>
  );
};

export default SelectInputBtn;
