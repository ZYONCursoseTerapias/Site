'use client';

import { useState, ChangeEvent } from 'react';

interface TimeInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}

export default function TimeInput({ label, value, onChange, error, required }: TimeInputProps) {
  const [raw, setRaw] = useState(value);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let v = e.target.value.replace(/[^\d:]/g, '');

    // Auto-insere ":" depois de 2 dígitos
    if (v.length === 2 && !v.includes(':') && raw.length < 2) {
      v = `${v}:`;
    }

    // Limita a 5 caracteres (HH:MM)
    if (v.length > 5) return;

    setRaw(v);
    onChange(v);
  }

  function handleBlur() {
    // Completa zeros se necessário: "9:5" → "09:05"
    const parts = raw.split(':');
    if (parts.length === 2) {
      const hh = parts[0].padStart(2, '0');
      const mm = parts[1].padStart(2, '0');
      const normalized = `${hh}:${mm}`;
      setRaw(normalized);
      onChange(normalized);
    }
  }

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-purple-200">
        {label}{required && ' *'}
      </label>
      <input
        type="text"
        inputMode="numeric"
        value={raw}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="HH:MM"
        maxLength={5}
        className={`bg-white/10 border ${
          error ? 'border-red-400' : 'border-white/20'
        } rounded-lg px-4 py-3 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition`}
      />
      <p className="text-xs text-purple-400">Formato 24h — ex: 23:55</p>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
