import React, { useState } from 'react';
import { Map, RotateCcw, Send, MessageSquare, X, Minimize2, Maximize2, Calendar } from 'lucide-react';

// Floating Chat Component
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
          className="bg-gray-600 text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
        >
          <MessageSquare size={24} />
        </button>
      )}
      
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl flex flex-col w-80 md:w-96 overflow-hidden transition-all">
          {/* Chat Header */}
          <div className="bg-gray-600 text-white p-3 flex justify-between items-center">
            <h3 className="font-medium">Consultation</h3>
            <div className="flex space-x-2">
              <button 
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-gray-700 p-1 rounded"
              >
                {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-gray-700 p-1 rounded"
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
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
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
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
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
                    className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                  <button 
                    className="bg-gray-600 text-white p-2 rounded-r-lg hover:bg-gray-700 transition-colors"
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

const CarbonValidate = () => {
  const [currentPage, setCurrentPage] = useState('input'); // 'input' or 'results'
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {currentPage === 'input' ? (
          <InputPage onVerify={() => setCurrentPage('results')} />
        ) : (
          <ResultsPage />
        )}
      </div>
      
      {/* Only show the floating chat on the results page */}
      {currentPage === 'results' && <FloatingChat />}
    </div>
  );
};

const InputPage = ({ onVerify }) => {
  const [step, setStep] = useState(1); // Step 1: Draw Area, Step 2: Specify Years, Step 3: Enter Data
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const [yearRange, setYearRange] = useState([]);
  const [carbonData, setCarbonData] = useState({});

  // Process the year range input and generate year array
  const processYearRange = () => {
    if (!startYear || !endYear) {
      alert('Please enter both start and end years');
      return;
    }

    const start = parseInt(startYear);
    const end = parseInt(endYear);
    
    if (isNaN(start) || isNaN(end)) {
      alert('Please enter valid years');
      return;
    }
    
    if (start > end) {
      alert('Start year must be before or equal to end year');
      return;
    }
    
    if (end - start > 10) {
      alert('Please limit your data range to 10 years or less');
      return;
    }
    
    const years = [];
    for (let year = start; year <= end; year++) {
      years.push(year);
    }
    
    setYearRange(years);
    
    // Initialize carbon data object with empty values
    const initialData = {};
    years.forEach(year => {
      initialData[year] = '';
    });
    setCarbonData(initialData);
    
    setStep(3);
  };

  // Update carbon data for a specific year
  const updateCarbonData = (year, value) => {
    setCarbonData(prevData => ({
      ...prevData,
      [year]: value
    }));
  };

  return (
    <div>
      {/* Map Selection Area - Always visible */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-2">Select Area</h2>
        <div className="bg-gray-200 h-64 rounded flex items-center justify-center">
          <div className="text-gray-600 flex items-center">
            <Map className="mr-2" size={20} />
            Interactive Map Area
          </div>
        </div>
        <div className="mt-3 flex space-x-3">
          <button 
            className={`${step >= 1 ? 'bg-gray-800 text-white' : 'bg-gray-300 text-gray-600'} px-4 py-2 rounded flex items-center`}
            onClick={() => setStep(1)}
          >
            <Map size={16} className="mr-2" />
            Draw Area
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded flex items-center">
            <RotateCcw size={16} className="mr-2" />
            Reset
          </button>
        </div>
      </section>
      
      {/* Step 2: Year Range Selection */}
      {step >= 2 && (
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4">Specify Data Period</h2>
          <div className="bg-white p-6 rounded shadow-sm">
            <p className="text-gray-600 mb-4">What years do you have carbon absorption data for?</p>
            
            <div className="flex flex-wrap items-center mb-4">
              <div className="w-full md:w-auto flex items-center mb-4 md:mb-0">
                <label className="mr-2 font-medium">From:</label>
                <div className="relative">
                  <div className="flex border border-gray-300 rounded">
                    <span className="inline-flex items-center px-3 bg-gray-50 border-r border-gray-300 text-gray-500">
                      <Calendar size={18} />
                    </span>
                    <input
                      type="text"
                      placeholder="Start Year"
                      value={startYear}
                      onChange={(e) => setStartYear(e.target.value)}
                      className="w-24 p-2 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-auto flex items-center md:ml-4">
                <label className="mr-2 font-medium">To:</label>
                <div className="relative">
                  <div className="flex border border-gray-300 rounded">
                    <span className="inline-flex items-center px-3 bg-gray-50 border-r border-gray-300 text-gray-500">
                      <Calendar size={18} />
                    </span>
                    <input
                      type="text"
                      placeholder="End Year"
                      value={endYear}
                      onChange={(e) => setEndYear(e.target.value)}
                      className="w-24 p-2 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button 
                onClick={processYearRange}
                className="bg-gray-800 text-white px-4 py-2 rounded"
              >
                Continue
              </button>
            </div>
          </div>
        </section>
      )}
      
      {/* Step 3: Carbon Data Input */}
      {step >= 3 && yearRange.length > 0 && (
        <section>
          <h2 className="text-lg font-bold mb-4">Claimed Carbon Absorption Input</h2>
          <div className="bg-white p-6 rounded shadow-sm mb-6">
            <p className="text-gray-600 mb-4">Enter the carbon absorption values for each year (in tons of CO₂e):</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {yearRange.map(year => (
                <div key={year} className="flex items-center">
                  <label className="w-20 font-medium">{year}:</label>
                  <input
                    type="text"
                    value={carbonData[year]}
                    onChange={(e) => updateCarbonData(year, e.target.value)}
                    placeholder="Carbon absorption (ton)"
                    className="flex-1 p-2 border border-gray-300 rounded"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={onVerify}
            className="w-full bg-gray-800 text-white py-3 rounded mt-2 font-medium">
            Verify Data
          </button>
        </section>
      )}
      
      {/* Initial Step Button - Only show if we're on step 1 */}
      {step === 1 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setStep(2)}
            className="bg-gray-800 text-white px-6 py-3 rounded font-medium inline-flex items-center"
          >
            Next: Specify Data Period
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

const ResultsPage = () => {
  return (
    <div>
      {/* Analysis Results Section */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4">Analysis Results</h2>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <div className="bg-gray-200 p-4 rounded">
              <h3 className="text-sm font-medium mb-2 text-center">Land Cover Distribution</h3>
              <div className="h-48 flex items-center justify-center text-gray-600">
                IC Line Chart
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 px-2 mb-4">
            <div className="bg-gray-100 p-4 rounded">
              <div className="mb-2">
                <div className="flex justify-between font-medium text-sm">
                  <span>Land Cover Type</span>
                  <span>Area (Ha)</span>
                  <span>Carbon (ton)</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Secondary Forest (Drained)</span>
                  <span>120.5</span>
                  <span>245.8</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Secondary Forest (Restored)</span>
                  <span>85.3</span>
                  <span>176.2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Model Verification Section */}
      <section className="mb-8">
        <h2 className="text-lg font-bold mb-4">Model Verification</h2>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4">
            <div>
              <h3 className="text-sm font-medium">User Input</h3>
              <p className="text-3xl font-bold">245.8 ton</p>
              <p className="text-sm text-orange-500">Total Carbon Absorption</p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 px-2 mb-4">
            <div>
              <h3 className="text-sm font-medium">Model Prediction</h3>
              <p className="text-3xl font-bold">251.2 ton</p>
              <p className="text-sm text-green-600">Total Carbon Absorption</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarbonValidate;