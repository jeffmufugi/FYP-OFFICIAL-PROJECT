// Chatbott.jsx
import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from 'axios';
import ai from "./site_icons/ailogo.svg";
import ss from "./site_icons/send.svg";
import xx from "./site_icons/closer.svg";
import cc from "./site_icons/clearer.svg";
import ac from "./site_icons/atam.svg";
import { Context } from './App.jsx';
import { useMediaQuery } from 'react-responsive';


function Chat({ chatMessag }) {


  
  function ChatMessage({ message, sender }) {
    return (
      <>
        {sender === "robot" && (
          <div className="gpt" style={{ display: "flex", flexDirection: "row" }}>
            <img src={ac} alt="Bot" style={{ paddingRight: "10px" }} />
            <div style={{ padding: "5px", maxWidth: "300px", wordWrap: "break-word", marginBottom: "3px" }}>
              {message}
            </div>
          </div>
        )}
        {sender === "user" && (
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
            <div style={{ backgroundColor: "#D1D1D1", padding: "10px", borderRadius: "20px", maxWidth: "300px", wordWrap: "break-word", marginBottom: "3px" }}>
              {message}
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {chatMessag.map((msg) => (
        <ChatMessage message={msg.message} sender={msg.sender} key={msg.id} />
      ))}
    </>
  );
}

function Body({ chatMessag, setchatMessag, setChatBot }) {
  const [inputText, setInputText] = useState("");

  const saveInput = (event) => setInputText(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = async () => {
    try {
      // Add the user message first
      const newChatMessage = [...chatMessag, { message: inputText, sender: "user", id: crypto.randomUUID() }];
      setchatMessag(newChatMessage);
      setInputText("");

      // Send the user input to the backend API
      const res = await axios.post('https://fyp-official-project-server.vercel.app/ask/gpt', { message: inputText });
      const botResponse = res.data.message || "No response from server";
      
      // Update chat messages with the bot response
      setchatMessag(prevMessages => [...prevMessages, { message: botResponse, sender: "robot", id: crypto.randomUUID() }]);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const clearchat = () => setchatMessag([]);

  return (
    <motion.div
      className="chatbot"
      style={{ zIndex: 10 }}
      initial={{ opacity: 0, x:-30 }}
      animate={{ opacity: 1, x:0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.3 }}
    >
      <div className="header-cb" style={{ display: "flex", justifyContent: "space-between" }}>
        <img src={cc} alt="Clear Chat" onClick={clearchat} style={{ cursor: "pointer" }} />
        <img src={xx} onClick={setChatBot} style={{ cursor: "pointer",marginBottom:"3px" }} />
      </div>
      <section className="chatbody" style={{ overflowY: "auto"}}>
        <Chat chatMessag={chatMessag} />
      </section>
      <input type="text" onChange={saveInput} value={inputText} placeholder="Ask AI" onKeyDown={handleKeyDown} style={{ marginTop:"3px",touchAction: "manipulation",fontSize: "16px" }}/>
      <img src={ss} className="sendai" onClick={sendMessage} />
    </motion.div>
  );
}

export function Chatbott({ setChatBot, chatbot }) {
  const [chatMessag, setchatMessag] = useState([]);
  const [signedIn,setSignedIn] = useContext(Context);

  return (
    <>
      {signedIn === true && <DraggableIcon setChatBot={setChatBot} />}
      
      <AnimatePresence>
        {chatbot && (
          <Body chatMessag={chatMessag} setchatMessag={setchatMessag} setChatBot={setChatBot} />
        )}
      </AnimatePresence>
    </>
  );
}

export function DraggableIcon({ setChatBot, initialPosition = { x: 20, y: 385 } }) {
    const [position, setPosition] = useState(initialPosition);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
    const dragThreshold = 10; // Minimum pixels to consider it as a drag
  
    const constrainPosition = (pos) => ({
      x: Math.min(Math.max(pos.x, 0), window.innerWidth - 30),
      y: Math.min(Math.max(pos.y, 0), window.innerHeight - 30),
    });
  
    const handleMouseDown = (e) => {
      e.preventDefault();
      const rect = e.target.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setStartPosition({ x: e.clientX, y: e.clientY });
      setIsDragging(true);
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const newPosition = constrainPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
      setPosition(newPosition);
    };
  
    const handleMouseUp = (e) => {
      setIsDragging(false);
      const distanceMoved = Math.sqrt(
        Math.pow(e.clientX - startPosition.x, 2) +
        Math.pow(e.clientY - startPosition.y, 2)
      );
      if (distanceMoved < dragThreshold) {
        // If the movement is below the threshold, treat it as a click
        setChatBot();
      }
    };
  
    useEffect(() => {
      if (isDragging) {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
      } else {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      }
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }, [isDragging]);
    const isLargeScreen = useMediaQuery({ minWidth: 550 });
    return (

      <>
      
      
    {isLargeScreen && <img
    src={ai}
    onMouseDown={handleMouseDown}
    className="iconsrc"
    style={{ position: "absolute", left: position.x, top: position.y, cursor: "pointer", zIndex: 10,width:"30px" }}
  />}
      {!isLargeScreen && <img
    src={ai}
    onMouseDown={handleMouseDown}
    className="iconsrc"
    style={{ position: "absolute", left: "88%", top: "27%", zIndex: 10,width:"30px" }}
  />}
      
      
      </>
     
    );
  }