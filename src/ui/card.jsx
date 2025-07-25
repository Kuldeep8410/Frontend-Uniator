import React from "react";

export function Card({ children, className }) {
  return <div className={`rounded-xl border p-4 shadow ${className}`}>{children}</div>;
}

export function CardHeader({ children, className }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className }) {
  return <h2 className={`text-lg font-bold ${className}`}>{children}</h2>;
}

export function CardContent({ children, className }) {
  return <div className={`${className}`}>{children}</div>;
}


// Exporting all components for easier imports