
"use client";
import React, { useState } from 'react';

export default function ProTopUpSuperApp() {
  const [activeTab, setActiveTab] = useState('store');
  const [selectedGame, setSelectedGame] = useState('ff');

  // Top-Up Catalog Data
  const ffDiamonds = [
    { qty: '25 Diamonds', price: 'NPR 24' },
    { qty: '50 Diamonds', price: 'NPR 49' },
    { qty: '115 Diamonds', price: 'NPR 110' },
    { qty: '240 Diamonds', price: 'NPR 216' },
    { qty: '610 Diamonds', price: 'NPR 540' },
    { qty: '1090 Diamonds', price: 'NPR 965' },
    { qty: '1240 Diamonds', price: 'NPR 1,085' },
    { qty: '1595 Diamonds', price: 'NPR 1,395' },
    { qty: '2090 Diamonds', price: 'NPR 1,800' },
    { qty: '2530 Diamonds', price: 'NPR 2,142' },
    { qty: '5060 Diamonds', price: 'NPR 4,312' },
    { qty: '10120 Diamonds', price: 'NPR 8,545' },
  ];

  const ffPasses = [
    { name: 'Weekly Membership', price: 'NPR 215' },
    { name: 'Weekly 4x Pack', price: 'NPR 854' },
    { name: 'Weekly 5x Pack', price: 'NPR 1,080' },
    { name: 'Monthly Membership', price: 'NPR 1,082' },
    { name: 'Monthly 2x Pack', price: 'NPR 2,110' },
    { name: 'Monthly 3x Pack', price: 'NPR 3,160' },
    { name: 'Weekly Lite 1x', price: 'NPR 78' },
    { name: 'Weekly Lite 5x', price: 'NPR 349' },
    { name: 'Level UP Pass (ALL)', price: 'NPR 611' },
  ];

  const pubgUC = [
    { qty: '60 UC', price: 'NPR 166' },
    { qty: '325 UC', price: 'NPR 796' },
    { qty: '660 UC', price: 'NPR 2,510' },
    { qty: '1800 UC', price: 'NPR 6,320' },
    { qty: '3850 UC', price: 'NPR 12,900' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-24 selection:bg-amber-500 selection:text-slate-950">
      {/* 1. Header & Dual Wallet Bar */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-black text-amber-400 tracking-wider">🎮 PRO TOP-UP</h1>
            <p className="text-[10px] text-slate-400">Nepal&apos;s Super Gaming Ecosystem</p>
          </div>

          {/* Dual Wallet Display */}
          <div className="flex gap-2">
            <div className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-xl text-right">
              <span className="block text-[9px] text-slate-400 font-bold uppercase">Deposit Wallet</span>
              <span className="text-xs font-black text-emerald-400">NPR 0.00</span>
            </div>
            <div className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-xl text-right">
              <span className="block text-[9px] text-slate-400 font-bold uppercase">Winning Wallet</span>
              <span className="text-xs font-black text-amber-400">NPR 0.00</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto p-4 space-y-8">

        {/* 2. TOP-UP STORE & GIFT CARDS */}
        {activeTab === 'store' && (
          <div className="space-y-6">
            {/* Main App Poster / Banner */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <img 
                src="https://raw.githubusercontent.com/lalbabudafali-alt/pro-topup-super-app/main/1000043323.jpg" 
                alt="Pro Top-Up Super Banner" 
                className="w-full h-48 md:h-64 object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 p-5 shadow-xl">
                <span className="bg-slate-950/40 text-amber-200 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Instant Auto-Delivery</span>
                <h2 className="text-2xl font-black text-white mt-1">Direct In-Game Top-Up</h2>
                <p className="text-xs text-amber-100">Automatic API Top-Up via UniPin, Moogold &amp; Razer Gold</p>
              </div>
            </div>

            {/* Game Switcher */}
            <div className="flex gap-2 border-b border-slate-800 pb-3 overflow-x-auto">
              <button 
                onClick={() => setSelectedGame('ff')} 
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${selectedGame === 'ff' ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-slate-400'}`}>
                🔥 Free Fire
              </button>
              <button 
                onClick={() => setSelectedGame('pubg')} 
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${selectedGame === 'pubg' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-slate-400'}`}>
                🪖 PUBG Mobile
              </button>
              <button 
                onClick={() => setSelectedGame('vouchers')} 
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${selectedGame === 'vouchers' ? 'bg-purple-500 text-white' : 'bg-slate-900 text-slate-400'}`}>
                🎁 Gift Cards &amp; More
              </button>
            </div>

            {/* Free Fire Packs */}
            {selectedGame === 'ff' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-amber-400 mb-3 uppercase tracking-wider">💎 Diamond Packs</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {ffDiamonds.map((item, idx) => (
                      <div key={`ff-dia-${idx}`} className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 p-4 rounded-xl flex flex-col justify-between transition">
                        <span className="text-xs font-bold text-slate-200">{item.qty}</span>
                        <div className="mt-3">
                          <span className="text-lg font-black text-amber-400">{item.price}</span>
                          <button className="w-full mt-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black py-1.5 rounded-lg transition">BUY</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-amber-400 mb-3 uppercase tracking-wider">🎟️ Memberships &amp; Level Up Pass</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {ffPasses.map((item, idx) => (
                      <div key={`ff-pass-${idx}`} className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col justify-between">
                        <span className="text-xs font-bold text-slate-200">{item.name}</span>
                        <div className="mt-3">
                          <span className="text-base font-black text-amber-400">{item.price}</span>
                          <button className="w-full mt-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black py-1.5 rounded-lg transition">BUY</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PUBG Mobile UC */}
            {selectedGame === 'pubg' && (
              <div>
                <h3 className="text-sm font-bold text-cyan-400 mb-3 uppercase tracking-wider">🪖 PUBG Mobile UC Catalog</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {pubgUC.map((item, idx) => (
                    <div key={`pubg-uc-${idx}`} className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 p-4 rounded-xl flex flex-col justify-between transition">
                      <span className="text-xs font-bold text-slate-200">{item.qty}</span>
                      <div className="mt-3">
                        <span className="text-lg font-black text-cyan-400">{item.price}</span>
                        <button className="w-full mt-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-black py-1.5 rounded-lg transition">BUY</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Multi-Game & Digital Cards */}
            {selectedGame === 'vouchers' && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Google Play Card', 'Steam Wallet Code', 'Apple Gift Card', 'Xbox / PlayStation', 'MLBB Diamonds', 'Ludo Club Coins'].map((title, idx) => (
                  <div key={`voucher-${idx}`} className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center space-y-2">
                    <span className="text-xs font-bold text-slate-200 block">{title}</span>
                    <span className="text-[10px] text-slate-400 block">Instant Digital Code Delivery</span>
                    <button className="w-full bg-purple-600 text-white text-xs font-bold py-1.5 rounded-lg">View Catalog</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 3. ESPORTS TOURNAMENTS */}
        {activeTab === 'tournaments' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-amber-400">🏆 Live Esports Tournaments</h2>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-red-500/30">PUBG Solo Squad War</span>
                <span className="text-xs text-slate-400">Match ID: #FF-9082</span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-slate-400">Prize Pool</p>
                  <p className="text-xl font-black text-emerald-400">NPR 5,000</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400">Entry Fee</p>
                  <p className="text-sm font-bold text-amber-400">NPR 50</p>
                </div>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex justify-between items-center">
                <span className="text-xs text-slate-400">Room ID &amp; Pass:</span>
                <span className="text-xs font-mono bg-slate-800 px-2 py-1 rounded text-amber-300">Unlocks 15m Before Match</span>
              </div>
              <button className="w-full bg-amber-500 text-slate-950 font-black py-2 rounded-xl text-xs">JOIN MATCH ROOM</button>
            </div>
          </div>
        )}

        {/* 4. DUAL WALLET & PAYMENTS WITH QR CODES */}
        {activeTab === 'wallet' && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-emerald-400">💳 Dual-Wallet &amp; Payment QR Scanners</h2>
            
            {/* QR Codes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* eSewa QR */}
              <div className="bg-slate-900 border border-emerald-500/30 p-4 rounded-2xl text-center space-y-3">
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-3 py-1 rounded-full border border-emerald-500/40 uppercase">eSewa Pay</span>
                <div className="bg-white p-2 rounded-xl inline-block">
                  <img 
                    src="https://raw.githubusercontent.com/lalbabudafali-alt/pro-topup-super-app/main/1000032798.jpg" 
                    alt="eSewa QR Code" 
                    className="w-44 h-44 object-contain mx-auto"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Lalbabu Dafali</p>
                  <p className="text-[11px] font-mono text-emerald-400 font-bold">9701467807</p>
                </div>
              </div>

              {/* Khalti QR */}
              <div className="bg-slate-900 border border-purple-500/30 p-4 rounded-2xl text-center space-y-3">
                <span className="bg-purple-500/20 text-purple-400 text-[10px] font-bold px-3 py-1 rounded-full border border-purple-500/40 uppercase">Khalti Pay</span>
                <div className="bg-white p-2 rounded-xl inline-block">
                  <img 
                    src="https://raw.githubusercontent.com/lalbabudafali-alt/pro-topup-super-app/main/1000032807.jpg" 
                    alt="Khalti QR Code" 
                    className="w-44 h-44 object-contain mx-auto"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Lalbabu Dafali</p>
                  <p className="text-[11px] font-mono text-purple-400 font-bold">9701467807</p>
                </div>
              </div>

              {/* NIC Asia / Mobile Banking QR */}
              <div className="bg-slate-900 border border-red-500/30 p-4 rounded-2xl text-center space-y-3">
                <span className="bg-red-500/20 text-red-400 text-[10px] font-bold px-3 py-1 rounded-full border border-red-500/40 uppercase">Mobile Banking / Fonepay</span>
                <div className="bg-white p-2 rounded-xl inline-block">
                  <img 
                    src="https://raw.githubusercontent.com/lalbabudafali-alt/pro-topup-super-app/main/1000037516.jpg" 
                    alt="NIC Asia Mobile Banking QR Code" 
                    className="w-44 h-44 object-contain mx-auto"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Lalbabu Dafali (NIC Asia)</p>
                  <p className="text-[11px] font-mono text-red-400 font-bold">1395753366544001</p>
                </div>
              </div>

            </div>

            {/* Wallet Load & Payout Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-3">
                <h3 className="text-xs font-bold text-slate-300 uppercase">Load Deposit Wallet</h3>
                <p className="text-[11px] text-slate-400">Scan QR above, make payment &amp; upload receipt screenshot for instant AI approval.</p>
                <button className="w-full bg-emerald-600 text-white text-xs font-bold py-2 rounded-xl">UPLOAD RECEIPT SCREENSHOT</button>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-3">
                <h3 className="text-xs font-bold text-slate-300 uppercase">Winning Payout (Direct Bank / Wallet)</h3>
                <p className="text-[11px] text-slate-400">Nepal Income Tax Act (TDS 15%) auto-deducted on prize payouts with downloadable tax invoices.</p>
                <button className="w-full bg-amber-500 text-slate-950 text-xs font-black py-2 rounded-xl">WITHDRAW WINNINGS</button>
              </div>
            </div>
          </div>
        )}

        {/* 5. VIP REWARDS & PROMOTIONS */}
        {activeTab === 'vip' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-purple-400">👑 VIP Loyalty Tiers &amp; Rewards</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['🥉 Bronze Tier', '🥈 Silver Tier', '🥇 Gold Tier', '💎 Diamond Tier'].map((tier, idx) => (
                <div key={`vip-tier-${idx}`} className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-center space-y-1">
                  <span className="text-sm font-bold text-amber-300 block">{tier}</span>
                  <span className="text-[10px] text-slate-400 block">Level-up Cashback &amp; Priority Payouts</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. ADMIN CONTROL PANEL */}
        {activeTab === 'admin' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-red-400">⚙️ Admin Control Center</h2>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-3">
              <div className="flex justify-between items-center text-xs border-b border-slate-800 pb-2">
                <span>Auto-Supplier API Integration (UniPin/Razer)</span>
                <span className="text-emerald-400 font-bold">ACTIVE</span>
              </div>
              <div className="flex justify-between items-center text-xs border-b border-slate-800 pb-2">
                <span>Match Room Distribution Engine</span>
                <button className="bg-slate-800 px-2 py-1 rounded text-[10px]">Release Room ID</button>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span>User Security &amp; Fraud Ban Engine</span>
                <button className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-[10px]">Device ID Ban</button>
              </div>
            </div>
          </div>
        )}

        {/* 7. SUPPORT & HELPLINE */}
        {activeTab === 'support' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-cyan-400">📞 Customer Support &amp; Legal</h2>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-2 text-xs">
              <p>💬 <strong>WhatsApp Support:</strong> +977 9810765268</p>
              <p>📞 <strong>Direct Call Center:</strong> +977 9701467807</p>
              <p>⚖️ <strong>Compliance:</strong> Terms, Privacy, Anti-Money Laundering (AML) &amp; TDS Declarations</p>
            </div>
          </div>
        )}

      </main>

      {/* Navigation Footer */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2 z-50">
        <div className="max-w-5xl mx-auto flex justify-around text-[10px] font-bold">
          <button onClick={() => setActiveTab('store')} className={`p-2 rounded-xl flex flex-col items-center ${activeTab === 'store' ? 'text-amber-400 bg-slate-800' : 'text-slate-400'}`}>🛒 Store</button>
          <button onClick={() => setActiveTab('tournaments')} className={`p-2 rounded-xl flex flex-col items-center ${activeTab === 'tournaments' ? 'text-amber-400 bg-slate-800' : 'text-slate-400'}`}>🏆 Matches</button>
          <button onClick={() => setActiveTab('wallet')} className={`p-2 rounded-xl flex flex-col items-center ${activeTab === 'wallet' ? 'text-amber-400 bg-slate-800' : 'text-slate-400'}`}>💳 Wallet</button>
          <button onClick={() => setActiveTab('vip')} className={`p-2 rounded-xl flex flex-col items-center ${activeTab === 'vip' ? 'text-amber-400 bg-slate-800' : 'text-slate-400'}`}>👑 VIP</button>
          <button onClick={() => setActiveTab('admin')} className={`p-2 rounded-xl flex flex-col items-center ${activeTab === 'admin' ? 'text-amber-400 bg-slate-800' : 'text-slate-400'}`}>⚙️ Admin</button>
          <button onClick={() => setActiveTab('support')} className={`p-2 rounded-xl flex flex-col items-center ${activeTab === 'support' ? 'text-amber-400 bg-slate-800' : 'text-slate-400'}`}>📞 Help</button>
        </div>
      </nav>
    </div>
  );
    }
    
