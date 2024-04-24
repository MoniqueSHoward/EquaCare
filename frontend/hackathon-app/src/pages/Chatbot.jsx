import React from 'react';
import { ReactChatbot } from "@vectara/react-chatbot"; 
import Logo from "../assets/images/equacare.png";
import Navbar from "../components/Navbar";
import Card from "../components/Card"

export const Chatbot = () => {

  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <h1
              style={{ color: "#156082", fontWeight: "bold", fontSize: "40px" }}
            >
              EquaCare
            </h1>
            <p style={{ fontSize: "20px" }}>
              Providing equal access to healthcare for patients who find social
              interactions challenging
            </p>
            <img src={Logo} alt="" style={{ width: "300px", height: "auto" }} />
          </div>
        </div>
      </div>
      <ReactChatbot
        customerId="29746375"
        corpusIds={["3"]}
        apiKey="zut_AcXkxxBdbcnL8hVb7n9sSK2ZDdjxFk6ukQsCvg"
        title="Chat with EquaCare"
        placeholder='Type your Queries?'
        inputSize="large"
        enableStreaming={true}
        language="eng"
        emptyStateDisplay={<Card/>} 
      >
        
      </ReactChatbot>
    </div>
  );
};

export default Chatbot;
