import React, { useState } from 'react';
import { MessageSquare, X, Send, Minimize2, Maximize2 } from 'lucide-react';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <MessageSquare size={24} />
        </button>
      )}
      
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl flex flex-col w-80 md:w-96 overflow-hidden transition-all">
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <h3 className="font-medium">Consultation</h3>
            <div className="flex space-x-2">
              <button 
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-blue-700 p-1 rounded"
              >
                {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-blue-700 p-1 rounded"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          
          {/* Chat Body */}
          {!isMinimized && (
            <>
              <div className="flex-1 p-3 overflow-y-auto h-80 bg-gray-50">
                <div className="space-y-3">
                  {/* AI Message 1 */}
                  <div className="flex items-start max-w-full">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <polygon points="13 2 3 14 12 14 15 22 21 10 10 10 13 2"></polygon>
                      </svg>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm mr-12 text-sm">
                      Based on our analysis of the claimed carbon sequestration values, we do not detect any potential fraud indicators as the carbon absorption values show high consistency. Additionally, the annual carbon sequestration trend demonstrates a linear progression, which aligns with expected natural growth patterns for these land cover types. The minimal variance between your reported values and our predictive model (2.2%) falls well within acceptable thresholds for measurement variation.
                    </div>
                  </div>
                  
                  {/* AI Message 2 */}
                  <div className="flex items-start max-w-full">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <polygon points="13 2 3 14 12 14 15 22 21 10 10 10 13 2"></polygon>
                      </svg>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm mr-12 text-sm">
                      Do you have any additional questions about this assessment?
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Chat Input */}
              <div className="p-3 border-t">
                <div className="flex items-center">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button 
                    className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 transition-colors"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default FloatingChat;