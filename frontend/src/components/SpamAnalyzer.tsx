import React from "react";
import { MessageSquare, Sparkles } from "lucide-react";

interface SpamAnalyzerProps {
  message: string;
  setMessage: (val: string) => void;
  loading: boolean;
  onSubmit: () => void;
  children?: React.ReactNode; // For the ResultCard to be rendered on the right
}

const SpamAnalyzer: React.FC<SpamAnalyzerProps> = ({
  message,
  setMessage,
  loading,
  onSubmit,
  children,
}) => {
  return (
    <div id="analyzer" className="w-full max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Message Input Form */}
        <div className="lg:col-span-7 flex flex-col justify-between liquid-glass rounded-3xl p-8 relative overflow-hidden group/card hover:border-purple-500/20 transition-all duration-500">
          
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl group-hover/card:bg-purple-500/10 transition-colors" />

          <div>
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-purple-400" />
              <h3 className="text-xl font-medium text-white tracking-wide">
                Message Analyzer
              </h3>
            </div>

            <textarea
              rows={8}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Paste email, SMS message, or code snippet here to scan for spam activity..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none text-base leading-relaxed"
            />
          </div>

          <div className="flex items-center justify-between mt-6">
            <span className="text-xs text-gray-500 font-medium tracking-wider">
              {message.length} characters
            </span>

            <button
              onClick={onSubmit}
              disabled={loading || !message.trim()}
              className="flex items-center gap-2 bg-white text-gray-950 font-semibold px-6 py-3 rounded-full hover:bg-purple-400 hover:text-white transition-all disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-gray-950 cursor-pointer shadow-[0_4px_20px_rgba(255,255,255,0.05)] active:scale-95"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-gray-950 border-t-transparent rounded-full animate-spin" />
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Detect Spam</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Side: Prediction Result Container */}
        <div className="lg:col-span-5 flex flex-col justify-center min-h-[300px] lg:min-h-full">
          {children ? (
            children
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 liquid-glass rounded-3xl border-dashed border-white/5">
              <Sparkles className="w-10 h-10 text-gray-600 mb-4 animate-pulse" />
              <p className="text-gray-400 font-light max-w-xs">
                Provide a message on the left and trigger analysis to generate reports.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default SpamAnalyzer;
