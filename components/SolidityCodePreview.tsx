
import React from 'react';

const SolidityCodePreview: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center rounded-md overflow-hidden">
      <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="300" height="200" rx="8" fill="#2d3748"/> {/* Editor background - dark slate */}
        
        {/* Line Numbers Gutter (optional aesthetic) */}
        <rect x="0" y="0" width="30" height="200" fill="#28303E" rx="8"/>
         <text x="10" y="25" fontFamily="monospace" fontSize="10" fill="#718096">1</text>
         <text x="10" y="45" fontFamily="monospace" fontSize="10" fill="#718096">2</text>
         <text x="10" y="65" fontFamily="monospace" fontSize="10" fill="#718096">3</text>
         <text x="10" y="85" fontFamily="monospace" fontSize="10" fill="#718096">4</text>
         <text x="10" y="105" fontFamily="monospace" fontSize="10" fill="#718096">5</text>
         <text x="10" y="125" fontFamily="monospace" fontSize="10" fill="#718096">6</text>
         <text x="10" y="145" fontFamily="monospace" fontSize="10" fill="#718096">7</text>
         <text x="10" y="165" fontFamily="monospace" fontSize="10" fill="#718096">8</text>


        {/* Code lines */}
        {/* Light gray text */}
        <text x="40" y="25" fontFamily="monospace" fontSize="11" fill="#A0AEC0">
          <tspan fill="#81E6D9">pragma</tspan> <tspan fill="#CBD5E0">solidity</tspan> <tspan fill="#F6AD55">^0.8.20</tspan>;
        </text>
        
        <text x="40" y="45" fontFamily="monospace" fontSize="11" fill="#A0AEC0">
          <tspan fill="#68D391">// SPDX-License-Identifier: MIT</tspan>
        </text>

        <text x="40" y="65" fontFamily="monospace" fontSize="11" fill="#A0AEC0">
          <tspan fill="#9F7AEA">contract</tspan> <tspan fill="#FBD38D">MyNFT</tspan> 
        </text>

        <text x="55" y="85" fontFamily="monospace" fontSize="11" fill="#A0AEC0">
          <tspan fill="#81E6D9">using</tspan>
          <tspan> ERC721 </tspan>
          <tspan fill="#81E6D9">for</tspan>
          <tspan> IERC721;</tspan>
        </text>
        
        <text x="55" y="105" fontFamily="monospace" fontSize="11" fill="#A0AEC0">
          string <tspan fill="#9F7AEA">public</tspan> name = <tspan fill="#F6AD55">"ZVC N3xtGen NFT"</tspan>;
        </text>

        <text x="55" y="125" fontFamily="monospace" fontSize="11" fill="#A0AEC0">
          uint256 <tspan fill="#9F7AEA">private</tspan> _tokenIdCounter;
        </text>

         <text x="55" y="145" fontFamily="monospace" fontSize="11" fill="#A0AEC0">
          <tspan fill="#9F7AEA">function</tspan> <tspan fill="#FBD38D">mintItem</tspan>(address recipient) <tspan fill="#9F7AEA">public</tspan> 
        </text>
         <text x="70" y="165" fontFamily="monospace" fontSize="11" fill="#A0AEC0">
           _tokenIdCounter++;
        </text>


        <text x="40" y="185" fontFamily="monospace" fontSize="11" fill="#A0AEC0">{'}'}</text>
      </svg>
    </div>
  );
};

export default SolidityCodePreview;