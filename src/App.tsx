import React, { useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import GeneticRiskAssessment from "./pages/GeneticRiskAssessment";
import "./App.scss";
import Header from "./sharedComponents/Header";
import Footer from "./sharedComponents/Footer";
import Report from "./pages/Report";
import { Button, ConfigProvider, theme } from "antd";
import ChatIcon from "./assets/chatIcon.svg";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { chatGPTMockResponse } from "./chatGPTMockResponse";
import UncoverYourRiskPage from "./pages/UncoverYourRiskPage";

function App() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleSendRequest = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const tmpMessage = [...messages, newMessage];
    setMessages(tmpMessage as any);
    setIsTyping(true);

    try {
      const response = await processMessageToChatGPT([...messages, newMessage]);
      const content = response.choices[0]?.message?.content;
      if (content) {
        const chatGPTResponse = {
          message: content,
          sender: "ChatGPT",
        };
        const tmpMessage = [...messages, chatGPTResponse];
        setMessages(tmpMessage as any);
      }
    } catch (error) {
      if (newMessage.message.includes("prevent cancer")) {
        const tmpMessage = [
          ...messages,
          {
            ...newMessage,
          },
          {
            message: chatGPTMockResponse["how to prevent cancer"],
            sendor: "ChatGPT",
          },
        ];
        setMessages(tmpMessage as any);
      } else if (
        newMessage.message.includes("schedule an appointment") ||
        newMessage.message.includes("schedule")
      ) {
        const tmpMessage = [
          ...messages,
          {
            ...newMessage,
          },
          {
            message: chatGPTMockResponse["schedule an appointment"],
            sendor: "ChatGPT",
          },
        ];
        setMessages(tmpMessage as any);
      } else {
        const tmpMessage = [
          ...messages,
          {
            ...newMessage,
          },
          {
            message: `echo: ${newMessage.message}`,
            sendor: "ChatGPT",
          },
        ];
        setMessages(tmpMessage as any);
      }
      console.error("Error processing message:", error);
    } finally {
      setIsTyping(false);
    }
  };

  async function processMessageToChatGPT(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
      const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "I'm a Student using ChatGPT for learning" },
        ...apiMessages,
      ],
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + "API_KEY",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    });

    return response.json();
  }

  return (
    <ConfigProvider
      theme={{
        // 1. Use dark algorithm
        // algorithm: theme.darkAlgorithm,
        algorithm: theme.defaultAlgorithm,

        // 2. Combine dark algorithm and compact algorithm
        // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Router>
          <Header></Header>
          <Routes>
            <Route
              path="/uncover-your-risk"
              element={<UncoverYourRiskPage />}
            ></Route>
            <Route path="/all-about-cancer" element={<HomePage />}></Route>
            <Route
              path="/risk-accessment"
              element={<GeneticRiskAssessment />}
            ></Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/report" element={<Report gender="male" />}></Route>
          </Routes>
        </Router>

        <div
          style={{
            position: "fixed",
            // width: "100%",
            // textAlign: "right",
            paddingRight: "32px",
            bottom: "110px",
            right: "20px",
          }}
        >
          {showMessage ? (
            <div
              style={{
                position: "absolute",
                height: "500px",
                width: "350px",
                bottom: "60px",
                right: "20px",
              }}
            >
              <MainContainer>
                <ChatContainer>
                  <MessageList
                    scrollBehavior="smooth"
                    typingIndicator={
                      isTyping ? (
                        <TypingIndicator content="ChatGPT is typing" />
                      ) : null
                    }
                  >
                    {messages.map((message, i) => {
                      console.log(message);
                      //@ts-expect-error
                      return <Message key={i} model={message} />;
                    })}
                  </MessageList>
                  <MessageInput
                    placeholder="Send a Message"
                    onSend={handleSendRequest}
                  />
                </ChatContainer>
              </MainContainer>
            </div>
          ) : null}
          <img
            src={ChatIcon}
            alt="chat-icon"
            style={{ cursor: "pointer" }}
            onClick={() => setShowMessage(!showMessage)}
          ></img>
        </div>
        <Footer></Footer>
      </div>
    </ConfigProvider>
  );
}

export default App;
