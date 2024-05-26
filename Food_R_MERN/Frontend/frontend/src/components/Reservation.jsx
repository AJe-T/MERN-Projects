import { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [obj, setObj] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    time: "",
    date: "",
  });

  const { firstName, lastName, email, phone, time, date } = obj;
  const navigate = useNavigate();

  const updateInput = (event) => {
    setObj({
      ...obj,
      [event.target.name]: event.target.value,
    });
  };

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/reservation/send",
        { firstName, lastName, email, phone, time, date },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.success) {
        toast.success(data.message);
        navigate("/success");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <section id="reservation" className="reservation">
        <div className="container">
          {/* <pre>{JSON.stringify(obj)}</pre> */}
          <div className="banner">
            <img src="/reservation.png" alt="reservation" />
          </div>
          <div className="banner">
            <div className="reservation_form_box">
              <h1>MAKE A RESERVATION</h1>
              <p>For further Questions, plz Call </p>
              <form>
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => {
                      updateInput(e);
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => {
                      updateInput(e);
                    }}
                  />
                </div>
                <div>
                  <input
                    type="date"
                    placeholder="Date"
                    name="date"
                    value={date}
                    onChange={(e) => {
                      updateInput(e);
                    }}
                  />
                  <input
                    type="time"
                    placeholder="Time"
                    name="time"
                    value={time}
                    onChange={(e) => {
                      updateInput(e);
                    }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="email_tag"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      updateInput(e);
                    }}
                  />
                  <input
                    type="number"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => {
                      updateInput(e);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  onClick={(e) => {
                    handleReservation(e);
                  }}
                >
                  RESERVE NOW
                  <span>
                    <HiOutlineArrowNarrowRight />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservation;
