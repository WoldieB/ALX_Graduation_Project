import React from "react";
import "./ChatImg.css";
function ChatImg() {
  const fun_click = () => {
    var link_chat = document.getElementById("wccht");
    link_chat.href =
      "https://api.telegram";
  };
  return (
    <div className="chat_section">
      <div className="whatsapp_chat" id="wccht" onClick={fun_click}>
        <img
          src="https://t.me//balcha"
          alt=""
        />
      </div>
    </div>
  );
}

export default ChatImg;
