import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SpamAnalyzer from "../components/SpamAnalyzer";
import ResultCard from "../components/ResultCard";
import StatsBar from "../components/StatsBar";
import type { HistoryItem } from "../components/StatsBar";
import { predictSpam } from "../services/api";

const Home: React.FC = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState<"Spam" | "Not Spam" | "">("");
  const [probability, setProbability] = useState<number>(0);
  const [accuracy, setAccuracy] = useState<number>(0);

  const [history, setHistory] = useState<HistoryItem[]>(() => {
    try {
      const saved = localStorage.getItem("spam_history");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("spam_history", JSON.stringify(history));
  }, [history]);

  const handleCtaClick = () => {
    const element = document.getElementById("analyzer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAnalyze = async () => {
    if (!message.trim()) return;

    try {
      setLoading(true);
      const res = await predictSpam(message.trim());
      
      setPrediction(res.prediction);
      setProbability(res.probability);
      setAccuracy(res.accuracy);

      setHistory((prev) => [
        {
          message: message.trim(),
          prediction: res.prediction,
          probability: res.probability,
        },
        ...prev,
      ]);
    } catch (err) {
      console.error(err);
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      alert(`Error contacting the backend API: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <div id="home" className="min-h-screen relative bg-[#030712]">
      {/* Background Star/Dot Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-0" />

      <Navbar />
      
      <Hero onCtaClick={handleCtaClick} />

      <div className="relative z-10 py-16 flex flex-col gap-12">
        <SpamAnalyzer
          message={message}
          setMessage={setMessage}
          loading={loading}
          onSubmit={handleAnalyze}
        >
          {prediction && (
            <ResultCard prediction={prediction} probability={probability} />
          )}
        </SpamAnalyzer>

        <StatsBar
          accuracy={accuracy}
          probability={probability}
          history={history}
          onClearHistory={handleClearHistory}
        />
      </div>

      <footer className="relative z-10 border-t border-white/5 py-8 text-center text-xs text-gray-600 font-medium">
        <p>SpamShield AI® © 2026. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
