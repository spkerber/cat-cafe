import React from 'react';

const Schematic = () => {
  return (
    <div className="prose prose-stone max-w-none mx-auto">
      <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-md p-8">
        {/* Title Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-stone-800 dark:text-neutral-200 mb-4">Technical Drawings</h2>
          <p className="text-stone-600 dark:text-neutral-400">Architectural specifications for the WM Cafe construction.</p>
        </div>
        
        {/* SVG Container */}
        <div className="mb-8 bg-stone-50 dark:bg-neutral-800 p-6 rounded-lg border border-stone-200 dark:border-neutral-700 overflow-x-auto">
          <div className="min-w-[800px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" className="w-full h-auto dark:text-neutral-200">
              {/* Title Block */}
              <g transform="translate(700,50)">
                <rect x="0" y="0" width="250" height="150" fill="none" stroke="currentColor" strokeWidth="1"/>
                <text x="125" y="30" fontSize="14" fontWeight="bold" textAnchor="middle" className="fill-current">WABI-SABI CAT CAFÉ</text>
                <text x="125" y="50" fontSize="10" textAnchor="middle" className="fill-current">Project No: CC-2024-001</text>
                <text x="125" y="70" fontSize="10" textAnchor="middle" className="fill-current">Scale: 1:8</text>
                <text x="125" y="90" fontSize="10" textAnchor="middle" className="fill-current">Date: 2024.12.20</text>
                <text x="125" y="110" fontSize="10" textAnchor="middle" className="fill-current">Sheet: 1 of 1</text>
                <text x="125" y="130" fontSize="10" textAnchor="middle" className="fill-current">Client: Distinguished Cat</text>
              </g>

              {/* Front Elevation */}
              <g transform="translate(50,50)">
                {/* Grid and guides */}
                <path d="M0,0 H300 M0,50 H300 M0,100 H300 M0,150 H300 M0,200 H300" 
                      stroke="#ddd" strokeWidth="0.5" className="dark:stroke-neutral-700"/>
                
                {/* Main structure */}
                <rect x="20" y="20" width="260" height="160" fill="none" stroke="currentColor" strokeWidth="2"/>
                
                {/* Material Layers Detail */}
                <path d="M15,15 L25,15 L25,25 L15,25 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <text x="30" y="22" fontSize="8" className="fill-current">Material Layers:</text>
                <text x="30" y="32" fontSize="6" className="fill-current">1. Kraft cardstock</text>
                <text x="30" y="40" fontSize="6" className="fill-current">2. Cardboard core</text>
                
                {/* Window with frame detail */}
                <rect x="70" y="40" width="160" height="100" fill="none" stroke="currentColor" strokeWidth="2"/>
                <rect x="75" y="45" width="150" height="90" fill="none" stroke="currentColor" strokeWidth="1"/>
                
                {/* Light wells */}
                <rect x="40" y="30" width="2" height="140" className="fill-current"/>
                <rect x="258" y="30" width="2" height="140" className="fill-current"/>
                
                {/* Dimensions */}
                <path d="M10,10 V190" stroke="currentColor" strokeWidth="0.5"/>
                <path d="M290,10 V190" stroke="currentColor" strokeWidth="0.5"/>
                <path d="M10,10 H290" stroke="currentColor" strokeWidth="0.5"/>
                <path d="M10,190 H290" stroke="currentColor" strokeWidth="0.5"/>
                
                <text x="150" y="205" fontSize="10" textAnchor="middle" className="fill-current">24" (610mm)</text>
                <text x="0" y="100" fontSize="10" transform="rotate(-90,0,100)" className="fill-current">16" (406mm)</text>
                
                <text x="150" y="0" fontSize="12" fontWeight="bold" textAnchor="middle" className="fill-current">Front Elevation</text>
              </g>

              {/* Side Elevation */}
              <g transform="translate(400,50)">
                {/* Main structure */}
                <rect x="20" y="20" width="160" height="160" fill="none" stroke="currentColor" strokeWidth="2"/>
                
                {/* Sloped roof */}
                <path d="M15,20 L185,10" stroke="currentColor" strokeWidth="2"/>
                
                {/* Door with noren mount */}
                <rect x="100" y="40" width="60" height="100" fill="none" stroke="currentColor" strokeWidth="2"/>
                {/* Noren rod */}
                <path d="M95,35 H165" stroke="currentColor" strokeWidth="1"/>
                <path d="M100,35 C100,55 160,55 160,35" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2"/>
                
                {/* Dimensions */}
                <text x="100" y="205" fontSize="10" textAnchor="middle" className="fill-current">16" (406mm)</text>
                <text x="200" y="100" fontSize="10" transform="rotate(-90,200,100)" className="fill-current">16" (406mm)</text>
                
                <text x="100" y="0" fontSize="12" fontWeight="bold" textAnchor="middle" className="fill-current">Side Elevation</text>
              </g>

              {/* Details */}
              <g transform="translate(50,300)">
                {/* Window Detail */}
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1"/>
                <text x="50" y="0" fontSize="10" textAnchor="middle" className="fill-current">Detail A: Window Assembly</text>
                {/* Layered material detail */}
                <path d="M20,40 H80" stroke="currentColor" strokeWidth="2"/>
                <path d="M20,42 H80" stroke="currentColor" strokeWidth="0.5"/>
                <path d="M20,44 H80" stroke="currentColor" strokeWidth="0.5"/>
                <text x="85" y="43" fontSize="6" className="fill-current">Cardboard core</text>
                <text x="85" y="50" fontSize="6" className="fill-current">Kraft finish</text>
              </g>

              {/* Noren Detail */}
              <g transform="translate(200,300)">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1"/>
                <text x="50" y="0" fontSize="10" textAnchor="middle" className="fill-current">Detail B: Noren Mount</text>
                {/* Mount detail */}
                <path d="M20,40 H80" stroke="currentColor" strokeWidth="2"/>
                <path d="M30,40 V60 M50,40 V65 M70,40 V60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2"/>
                <text x="50" y="80" fontSize="6" textAnchor="middle" className="fill-current">Fabric drape pattern</text>
              </g>

              {/* Material Notes */}
              <g transform="translate(400,300)">
                <text x="0" y="0" fontSize="12" fontWeight="bold" className="fill-current">Material Specifications:</text>
                <text x="0" y="20" fontSize="10" className="fill-current">Core Structure:</text>
                <text x="20" y="35" fontSize="8" className="fill-current">- Heavy corrugated cardboard</text>
                <text x="20" y="50" fontSize="8" className="fill-current">- Minimum 1/8" thickness</text>
                
                <text x="0" y="70" fontSize="10" className="fill-current">Exterior Finish:</text>
                <text x="20" y="85" fontSize="8" className="fill-current">- Kraft cardstock (#C7B299)</text>
                <text x="20" y="100" fontSize="8" className="fill-current">- Wood-grain texture effect</text>
                
                <text x="0" y="120" fontSize="10" className="fill-current">Traditional Elements:</text>
                <text x="20" y="135" fontSize="8" className="fill-current">- Natural cotton noren</text>
                <text x="20" y="150" fontSize="8" className="fill-current">- Wooden dowel light wells</text>
              </g>

              {/* Additional Notes */}
              <g transform="translate(700,300)">
                <text x="0" y="0" fontSize="12" fontWeight="bold" className="fill-current">Construction Notes:</text>
                <text x="0" y="20" fontSize="8" className="fill-current">1. All corners to be reinforced</text>
                <text x="0" y="35" fontSize="8" className="fill-current">2. Roof slope: 2" drop front to back</text>
                <text x="0" y="50" fontSize="8" className="fill-current">3. Allow 24hr drying between layers</text>
                <text x="0" y="65" fontSize="8" className="fill-current">4. Sand edges for wabi-sabi effect</text>
                <text x="0" y="80" fontSize="8" className="fill-current">5. Ventilation gaps at light wells</text>
              </g>

              {/* Scale Bar */}
              <g transform="translate(50,600)">
                <path d="M0,0 H100" stroke="currentColor" strokeWidth="1"/>
                <path d="M0,-5 V5 M25,-5 V5 M50,-5 V5 M75,-5 V5 M100,-5 V5" stroke="currentColor" strokeWidth="1"/>
                <text x="50" y="20" fontSize="8" textAnchor="middle" className="fill-current">Scale: 1" = 4"</text>
              </g>
            </svg>
          </div>
        </div>

        {/* Notes and Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-stone-50 dark:bg-neutral-800 p-6 rounded-lg border border-stone-200 dark:border-neutral-700">
            <h3 className="text-lg font-semibold text-stone-800 dark:text-neutral-200 mb-4">Material Specifications</h3>
            <ul className="space-y-2 text-stone-600 dark:text-neutral-400">
              <li>• Heavy corrugated cardboard core (1/8" min)</li>
              <li>• Kraft cardstock exterior (#C7B299)</li>
              <li>• Natural cotton noren fabric</li>
              <li>• Wooden dowel light wells</li>
            </ul>
          </div>
          
          <div className="bg-stone-50 dark:bg-neutral-800 p-6 rounded-lg border border-stone-200 dark:border-neutral-700">
            <h3 className="text-lg font-semibold text-stone-800 dark:text-neutral-200 mb-4">Construction Notes</h3>
            <ul className="space-y-2 text-stone-600 dark:text-neutral-400">
              <li>• All corners reinforced</li>
              <li>• 2" roof slope (front to back)</li>
              <li>• 24hr drying between layers</li>
              <li>• Wabi-sabi edge finishing</li>
              <li>• Ventilation gaps at light wells</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schematic;