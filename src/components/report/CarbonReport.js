import React, { useState } from 'react';
import { Settings, Download, Plus, Map, ZoomIn, ZoomOut, Calendar, ChevronDown } from 'lucide-react';

const CarbonReport = () => {
  const [selectedYear, setSelectedYear] = useState({
    left: 2020,
    right: 2025
  });
  const [leftYearOpen, setLeftYearOpen] = useState(false);
  const [rightYearOpen, setRightYearOpen] = useState(false);
  
  const availableYears = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

  const selectLeftYear = (year) => {
    setSelectedYear({...selectedYear, left: year});
    setLeftYearOpen(false);
  };

  const selectRightYear = (year) => {
    setSelectedYear({...selectedYear, right: year});
    setRightYearOpen(false);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center">
          <div className="font-bold mr-2">|||</div>
          <h1 className="font-bold">Carbon Map Compare</h1>
        </div>
        <div className="flex items-center">
          <button className="flex items-center bg-gray-800 text-white px-4 py-2 rounded mr-2">
            <Map size={16} className="mr-2" />
            Draw Area
          </button>
          <button>
            <Settings size={20} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Map Content */}
        <div className="flex-1 flex">
          {/* Left Panel */}
          <div className="w-1/2 border-r relative bg-gray-100">
            <div className="absolute top-4 left-4 z-10">
              <div className="relative">
                <button 
                  onClick={() => setLeftYearOpen(!leftYearOpen)}
                  className="bg-white py-1 px-3 rounded font-semibold flex items-center"
                >
                  <Calendar size={16} className="mr-2 text-gray-600" />
                  {selectedYear.left}
                  <ChevronDown size={16} className="ml-2 text-gray-600" />
                </button>
                
                {leftYearOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg w-36 z-20">
                    {availableYears.map(year => (
                      <button 
                        key={year}
                        onClick={() => selectLeftYear(year)}
                        className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${year === selectedYear.left ? 'bg-gray-100 font-medium' : ''}`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center">
              <Plus size={20} />
            </button>
          </div>

          {/* Right Panel */}
          <div className="w-1/2 relative bg-gray-100">
            <div className="absolute top-4 left-4 z-10">
              <div className="relative">
                <button 
                  onClick={() => setRightYearOpen(!rightYearOpen)}
                  className="bg-white py-1 px-3 rounded font-semibold flex items-center"
                >
                  <Calendar size={16} className="mr-2 text-gray-600" />
                  {selectedYear.right}
                  <ChevronDown size={16} className="ml-2 text-gray-600" />
                </button>
                
                {rightYearOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg w-36 z-20">
                    {availableYears.map(year => (
                      <button 
                        key={year}
                        onClick={() => selectRightYear(year)}
                        className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${year === selectedYear.right ? 'bg-gray-100 font-medium' : ''}`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white rounded p-1 flex">
              <button className="p-1">
                <ZoomOut size={18} />
              </button>
              <button className="p-1">
                <ZoomIn size={18} />
              </button>
            </div>
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center">
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-64 border-l">
          <div className="p-4">
            <h2 className="font-semibold mb-2">Map Layers</h2>
            <div className="mb-4">
              <div className="flex items-center mb-1">
                <input type="checkbox" defaultChecked className="mr-2" />
                <label>Carbon Absorption</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" defaultChecked className="mr-2" />
                <label>Land Cover</label>
              </div>
            </div>

            <h2 className="font-semibold mb-2">Area Statistics</h2>
            
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-600">Carbon Absorption</h3>
              <div className="flex justify-between text-sm my-1">
                <span className="text-gray-600">{selectedYear.left}</span>
                <span>245.3 tC/ha</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{selectedYear.right}</span>
                <span>238.7 tC/ha</span>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-600">Land Cover Change</h3>
              <div className="flex justify-between text-sm my-1">
                <span>Forest</span>
                <span className="text-red-500">-2.3%</span>
              </div>
              <div className="flex justify-between text-sm my-1">
                <span>Agriculture</span>
                <span className="text-green-500">+1.8%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Urban</span>
                <span className="text-green-500">+0.5%</span>
              </div>
            </div>

            <button className="w-full bg-gray-800 text-white py-2 rounded flex items-center justify-center">
              <Download size={16} className="mr-2" />
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-2 text-center text-sm text-gray-500 border-t">
        Map View
      </div>
    </div>
  );
};

export default CarbonReport;