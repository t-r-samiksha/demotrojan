"use client";
import React, { use, useState } from "react";
import { useSpring, animated } from "react-spring";
import Modal from "react-modal";
import RegisterEvent from "../../Pages/event_register/RegistrationForm";
import "./Event_page.css";
import "./btn_module.css";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import 'react-toastify/dist/ReactToastify.css';
import zIndex from "@mui/material/styles/zIndex";
import Rules from "./Rules/Rules";


const customStyles = {
  content: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    margin: "0",
    padding: "0",
    //  backdropFilter: "blur(5px)",
    //  background:"rgba(0,0,0,0.5)",
    background: "linear-gradient(135deg, #191970, #b76e79)", // Semi-transparent black background
    color: "#fff",
    border: "none", // Remove any borders
    borderRadius: "0", // Remove rounded corners
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "none",
    zIndex:"1",
  },
};

const overlayStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.85)", // Slightly darker overlay for full-screen effect
    zIndex: "1000", // Ensure it is on top of other elements
  },
};

const buttonStyles = {
  zIndex: "1000",
  width: "120px",
  color: "#fff",
  cursor: "pointer",
  padding: "7px",
  background: "#f857a6",
  background: "-webkit-linear-gradient(to right, #ff5858, #f857a6)",
  background:
    "-webkit-gradient(linear, left top, right top, from(#ff5858), to(#f857a6))",
  background: "-webkit-linear-gradient(left, #ff5858, #f857a6)",
  background: "-o-linear-gradient(left, #ff5858, #f857a6)",
  background: "linear-gradient(to right, #ff5858, #f857a6)",
  borderRadius: "5px",
  transition: "200ms ease-out",
  boxShadow: "0 0 90px #fa3380",
  WebkitBoxShadow: "0 0 90px #fa3380",

  hover: {
    WebkitBoxShadow: "0 0 10px #fa3380",
    boxShadow: "0 0 10px #fa3380",
  },
};

Modal.setAppElement("#root");

export function Card({ imagen, title, time,category,fee,isFirstSubmissionMain,handleIsFirstSubmission,setIsFirstSubmissionMain ,userId, eventsRegistered, setEventsRegistered }) {
  const [show, setShown] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false); //Rules page setupp...
  
  const handleRules=()=>{
    setShowPopup(prevState => !prevState);
  }

  const showToast = (message) => {
    const toastId = toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setTimeout(() => {
      toast.dismiss(toastId);
    }, 5000);
  };
  const cardAnimation = useSpring({
    opacity: 1,
    transform: show ? "scale(1.05)" : "scale(1)",
    boxShadow: show
      ? "0 20px 30px rgba(0, 0, 0, 0.25)"
      : "0 2px 10px rgba(0, 0, 0, 0.08)",
  });

    function openModal({ title }) {
     console.log(userId);
    if(userId === " " || userId === null || userId===""){
      toast.error("Please login to register for the event.");
      return;
    }
    console.log(title);
    if (isFirstSubmissionMain) {
      setIsOpen(true); 
    } else {
      try {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/registered/register-event`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_id: userId, event_name: title  }),
        })
          .then(async (response) => {
            if (response.ok) {
              const res= await response.json();
              setIsFirstSubmissionMain(false);
              setEventsRegistered(res.user.events);
              console.log(eventsRegistered)
              toast.success("Registered for the event successfully!");
            } else {
              console.error("Failed to register for events.");
              toast.error("Failed to register for the event. Please try again.");
            }
          })
          .catch((error) => {
            console.error("Error registering for events:", error);
            toast.error("An error occurred while registering. Please try again.");
          });
      } catch (error) {
        console.error("Unexpected error:", error);
        toast.error("An unexpected error occurred.");
      }
    }
  }
  
  function closeModal() {
    setIsOpen(false);
  }

  function handleFormSubmit(isFirstTime) {
    if (isFirstTime) {
      openModal();
      
      handleIsFirstSubmission(false);
      
    } else {
      toast.success("You have registered the event successfully !"); 
    }
  }

  return (
    <>
      <animated.div
        className="card"
        style={cardAnimation}
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}
      >
        <img src={imagen} alt={title} className="card-image" />
        <h2 className="card-title">{title}</h2>
        <div className="event-details"> 
        <p><strong/>Time: {time}</p>
        <p><strong/>Entry Fee: {fee}</p>
        <p><strong/>Category: {category}</p>
      </div>

        <div className="btnn">
          <button className="btn" onClick={() => openModal({ title })}
            disabled={eventsRegistered.includes(title)}
            
            >
            Register
          </button>
          <button className="btn" onClick={()=>{handleRules()}}>Info</button>
        </div>
      </animated.div>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        overlayClassName={overlayStyles.overlay}
        contentLabel="Register Modal"
      >
        <RegisterEvent closeModal={closeModal} showToast={showToast} 
                      userId={userId}  setEventsRegistered={setEventsRegistered}
                      event={title} isFirstSubmissionMain={isFirstSubmissionMain}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <button className="btn" onClick={closeModal} style={buttonStyles}>
            Close
          </button>
        </div>
      </Modal>
      <Modal isOpen={showPopup}  onRequestClose={handleRules} style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dimmed background
          pointerEvents:'none'
          
        },
        content: {
          background: 'transparent', // Transparent content background
          border: 'none', // Optional: Remove border if needed
          pointerEvents:'auto'
        }
      }}><Rules title={title} showPopup={showPopup} handleRules={handleRules}/></Modal>
    </>
  );
}

export default Card;