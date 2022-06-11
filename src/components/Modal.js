import "./Modal.css";

export default function Modal({ show, handler, children }) {
  var modal = show;
  console.log("modal: ", modal);

  // non-active scrolling
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
    {modal && (
      <div className="modal">
        <div className="overlay" /* onClick={handler} */></div>
        <div className="modal-content">
          {children}
          <button className="close-modal fas fa-times" onClick={handler}></button>
        </div>
      </div>
    )}
    </>
  );
}
