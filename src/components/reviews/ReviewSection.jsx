import NewReview from "./NewReview";
import { useState } from "react";

const ReviewSection = () => {
  const [showNewReview, setShowNewReview] = useState(false);

  const handleShow = () => setShowNewReview(true);
  const handleClose = () => setShowNewReview(false);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        
        <div className="">
          <button className="btn btn-primary" onClick={handleShow}>
            הוסף דירוג
          </button>
        </div>
      </div>
      {showNewReview && (
        <div
          className="modal show fade"
          tabIndex="-1"
          style={{
            display: "block",
            background: "rgba(0,0,0,0.5)",
            zIndex: 1050,
          }}
          onClick={handleClose}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <div className="d-flex justify-content-between align-items-center w-100">
                  {/* Place the X button on the left */}
                  <div>
                    <button
                      type="button"
                      className="btn-close ms-0"
                      aria-label="Close"
                      onClick={handleClose}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-body">
                <NewReview />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewSection;