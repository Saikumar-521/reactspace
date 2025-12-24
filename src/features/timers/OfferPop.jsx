import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

const OfferPop = ({ endDate, show, onClose }) => {
  const calculateTimeLeft = () => {
    const diff = new Date(endDate) - new Date();
    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [user, setUser] = useState({ username: "", password: "" });

  useEffect(() => {
    if (!show) return;

    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);

      if (!updated) {
        clearInterval(timer);
        onClose();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate, show, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Offer applied successfully!");
    // <Snowfall color="red"/>
    onClose();
  };

  if (!show || !timeLeft) return null;

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
      tabIndex="-1"
      role="dialog"
    >
        <Snowfall color={['red','blue','green']}/>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">

          {/* Modal Header */}
          <div className="modal-header">
            <h5 className="modal-title text-primary text-center ps-5 fw-bold">
              🔥 Limited Time Offer
            </h5>
            {/* <button type="button" className="btn-close" onClick={onClose}></button> */}
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            <p className="fw-semibold">
              Offer ends in{" "}
              <span className="text-success">
                {timeLeft.days}d{" "}
                {String(timeLeft.hours).padStart(2, "0")}:
                {String(timeLeft.minutes).padStart(2, "0")}:
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Username"
                value={user.username}
                onChange={(e) =>
                  setUser({ ...user, username: e.target.value })
                }
                required
              />

              <input
                type="password"
                className="form-control mb-3"
                placeholder="Password"
                value={user.password}
                onChange={(e) =>
                  setUser({ ...user, password: e.target.value })
                }
                required
              />

              <button className="btn btn-success w-100">
                Apply Offer
              </button>
            </form>
          </div>

          {/* Modal Footer */}
          {/* <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Skip
            </button>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default OfferPop;
