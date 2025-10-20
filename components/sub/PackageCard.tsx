"use client";

import React from "react";

interface Props {
  title: string;
  price: string;
  features: string[];
  planType?: string; // optional, can be undefined
}

const PackageCard: React.FC<Props> = ({ title, price, features, planType }) => {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col hover:scale-105 transition-transform duration-300 w-full md:w-80">
      {planType && (
        <span className="text-xs font-semibold uppercase text-cyan-400 mb-2">
          {planType}
        </span>
      )}
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-cyan-400 font-bold text-xl mb-4">{price}</p>

      <ul className="text-gray-300 mb-6 flex-1 space-y-2">
        {features.map((feat, idx) => (
          <li key={idx} className="before:content-['•'] before:text-cyan-500 before:mr-2">
            {feat}
          </li>
        ))}
      </ul>

      <button className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-full font-semibold transition-all">
        Select Plan
      </button>
    </div>
  );
};

export default PackageCard;
