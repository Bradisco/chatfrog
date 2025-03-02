import React, { useState, useEffect } from 'react';
import { MessageSquare, Wallet, Rocket, Twitter, Send, ArrowRight, Lock, Users, BarChart3, ExternalLink } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/90 backdrop-blur-md shadow-lg shadow-primary/20' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold text-white">ChatFrog</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-accent">About ChatFrog</a>
              <a href="#how-to-buy" className="text-gray-300 hover:text-accent">How to Buy</a>
              <a href="#tokenomics" className="text-gray-300 hover:text-accent">Tokenomics</a>
              <a href="#community" className="text-gray-300 hover:text-accent">Community</a>
            </div>
            <button className="bg-accent text-dark font-bold px-6 py-2 rounded-full hover:bg-accent-hover transition-colors">
              Buy $CHFR
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-12">
            <img 
              src="https://raw.githubusercontent.com/Bradisco/chatfrog/refs/heads/main/chatfrog_banner.webp" 
              alt="ChatFrog Banner" 
              className="max-w-3xl mx-auto rounded-2xl shadow-lg shadow-primary/20"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 hero-gradient">
            The AI Meme Coin
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            With Ribbiting Potential!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <button className="bg-accent text-dark font-bold px-8 py-4 rounded-full hover:bg-accent-hover transition-colors flex items-center justify-center gap-2">
              <Rocket className="w-5 h-5" />
              Buy $CHFR Now
            </button>
            <button className="bg-primary text-dark font-bold px-8 py-4 rounded-full hover:bg-primary-hover transition-colors flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              Join Community
            </button>
          </div>
          
          {/* Stats */}
          
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 hero-gradient">What is ChatFrog?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://raw.githubusercontent.com/Bradisco/chatfrog/refs/heads/main/chatfrog.webp"
                alt="ChatFrog AI Character"
                className="w-60 h-auto rounded-lg" 
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-accent">A Meme Coin with AI Power</h3>
              <p className="text-gray-300 mb-6">
                ChatFrog combines the fun of memes with the potential of AI technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Strong Community Momentum</h4>
                    <p className="text-gray-300">Community-driven growth with AI integration</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Viral Investment Potential</h4>
                    <p className="text-gray-300">Be part of the next big AI meme coin explosion</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <ExternalLink className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Built on Solana</h4>
                    <p className="text-gray-300">Fast transactions with minimal fees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="how-to-buy" className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 hero-gradient">How to Buy $CHFR</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="cyberpunk-card p-8 rounded-2xl neon-border">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Wallet className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">1. Get a Solana Wallet</h3>
              <p className="text-gray-300">Install Phantom or Solflare wallet and create your account</p>
            </div>
            <div className="cyberpunk-card p-8 rounded-2xl neon-border">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">2. Buy SOL</h3>
              <p className="text-gray-300">Purchase SOL from PUMPFUN or Dexview and transfer to your wallet</p>
            </div>
            <div className="cyberpunk-card p-8 rounded-2xl neon-border">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">3. Swap for $CHFR</h3>
              <p className="text-gray-300">
  Use <a href="https://www.birdeye.so/token/3D1cRyMNhjGFrC2zZYbxdhS32Lbjb5aXziucFybLpump?chain=solana" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Birdeye</a>, 
  <a href="https://raydium.io" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Raydium</a>, or 
  <a href="https://jup.ag" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Jupiter</a> to swap your SOL for $CHFR.
</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 hero-gradient">Tokenomics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="cyberpunk-card p-6 rounded-2xl neon-border">
                <div className="flex items-center gap-4">
                  <BarChart3 className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold text-primary">Total Supply</h3>
                    <p className="text-gray-300">1,000,000,000 $CHFR</p>
                  </div>
                </div>
              </div>
              <div className="cyberpunk-card p-6 rounded-2xl neon-border">
                <div className="flex items-center gap-4">
                  <Lock className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold text-primary">Liquidity Locked</h3>
                    <p className="text-gray-300">Ensuring long-term stability</p>
                  </div>
                </div>
              </div>
              <div className="cyberpunk-card p-6 rounded-2xl neon-border">
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold text-primary">100% Community-Owned</h3>
                    <p className="text-gray-300">No developer wallets</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cyberpunk-card p-8 rounded-2xl neon-border">
              <h3 className="text-2xl font-bold mb-6 text-primary">Roadmap</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-accent mb-2">Phase 1: Launch and Promotion</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Listed on Solana</li>
                    <li>Marketing campaign on Twitter</li>
                    <li>Marketing campaign on Telegram</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-accent mb-2">Phase 2: Expansion and Visibility</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Viral marketing strategies</li>
                    <li>Partnerships with influencers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-accent mb-2">Phase 3: Development and Growth</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Listings on centralized exchanges</li>
                    <li>NFT integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 hero-gradient">Join the Community</h2>
          <p className="text-xl text-gray-300 mb-8">Be part of the ChatFrog adventure</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
            <a href="https://twitter.com/ChatFrog3" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center gap-2 bg-primary text-dark font-bold px-8 py-4 rounded-full hover:bg-primary-hover transition-colors">
              <Twitter className="w-5 h-5" />
              Twitter
            </a>
            <a href="https://t.me/ChatFrogArmy" target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 bg-secondary text-white px-8 py-4 rounded-full hover:bg-secondary-hover transition-colors">
              <Send className="w-5 h-5" />
              Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-lighter py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <MessageSquare className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold text-white">ChatFrog</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 ChatFrog. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
