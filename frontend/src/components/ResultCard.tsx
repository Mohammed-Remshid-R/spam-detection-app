import React from "react";
import { motion } from "framer-motion";
import { AlertOctagon, CheckCircle2 } from "lucide-react";

interface ResultCardProps {
  prediction: "Spam" | "Not Spam";
  probability: number;
}

const ResultCard: React.FC<ResultCardProps> = ({ prediction, probability }) => {
  const isSpam = prediction === "Spam";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
      className={`h-full flex flex-col justify-between liquid-glass rounded-3xl p-8 border-2 transition-shadow duration-500 ${
        isSpam 
          ? "border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.1)] hover:shadow-[0_0_40px_rgba(239,68,68,0.15)]" 
          : "border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
      }`}
    >
      <div>
        <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
          Analysis Result
        </span>
        
        <div className="flex items-center gap-3 mt-6">
          {isSpam ? (
            <AlertOctagon className="w-10 h-10 text-red-500 animate-bounce" />
          ) : (
            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
          )}
          
          <h2 className={`text-4xl font-extrabold tracking-tight ${
            isSpam ? "text-red-500" : "text-emerald-500"
          }`}>
            {isSpam ? "SPAM" : "SECURE"}
          </h2>
        </div>

        <p className="text-gray-400 font-light mt-4 text-sm leading-relaxed">
          {isSpam 
            ? "Warning: This message shows signs of malicious or unsolicited intent. Exercise caution before clicking any links."
            : "No threats detected. This message looks clean and safe."
          }
        </p>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500 font-medium tracking-wide">
            Confidence Score
          </span>
          <span className={`text-sm font-bold ${
            isSpam ? "text-red-400" : "text-emerald-400"
          }`}>
            {probability}%
          </span>
        </div>

        {/* Custom animated progress bar */}
        <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${probability}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`h-full rounded-full ${
              isSpam ? "bg-red-500" : "bg-emerald-500"
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ResultCard;
