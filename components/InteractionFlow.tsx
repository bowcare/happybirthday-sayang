'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InteractionFlow({ onFlowComplete }: { onFlowComplete: () => void }) {
  const [step, setStep] = useState(0);
  const nama = "ridwan"; // GANTI JADI NAMA PACAR LU DI SINI
  const namaLu = "dini"; // GANTI JADI NAMA LU

  return (
    <div className="w-screen h-screen bg-[#ffafbd] flex items-center justify-center flex-col text-center p-6 overflow-hidden">
      {/* Background balon */}
      <div className="absolute inset-0 text-6xl opacity-20 pointer-events-none">
        🎂 🎈 🎉 🎁 🎊 ✨ 💖 🎈 🎂
      </div>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="0" initial={{scale:0}} animate={{scale:1}} exit={{scale:0}} className="z-10">
            <div className="text-8xl mb-4">🎁</div>
            <h1 className="text-3xl font-bold text-white drop-shadow">Hai {nama}!</h1>
            <p className="text-white mt-2">Ada kejutan buat kamu...</p>
            <button onClick={() => setStep(1)} className="mt-6 bg-white text-pink-500 px-8 py-3 rounded-full font-bold shadow-lg">
              Buka dong 🎂
            </button>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div key="1" initial={{y:100, opacity:0}} animate={{y:0, opacity:1}} className="z-10 bg-white rounded-3xl p-8 max-w-sm shadow-2xl">
            <div className="text-6xl mb-3">🎂</div>
            <h2 className="text-2xl font-bold text-pink-600">Happy Birthday {nama}!</h2>
            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              Selamat ulang tahun ya sayangku {nama}! Semoga panjang umur, sehat selalu, bahagia terus, dan semua doa baik kamu terkabul. 
              <br/><br/>
              Makasih udah jadi yang terbaik buat aku. Aku sayang banget sama kamu! ❤️
              <br/><br/>
              - {namaLu} -
            </p>
            <button onClick={() => onFlowComplete()} className="mt-6 bg-pink-500 text-white px-8 py-3 rounded-full font-bold w-full">
              Lihat Foto Kita 📸
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
