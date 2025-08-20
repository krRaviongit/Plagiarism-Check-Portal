import { useLocation, Link } from 'react-router-dom';
import Card from '../components/Card';
import CircularProgress from '../components/CircularProgress';

const dummyMatches = [
  { source: 'ResearchGate - Neural Style Transfer Paper', url: '#', similarity: 0.22 },
  { source: 'arXiv - Transformer Models Overview', url: '#', similarity: 0.14 },
  { source: 'Medium - Writing with AI', url: '#', similarity: 0.09 },
];

export default function Results() {
  const location = useLocation() as { state?: { percent?: number; text?: string } };
  const percent = location.state?.percent ?? 37;
  const originalText = location.state?.text ?? 'This is a demo paragraph about artificial intelligence and language models.';

  return (
    <section className="container-px py-10 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-1 grid place-items-center">
          <CircularProgress value={percent} />
          <div className="text-white/70 mt-4">Plagiarism detected</div>
        </Card>

        <Card className="md:col-span-2">
          <div className="font-semibold mb-3">Sources matched</div>
          <div className="space-y-3">
            {dummyMatches.map((m) => (
              <div key={m.source} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-4">
                <div>
                  <div className="font-medium">{m.source}</div>
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
          <p className="text-white/80 leading-relaxed">
            {highlightText(originalText)}
          </p>
        </Card>
        <Card>
          <div className="font-semibold mb-3">Suggestions</div>
          <ul className="list-disc pl-5 space-y-2 text-white/80">
            <li>Consider rephrasing highlighted parts to be more unique.</li>
            <li>Add citations to proper sources where necessary.</li>
            <li>Use your own analysis and commentary to increase originality.</li>
          </ul>
          <div className="mt-4">
            <Link to="/check" className="btn-ghost">Run another check</Link>
          </div>
        </Card>
      </div>
    </section>
  );
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


