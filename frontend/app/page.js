"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const fetchConfigAndData = async () => {
    const configRes = await fetch('/api/config');
    const config = await configRes.json();

    const dataRes = await fetch(`${config.apiUrl}/api/hello/`);
    const data = await dataRes.json();
    setMessage(data.message);
  };

  fetchConfigAndData();

  return <h1>{message || "Loading..."}</h1>;
}