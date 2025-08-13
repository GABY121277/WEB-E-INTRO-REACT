import React from "react";

export default function Message({ message }) {
  if (!message) return null; // No mostrar nada si no hay mensaje
  return <p>{message}</p>;
}

