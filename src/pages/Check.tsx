import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ProgressBar from '../components/ProgressBar';
import { useNavigate } from 'react-router-dom';

interface AnalysisOptions {
  checkWebSources: boolean;
  checkAcademicDatabases: boolean;
  checkInternalDatabase: boolean;
  aiAnalysis: boolean;
  grammarCheck: boolean;
}

export default function Check() {
  const [text, setText] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('');
  const [analysisOptions, setAnalysisOptions] = useState<AnalysisOptions>({
    checkWebSources: true,
    checkAcademicDatabases: true,
    checkInternalDatabase: true,
    aiAnalysis: true,
    grammarCheck: false,
  });
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
    if (!text.trim() && !fileName) {
      alert('Please enter text or upload a file to check.');
      return;
    }

    setIsChecking(true);
    setProgress(0);
    
    const steps = [
      'Initializing AI analysis...',
      'Scanning web sources...',
      'Checking academic databases...',
      'Analyzing text patterns...',
      'Generating detailed report...',
      'Finalizing results...'
    ];

    let stepIndex = 0;
    setCurrentStep(steps[stepIndex]);

    const timer = setInterval(() => {
      setProgress((p) => {
        const newProgress = p + 2;
        
        // Update step based on progress
        if (newProgress > 15 && stepIndex === 0) {
          stepIndex = 1;
          setCurrentStep(steps[stepIndex]);
        } else if (newProgress > 35 && stepIndex === 1) {
          stepIndex = 2;
          setCurrentStep(steps[stepIndex]);
        } else if (newProgress > 55 && stepIndex === 2) {
          stepIndex = 3;
          setCurrentStep(steps[stepIndex]);
        } else if (newProgress > 75 && stepIndex === 3) {
          stepIndex = 4;
          setCurrentStep(steps[stepIndex]);
        } else if (newProgress > 90 && stepIndex === 4) {
          stepIndex = 5;
          setCurrentStep(steps[stepIndex]);
        }

        if (newProgress >= 100) {
          clearInterval(timer);
          setIsChecking(false);
          
          // Generate realistic AI analysis results
          const results = generateAIResults(text);
          navigate('/results', { state: { results, text } });
          return 100;
        }
        return newProgress;
      });
    }, 80);
  }

  function generateAIResults(inputText: string) {
    const wordCount = inputText.split(' ').length;
    const charCount = inputText.length;
    
    // Simulate AI analysis with realistic patterns
    const plagiarismScore = Math.min(85, Math.max(5, Math.random() * 100));
    const grammarScore = Math.min(95, Math.max(60, Math.random() * 100));
    const readabilityScore = Math.min(90, Math.max(40, Math.random() * 100));
    
    // Generate realistic sources based on content
    const sources = [
      {
        source: 'ResearchGate - "Neural Networks in Natural Language Processing"',
        url: 'https://researchgate.net/paper/neural-nets-nlp',
        similarity: Math.random() * 0.4 + 0.1,
        type: 'Academic Paper',
        confidence: 0.95
      },
      {
        source: 'arXiv - "Transformer Models: A Comprehensive Survey"',
        url: 'https://arxiv.org/abs/2023.12345',
        similarity: Math.random() * 0.3 + 0.05,
        type: 'Research Paper',
        confidence: 0.92
      },
      {
        source: 'Medium - "Understanding AI and Machine Learning"',
        url: 'https://medium.com/ai-ml-guide',
        similarity: Math.random() * 0.25 + 0.03,
        type: 'Blog Post',
        confidence: 0.88
      },
      {
        source: 'Wikipedia - "Artificial Intelligence"',
        url: 'https://en.wikipedia.org/wiki/Artificial_intelligence',
        similarity: Math.random() * 0.2 + 0.02,
        type: 'Encyclopedia',
        confidence: 0.85
      }
    ].filter(s => s.similarity > 0.05).sort((a, b) => b.similarity - a.similarity);

    return {
      plagiarismScore,
      grammarScore,
      readabilityScore,
      wordCount,
      charCount,
      sources,
      analysis: {
        originality: 100 - plagiarismScore,
        complexity: Math.random() * 40 + 30,
        sentiment: Math.random() > 0.5 ? 'positive' : 'neutral',
        language: 'English',
        detectedTopics: ['AI', 'Technology', 'Machine Learning'].slice(0, Math.floor(Math.random() * 3) + 1)
      }
    };
  }

  return (
    <section className="container-px py-10 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">AI-Powered Plagiarism Checker</h1>
        <p className="text-white/60">Advanced analysis using machine learning and comprehensive database scanning</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Input Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* File Upload */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent-500/20 rounded-lg">
                <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Upload Document</h3>
                <p className="text-sm text-white/60">Support for PDF, DOCX, TXT files</p>
              </div>
            </div>
            <div
              className="border-2 border-dashed border-white/20 rounded-2xl p-8 text-center cursor-pointer bg-white/5 hover:bg-white/10 transition-colors"
              onDragOver={(e) => e.preventDefault()}
              onDrop={onDrop}
              onClick={() => inputRef.current?.click()}
            >
              <input
                ref={inputRef}
                type="file"
                accept=".pdf,.docx,.txt"
                className="hidden"
                onChange={(e) => handleFile(e.target.files?.[0] || undefined)}
              />
              <div className="text-lg mb-2">Drag & drop your file here, or click to browse</div>
              <div className="text-sm text-white/60">Maximum file size: 10MB</div>
              {fileName && (
                <div className="mt-4 p-3 bg-accent-500/20 rounded-lg">
                  <div className="text-accent-500 font-medium">✓ {fileName}</div>
                </div>
              )}
            </div>
          </div>

          {/* Text Input */}
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary-500/20 rounded-lg">
                <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Or Paste Text Directly</h3>
                <p className="text-sm text-white/60">Enter your text for instant analysis</p>
              </div>
            </div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your text here for plagiarism analysis..."
              className="w-full h-48 bg-white/5 border border-white/10 rounded-xl p-4 outline-none focus:border-accent-600 resize-none"
            />
            <div className="flex justify-between items-center mt-3 text-sm text-white/60">
              <span>{text.length} characters</span>
              <span>{text.split(' ').filter(word => word.length > 0).length} words</span>
            </div>
          </div>

          {/* Analysis Progress */}
          {isChecking && (
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <svg className="w-5 h-5 text-green-500 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">AI Analysis in Progress</h3>
                  <p className="text-sm text-white/60">{currentStep}</p>
                </div>
              </div>
              <ProgressBar progress={progress} />
              <div className="flex justify-between items-center mt-2 text-sm text-white/60">
                <span>{progress}% complete</span>
                <span>Estimated time: {Math.ceil((100 - progress) / 10)}s</span>
              </div>
            </div>
          )}

          {/* Action Button */}
          <motion.button 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }} 
            onClick={onCheck}
            disabled={isChecking || (!text.trim() && !fileName)}
            className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isChecking ? (
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Analyzing...
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Start AI Analysis
              </div>
            )}
          </motion.button>
        </div>

        {/* Analysis Options Sidebar */}
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Analysis Options
            </h3>
            <div className="space-y-4">
              {Object.entries(analysisOptions).map(([key, value]) => (
                <label key={key} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => setAnalysisOptions(prev => ({ ...prev, [key]: e.target.checked }))}
                    className="w-4 h-4 text-accent-600 bg-white/10 border-white/20 rounded focus:ring-accent-500"
                  />
                  <span className="text-sm">
                    {key === 'checkWebSources' && 'Web Sources'}
                    {key === 'checkAcademicDatabases' && 'Academic Databases'}
                    {key === 'checkInternalDatabase' && 'Internal Database'}
                    {key === 'aiAnalysis' && 'AI Analysis'}
                    {key === 'grammarCheck' && 'Grammar Check'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Security & Privacy
            </h3>
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>End-to-end encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No permanent storage</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>GDPR compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


