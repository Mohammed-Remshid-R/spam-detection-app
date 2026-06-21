import React from "react";
import { BarChart3, Clock, Percent, ShieldCheck, Trash2 } from "lucide-react";

export interface HistoryItem {
  message: string;
  prediction: "Spam" | "Not Spam";
  probability: number;
}

interface StatsBarProps {
  accuracy: number;
  probability: number;
  history: HistoryItem[];
  onClearHistory: () => void;
}

const StatsBar: React.FC<StatsBarProps> = ({
  accuracy,
  probability,
  history,
  onClearHistory,
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-8 flex flex-col gap-8">
      
      {/* Accuracy & Probability Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Accuracy Card */}
        <div className="liquid-glass rounded-3xl p-6 flex items-center justify-between hover:border-purple-500/20 transition-all duration-300">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Model Accuracy
            </span>
            <span className="text-3xl font-extrabold text-white tracking-tight">
              {accuracy || 96.85}%
            </span>
            <span className="text-xs text-gray-500 font-light mt-1">
              Trained on Logistic Regression
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
            <Percent className="w-5 h-5 text-purple-400" />
          </div>
        </div>

        {/* Spam Probability Info Card */}
        <div className="liquid-glass rounded-3xl p-6 flex items-center justify-between hover:border-purple-500/20 transition-all duration-300">
          <div className="flex flex-col gap-1 w-full mr-4">
            <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
              Last Scan Probability
            </span>
            <span className="text-3xl font-extrabold text-white tracking-tight">
              {probability}%
            </span>
            {/* Minimalist progress fill */}
            <div className="w-full h-1.5 bg-white/5 rounded-full mt-3 overflow-hidden">
              <div 
                className="h-full bg-purple-500 transition-all duration-500 ease-out"
                style={{ width: `${probability}%` }}
              />
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 shrink-0">
            <BarChart3 className="w-5 h-5 text-purple-400" />
          </div>
        </div>

      </div>

      {/* History Log Table */}
      <div className="liquid-glass rounded-3xl p-8 hover:border-purple-500/20 transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-medium text-white tracking-wide">
              Recent Scan History
            </h3>
          </div>
          
          {history.length > 0 && (
            <button
              onClick={onClearHistory}
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-red-400 transition-colors border border-white/5 bg-white/5 px-3 py-1.5 rounded-full cursor-pointer hover:border-red-500/20"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear All
            </button>
          )}
        </div>

        {history.length === 0 ? (
          <div className="py-8 text-center text-gray-500 font-light text-sm">
            No recent scans recorded. Completed predictions will appear here.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 text-xs text-gray-400 uppercase tracking-wider">
                  <th className="pb-4 font-semibold">Message Preview</th>
                  <th className="pb-4 font-semibold text-center">Prediction</th>
                  <th className="pb-4 font-semibold text-right">Probability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {history.map((item, index) => {
                  const isSpam = item.prediction === "Spam";
                  return (
                    <tr key={index} className="group hover:bg-white/[0.01] transition-colors">
                      <td className="py-4 pr-4 font-light text-gray-300 max-w-xs md:max-w-md truncate">
                        {item.message}
                      </td>
                      <td className="py-4 text-center">
                        <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${
                          isSpam 
                            ? "bg-red-500/10 text-red-400 border-red-500/20" 
                            : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                        }`}>
                          {isSpam ? "Spam" : "Secure"}
                        </span>
                      </td>
                      <td className={`py-4 text-right font-bold ${
                        isSpam ? "text-red-400" : "text-emerald-400"
                      }`}>
                        {item.probability}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
};

export default StatsBar;
