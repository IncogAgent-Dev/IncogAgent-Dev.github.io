import { useEffect, useRef, useState } from "react";

type Token = { type: "text" | "ph"; value: string; id: number };

type MaskingResult = {
  maskedText: string;
  mapping: Record<string, string>;
};

type PrivacyMaskingEngine = {
  init: () => void;
  applyPrivacyMasking: (input: string) => MaskingResult;
};

type Metrics = {
  count: number;
  types: number;
};

const SAMPLE_TEXT = `From: Sarah Jenkins <s.jenkins@apple.com>
To: David Chen <d.chen@abc.com>
Subject: Interview Invitation for Senior AI Engineer

Hello David Chen,
We are pleased to invite you to an interview at Apple Park (One Apple Park Way, Cupertino, CA 95014).
Sarah Jenkins (s.jenkins@apple.com) or call (408) 996-1010.`;

const PLACEHOLDER_REGEX = /\{\{[^}]+\}\}/g;

export default function InteractiveDemo() {
  const [input, setInput] = useState(SAMPLE_TEXT);
  const [tokens, setTokens] = useState<Token[]>([]);
  const [mapping, setMapping] = useState<[string, string][]>([]);
  const [visiblePhs, setVisiblePhs] = useState<Set<number>>(new Set());
  const [visibleRows, setVisibleRows] = useState<Set<string>>(new Set());
  const [metrics, setMetrics] = useState<Metrics>({ count: 0, types: 0 });
  const [isPulsing, setIsPulsing] = useState(false);
  const timeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    const engine = (window as typeof window & { PrivacyMasking?: PrivacyMaskingEngine })
      .PrivacyMasking;
    if (engine) {
      engine.init();
    }

    return () => {
      timeoutsRef.current.forEach((id) => window.clearTimeout(id));
      timeoutsRef.current = [];
    };
  }, []);

  const clearTimers = () => {
    timeoutsRef.current.forEach((id) => window.clearTimeout(id));
    timeoutsRef.current = [];
  };

  const runMasking = () => {
    const engine = (window as typeof window & { PrivacyMasking?: PrivacyMaskingEngine })
      .PrivacyMasking;
    if (!engine || !input.trim()) {
      return;
    }

    clearTimers();

    const { maskedText, mapping: rawMapping } = engine.applyPrivacyMasking(input);

    const newTokens: Token[] = [];
    const placeholdersInText = new Set<string>();
    let lastIndex = 0;
    let match: RegExpExecArray | null = null;
    let idCounter = 0;

    PLACEHOLDER_REGEX.lastIndex = 0;
    while ((match = PLACEHOLDER_REGEX.exec(maskedText)) !== null) {
      if (match.index > lastIndex) {
        newTokens.push({
          type: "text",
          value: maskedText.slice(lastIndex, match.index),
          id: idCounter++,
        });
      }
      newTokens.push({ type: "ph", value: match[0], id: idCounter++ });
      placeholdersInText.add(match[0]);
      lastIndex = PLACEHOLDER_REGEX.lastIndex;
    }
    if (lastIndex < maskedText.length) {
      newTokens.push({
        type: "text",
        value: maskedText.slice(lastIndex),
        id: idCounter++,
      });
    }

    const mappingEntries = (Object.entries(rawMapping) as [string, string][]).filter(
      ([placeholder]) => placeholdersInText.has(placeholder)
    );

    setTokens(newTokens);
    setMapping(mappingEntries);
    setVisiblePhs(new Set());
    setVisibleRows(new Set());

    const typeCount = new Set(
      mappingEntries.map(([key]) =>
        key.replace("{{", "").replace("}}", "").split("_")[0]
      )
    ).size;

    setMetrics({ count: mappingEntries.length, types: typeCount });
    setIsPulsing(true);
    timeoutsRef.current.push(window.setTimeout(() => setIsPulsing(false), 600));

    let delay = 150;
    newTokens.forEach((token) => {
      if (token.type !== "ph") {
        return;
      }
      timeoutsRef.current.push(
        window.setTimeout(() => {
          setVisiblePhs((prev) => {
            const next = new Set(prev);
            next.add(token.id);
            return next;
          });
          setVisibleRows((prev) => {
            const next = new Set(prev);
            next.add(token.value);
            return next;
          });
        }, delay)
      );
      delay += 120;
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          className={`bg-white/70 backdrop-blur-2xl p-4 rounded-2xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all ${
            isPulsing ? "highlight-pulse" : ""
          }`}
        >
          <div className="text-2xl font-bold text-primary">{metrics.count}</div>
          <div className="text-xs text-gray-500 uppercase tracking-wider">
            Placeholders
          </div>
        </div>
        <div
          className={`bg-white/70 backdrop-blur-2xl p-4 rounded-2xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all ${
            isPulsing ? "highlight-pulse" : ""
          }`}
        >
          <div className="text-2xl font-bold text-gray-900">{metrics.types}</div>
          <div className="text-xs text-gray-500 uppercase tracking-wider">
            Types Detected
          </div>
        </div>
        <div className="bg-white/70 backdrop-blur-2xl p-4 rounded-2xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="text-2xl font-bold text-green-500 font-mono text-sm uppercase mt-1">
            Local Only
          </div>
          <div className="text-xs text-gray-500 uppercase tracking-wider">
            Security Mode
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/70 backdrop-blur-2xl rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col">
          <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center bg-gray-50/30">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              Input
            </span>
            <button
              onClick={() => setInput(SAMPLE_TEXT)}
              className="text-xs text-primary hover:underline"
            >
              Reset Sample
            </button>
          </div>
          <textarea
            className="flex-grow w-full p-6 text-gray-700 bg-transparent focus:outline-none resize-none min-h-[300px] font-sans"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <div className="p-4 bg-gray-50/50 border-t border-gray-100">
            <button
              onClick={runMasking}
              className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md"
            >
              Run Masking Logic 🔒
            </button>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-2xl rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col">
          <div className="px-6 py-4 border-b border-gray-50 bg-gray-50/30">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              Masked Output
            </span>
          </div>
          <div className="flex-grow p-6 font-sans leading-relaxed text-gray-800 overflow-y-auto min-h-[300px] whitespace-pre-wrap">
            {tokens.length > 0 ? (
              tokens.map((token) =>
                token.type === "ph" ? (
                  <span
                    key={token.id}
                    className={`mask-token ${
                      visiblePhs.has(token.id) ? "show" : ""
                    }`}
                  >
                    {token.value}
                  </span>
                ) : (
                  <span key={token.id}>{token.value}</span>
                )
              )
            ) : (
              <span className="text-gray-300 italic">
                Results will appear here...
              </span>
            )}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white/70 backdrop-blur-2xl rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50 bg-gray-50/30">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              Placeholder Mapping
            </span>
          </div>
          <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-x-8">
            {mapping.length > 0 ? (
              mapping.map(([placeholder, value]) => (
                <div
                  key={placeholder}
                  className={`mapping-row ${
                    visibleRows.has(placeholder) ? "show" : ""
                  }`}
                >
                  <span className="font-mono text-xs text-primary font-bold bg-primary/5 px-2 py-1 rounded">
                    {placeholder}
                  </span>
                  <span className="text-sm text-gray-600 truncate max-w-[200px]">
                    {value}
                  </span>
                </div>
              ))
            ) : (
              <div className="p-6 text-gray-300 italic">
                No mappings generated yet.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
