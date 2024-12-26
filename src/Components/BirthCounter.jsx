import { useSelector, useDispatch } from "react-redux";
import { AddYearAction, DeleteYearAction } from "../Redux/ActionTypes/Actions";
import "../Style/BirthCounterStyle.css"; // استيراد ملف الـ CSS

function BirthCounter() {
  const state = useSelector((state) => state.age);
  const Dispatch = useDispatch();

  const AddYear = () => {
    Dispatch(AddYearAction());
  };

  const DeleteYear = () => {
    Dispatch(DeleteYearAction());
  };

  return (
    <div className="counter-container">
      <h1>Age Counter</h1> {/* العنوان */}
      <p>Click the buttons to increase or decrease your age.</p>
      <h2>{state} years old</h2> {/* عرض العمر */}
      <div>
        <button
          onClick={() => {
            AddYear();
          }}
        >
          Add Year
        </button>
        <button
          onClick={() => {
            DeleteYear();
          }}
        >
          Delete Year
        </button>
      </div>
    </div>
  );
}

export default BirthCounter;
