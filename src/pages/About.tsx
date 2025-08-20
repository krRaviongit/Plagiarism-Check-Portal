export default function About() {
  return (
    <section className="container-px py-12 max-w-3xl mx-auto">
      <div className="glass rounded-2xl p-6">
        <h2 className="text-2xl font-poppins font-semibold mb-3">About PlagiaShield</h2>
        <p className="text-white/80 leading-relaxed">
          PlagiaShield is a prototype UI for an AI-powered plagiarism detection tool. It showcases a modern,
          responsive frontend built with React, TailwindCSS, and Framer Motion. This demo does not upload data to any
          server. All content is processed locally for demonstration purposes only.
        </p>
        <p className="text-white/60 mt-4">
          Built by a small team passionate about beautiful UX and academic integrity.
        </p>
      </div>
    </section>
  );
}


