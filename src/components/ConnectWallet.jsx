
import React from 'react';

const ConnectWallet = ({ onConnect, loading }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
        <div className="w-32 h-32 glass rounded-3xl flex items-center justify-center relative border border-white/10">
          <svg className="w-16 h-16 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        </div>
      </div>
      
      <div className="space-y-4 max-w-xl">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Your Assets, <span className="gradient-text">Intelligently Tracked.</span>
        </h1>
        <p className="text-xl text-gray-400 font-light leading-relaxed">
          Connect your wallet to unlock deep insights and transaction history
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        <button 
          onClick={onConnect}
          disabled={loading}
          className="group relative w-full px-8 py-4 bg-white text-black font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 overflow-hidden"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Connect freighter Wallet</span>
            </>
          )}
        </button>
        <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Secure connection powered by Web3.js
        </p>
      </div>
    </div>
  );
};

export default ConnectWallet;
