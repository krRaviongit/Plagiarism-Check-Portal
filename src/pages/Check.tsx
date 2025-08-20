import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ProgressBar from '../components/ProgressBar';
import { useNavigate } from 'react-router-dom';

export default function Check() {
  const [text, setText] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [progress, setProgress] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  function handleFile(file?: File) {
    if (!file) return;
    setFileName(file.name);
  }

  function onDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    handleFile(file);
  }

  function onCheck() {
    setIsChecking(true);
    setProgress(0);
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setIsChecking(false);
          navigate('/results', { state: { percent: 37, text } });
          return 100;
        }
        return p + 6;
      });
    }, 100);
  }

  return (
    <section className="container-px py-10 max-w-5xl mx-auto">
      <div className="grid gap-8">
        <div className="glass rounded-2xl p-6">
          <div
            className="border-2 border-dashed border-white/20 rounded-2xl p-8 text-center cursor-pointer bg-white/5 hover:bg-white/10 transition-colors"
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
            onClick={() => inputRef.current?.click()}
          >
            <input
              ref={inputRef}
              type="file"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0] || undefined)}
            />
            <div className="text-lg">Drag & drop your file here, or click to browse</div>
            <div className="text-sm text-white/60 mt-2">PDF, DOCX, TXT supported (demo)</div>
            {fileName && <div className="mt-3 text-white/80">Selected: {fileName}</div>}
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <label className="block text-sm text-white/70 mb-2">Or paste your text</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste text here..."
            className="w-full h-48 bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-accent-600"
          />
        </div>

        <div className="flex items-center gap-4">
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onCheck} className="btn-primary">
            Check Plagiarism
          </motion.button>
          {isChecking && (
            <div className="flex-1">
              <ProgressBar progress={progress} />
              <div className="text-xs text-white/60 mt-2">Analyzing content...</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


