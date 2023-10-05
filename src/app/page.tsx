'use client';

import { useState } from "react";

import Head from "next/head"
import Editor from "@/components/editor"
import Preview from "@/components/preview"

export default function Home() {

  const [eventViewType, setEventViewType] = useState('single');
  const [themeColor, setThemeColor] = useState({
    foreground: '#1E293B',
    background: '#F1F5F9'
  });

  function handleThemeColorForegroundChange(e) {
    setThemeColor({
      ...themeColor,
      foreground: e
    })
  }

  function handleThemeColorBackgroundChange(e) {
    setThemeColor({
      ...themeColor,
      background: e
    })
  }

  return (
    <>
      <Head>
        <title>Eventview generator</title>
      </Head>
      <main className="md:grid md:grid-cols-2 min-h-screen divide-x divide-gray-400/25 bg-white bg-gradient-to-b from-slate-50 to-transparent">
        <Editor setEventViewType={setEventViewType} handleThemeColorForegroundChange={handleThemeColorForegroundChange} handleThemeColorBackgroundChange={handleThemeColorBackgroundChange} themeColor={themeColor} eventViewType={eventViewType}/>
        <Preview eventViewType={eventViewType} themeColor={themeColor}/>
      </main>
    </>
  )
}
