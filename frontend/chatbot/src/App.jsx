import React, { useState } from 'react'
import axios from 'axios';

const App = () => {
  const [message, setmessage] = useState([]);
  const [input, setinput] = useState("");
  const [loader, setloader] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;
  const handleSendMessage =async()=>{
    setloader(true);
    if(!input.trim()) return;
    try{
      const res =await axios.post(`${API_URL}/bot/v1`,{
        text:input
      })
      if(res.status===200){
        setmessage([...message,{text:res.data.userMessage,sender:'user'},{text:res.data.botMessage,sender:'bot'}]);
      }
      console.log(res.data);
    }catch(err){
      console.log(err);  
    }
    setinput("");
    setloader(false);
  }
  const handlekeypress=(e)=>{
    if(e.key=='Enter') handleSendMessage()
  }
  return (
    <div className="h-screen bg-[#0d0d0d] text-white flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full border-b border-gray-800 bg-[#0d0d0d] z-10">
        <div className="max-w-4xl mx-auto flex justify-center items-center px-6 py-4">
          <h1 className="text-lg font-bold">Chatbot Spaloop</h1>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto pt-20 pb-28">
        <div className="max-w-4xl mx-auto px-4 flex flex-col gap-3">
          {message.length === 0 ? (
            <div className="text-center text-gray-400 text-lg mt-20">
              👋 Hi, I'm{" "}
              <span className="text-green-500 font-semibold">
                Chatbot
              </span>.
            </div>
          ) : (
            <>
              {message.map((msg, idx) => (
                <div
                  key={idx}
                  className={`px-4 py-3 rounded-2xl max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-blue-600 self-end text-white"
                      : "bg-gray-800 self-start text-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              ))}

              {loader && (
                <div className="bg-gray-700 text-gray-300 px-4 py-2 rounded-xl max-w-[60%] self-start">
                  Enter Text 
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full border-t border-gray-800 bg-[#0d0d0d] z-10">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center bg-gray-900 rounded-full px-4 py-2 shadow-lg">
            <input
              type="text"
              placeholder="Ask Questions ....."
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
              value={input}
              onChange={(e)=>setinput(e.target.value)}
              onKeyDown={handlekeypress}
            />

            <button className="ml-3 bg-green-600 hover:bg-green-700 px-5 py-2 rounded-full text-white font-medium transition-colors"
            onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App