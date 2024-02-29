import { useState } from "react";
import { NavLink } from "react-router-dom";

function EditModal({ remove, id }) {
  const [open,SetOpen]=useState(false)
  return (
    <div>
      <NavLink className="btn btn-primary mx-4" to={`/edit/${id}`}>Edit</NavLink>
      <button
        className="btn btn-error"
        onClick={() => SetOpen(true)}
      >
        Delete
      </button>
    {open&&  <dialog id="my_modal_2" className="modal modal-open">
        <div className="modal-box">
          <h3 className="font-bold text-lg">ARE YOU SURE TO DELETE</h3>
          <button className="btn btn-error" onClick={() => remove(id)}>
            CONFIRM
          </button>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button
          onClick={()=>SetOpen(prev=>!prev)}
          >
            
            close</button>
        </form>
      </dialog>}
    </div>
  );
}

export default EditModal;
