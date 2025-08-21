import { useLocation, Link } from 'react-router-dom';
import Card from '../components/Card';
import CircularProgress from '../components/CircularProgress';

type SourceMatch = {
  source: string;
  url: string;
  similarity: number; // 0..1
  type: string;
  confidence: number; // 0..1
};

type AnalysisResults = {
  plagiarismScore: number; // 0..100
  grammarScore: number; // 0..100
  readabilityScore: number; // 0..100
  wordCount: number;
  charCount: number;
  sources: SourceMatch[];
  analysis: {
    originality: number;
    complexity: number;
    sentiment: string;
    language: string;
    detectedTopics: string[];
  };
};

export default function Results() {
  const location = useLocation() as { state?: { results?: AnalysisResults; text?: string } };
  const results: AnalysisResults =
    location.state?.results ?? {
      plagiarismScore: 37,
      grammarScore: 86,
      readabilityScore: 72,
      wordCount: 120,
      charCount: 820,
      sources: [],
      analysis: { originality: 63, complexity: 58, sentiment: 'neutral', language: 'English', detectedTopics: [] },
    };
  const originalText =
    location.state?.text ?? 'This is a demo paragraph about artificial intelligence and language models.';

  return (
    <section className="container-px py-10 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-1 grid place-items-center">
          <CircularProgress value={Math.round(results.plagiarismScore)} />
          <div className="text-white/70 mt-4">Plagiarism detected</div>
          <div className="text-xs text-white/50 mt-1">Originality: {Math.round(results.analysis.originality)}%</div>
        </Card>

        <Card className="md:col-span-2">
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <Metric label="Grammar" value={results.grammarScore} />
            <Metric label="Readability" value={results.readabilityScore} />
            <Metric label="Complexity" value={Math.round(results.analysis.complexity)} />
          </div>
          <div className="text-sm text-white/60 mb-4">
            Language: <span className="text-white/80">{results.analysis.language}</span> • Sentiment:{' '}
            <span className="text-white/80">{results.analysis.sentiment}</span> • Words:{' '}
            <span className="text-white/80">{results.wordCount}</span>
          </div>

          <div className="font-semibold mb-2">Sources matched</div>
          <div className="space-y-3">
            {(results.sources.length ? results.sources : getFallbackSources()).map((m) => (
              <div
                key={m.source}
                className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <div>
                  <div className="font-medium">{m.source}</div>
                  <div className="text-xs text-white/60">{m.type} • Confidence {Math.round(m.confidence * 100)}%</div>
                  <a href={m.url} className="text-xs text-accent-500">View source</a>
                </div>
                <div className="text-sm text-white/70">{Math.round(m.similarity * 100)}% match</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <Card>
          <div className="font-semibold mb-3">Highlighted text</div>
          <p className="text-white/80 leading-relaxed">{highlightText(originalText)}</p>
        </Card>
        <Card>
          <div className="font-semibold mb-3">Suggestions</div>
          <ul className="list-disc pl-5 space-y-2 text-white/80">
            <li>Rewrite the highlighted segments to increase originality.</li>
            <li>Add citations to matched sources where appropriate.</li>
            <li>Use more of your own analysis and synthesis.</li>
          </ul>
          <div className="mt-4">
            <Link to="/check" className="btn-ghost">Run another check</Link>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
      <div className="text-sm text-white/60">{label}</div>
      <div className="text-2xl font-semibold">{Math.round(value)}%</div>
    </div>
  );
}

function getFallbackSources(): SourceMatch[] {
  return [
    { source: 'arXiv - Transformer Models Overview', url: '#', similarity: 0.22, type: 'Research Paper', confidence: 0.9 },
    { source: 'ResearchGate - Neural Style Transfer Paper', url: '#', similarity: 0.14, type: 'Academic Paper', confidence: 0.86 },
  ];
}

function highlightText(text: string) {
  const words = text.split(' ');
  return words.map((w, i) => {
    const flagged = i % 7 === 0; // demo highlighting
    return (
      <span key={i} className={flagged ? 'bg-red-500/20 rounded px-1' : ''}>
        {w + (i < words.length - 1 ? ' ' : '')}
      </span>
    );
  });
}


