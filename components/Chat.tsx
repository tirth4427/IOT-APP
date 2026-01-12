
import React, { useState, useEffect, useRef } from 'react';
import { Message } from '../types';

interface ChatProps {
  messages: Message[];
  onSendMessage: (text: string) => void;
  currentUser: { id: string, name: string };
  recipientName: string;
  onBack: () => void;
}

const Chat: React.FC<ChatProps> = ({ messages, onSendMessage, currentUser, recipientName, onBack }) => {
  const [text, setText] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  const handleSend = () => {
    if (!text.trim()) return;
    onSendMessage(text);
    setText('');
  };

  return (
    <div className="fixed inset-0 z-[60] bg-white flex flex-col max-w-md mx-auto">
      <header className="p-4 border-b border-slate-100 flex items-center gap-4">
        <button onClick={onBack} className="text-slate-400 text-xl"><i className="fa-solid fa-chevron-left"></i></button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600">
            {recipientName.charAt(0)}
          </div>
          <div>
            <h3 className="font-bold text-slate-800 leading-none">{recipientName}</h3>
            <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Online</span>
          </div>
        </div>
      </header>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50">
        {messages.map(m => {
          const isMe = m.senderId === currentUser.id;
          return (
            <div key={m.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm shadow-sm ${
                isMe ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-slate-800 rounded-tl-none'
              }`}>
                {m.text}
                <div className={`text-[8px] mt-1 font-bold uppercase ${isMe ? 'text-blue-200' : 'text-slate-400'}`}>
                  {m.timestamp}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
        <input 
          type="text" 
          placeholder="Message..." 
          className="flex-1 bg-slate-100 rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button 
          onClick={handleSend}
          className="bg-blue-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg active:scale-90 transition-transform"
        >
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};

export default Chat;
