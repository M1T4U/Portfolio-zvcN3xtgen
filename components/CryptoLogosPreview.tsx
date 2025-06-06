
import React from 'react';
import { BitcoinIcon, EthereumIcon, SolanaIcon } from '../constants';

const CryptoLogosPreview: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-around gap-2 p-4 bg-slate-700/50 rounded-md">
      <BitcoinIcon className="w-14 h-14 md:w-16 md:h-16" />
      <EthereumIcon className="w-14 h-14 md:w-16 md:h-16" />
      <SolanaIcon className="w-14 h-14 md:w-16 md:h-16" />
    </div>
  );
};

export default CryptoLogosPreview;
