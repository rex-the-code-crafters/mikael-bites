export type Post = {
  tag: string
  tagColor: string
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
}

export type NewsletterIssue = {
  num: number
  date: string
  title: string
  preview: string
  openRate: string
  readers: string
}

export const allPosts: Post[] = [
  { tag: 'Review', tagColor: '#FF4D4D', title: 'Claude 4 vs GPT-5: Which AI Actually Wins in 2026?', excerpt: 'We ran both models through 200+ real-world tasks. The results are not what we expected.', date: 'Aug 24', readTime: '12 min', slug: 'claude-4-vs-gpt-5' },
  { tag: 'News', tagColor: 'var(--t1)', title: 'Anthropic Releases Claude 4 with 1M Token Context Window', excerpt: 'The latest model ships dramatically improved instruction-following.', date: 'Aug 22', readTime: '4 min', slug: 'anthropic-claude-4' },
  { tag: 'News', tagColor: 'var(--t1)', title: 'OpenAI Announces GPT-5 Enterprise Pricing Structure', excerpt: 'New tiered pricing hits API users hard. We break down who benefits.', date: 'Aug 21', readTime: '3 min', slug: 'openai-gpt5-pricing' },
  { tag: 'Tools', tagColor: 'var(--t1)', title: 'Sora 2.0 is Now Open to Everyone — Should You Switch?', excerpt: 'We tested it head-to-head with Runway Gen-4 across 40 prompts.', date: 'Aug 20', readTime: '6 min', slug: 'sora-2-review' },
  { tag: 'Review', tagColor: '#FF4D4D', title: 'Google Gemini Ultra 2: Is the Hype Finally Justified?', excerpt: 'Three weeks of daily use reveals a formidable model — with surprising blind spots.', date: 'Aug 18', readTime: '8 min', slug: 'gemini-ultra-2' },
  { tag: 'Review', tagColor: '#FF4D4D', title: 'Cursor AI: The Code Editor That Changed My Workflow', excerpt: "After six months of daily use, here's why I can't go back to VS Code.", date: 'Aug 15', readTime: '9 min', slug: 'cursor-ai-review' },
  { tag: 'List', tagColor: 'var(--t1)', title: 'Top 10 AI Coding Assistants Ranked This Week', excerpt: 'From Copilot to Cursor — we ranked every major coding assistant.', date: 'Aug 12', readTime: '6 min', slug: 'top-coding-assistants' },
  { tag: 'Review', tagColor: '#FF4D4D', title: 'Midjourney v7 vs DALL·E 4: Full Image Quality Test', excerpt: 'Side-by-side on 60 prompts. One model wins clearly.', date: 'Aug 10', readTime: '10 min', slug: 'midjourney-dalle-test' },
  { tag: 'News', tagColor: 'var(--t1)', title: 'Meta Releases Llama 4: Open-Source AI Just Got Serious', excerpt: 'Beats GPT-4o on benchmarks and is free commercially.', date: 'Aug 8', readTime: '5 min', slug: 'meta-llama-4' },
  { tag: 'Review', tagColor: '#FF4D4D', title: 'Perplexity Pro vs You.com: Which AI Search Wins?', excerpt: 'We used both as our main search for two weeks. The gap is bigger than expected.', date: 'Aug 5', readTime: '7 min', slug: 'perplexity-youcom' },
  { tag: 'Tools', tagColor: 'var(--t1)', title: 'The Best AI Writing Tools for Bloggers in 2026', excerpt: 'Jasper, Copy.ai, Sudowrite — we tested every major tool.', date: 'Aug 3', readTime: '8 min', slug: 'ai-writing-tools' },
  { tag: 'News', tagColor: 'var(--t1)', title: "Apple Intelligence 2.0: What's New and What's Missing", excerpt: "Apple's second AI update brings improvements — but still lags behind.", date: 'Jul 30', readTime: '4 min', slug: 'apple-intelligence-2' },
]

export const newsletterIssues: NewsletterIssue[] = [
  { num: 42, date: 'Aug 24', title: 'Claude 4 vs GPT-5: The Full Breakdown', preview: 'Which model wins across 8 task categories? Plus: Sora 2.0 opens to all.', openRate: '61%', readers: '4,210' },
  { num: 41, date: 'Aug 17', title: 'The Rise of AI Agents — Are We Ready?', preview: 'Autonomous AI agents are moving from demos to real products.', openRate: '58%', readers: '4,180' },
  { num: 40, date: 'Aug 10', title: "Google Gemini Ultra 2 Review + Meta's Big Open-Source Week", preview: 'Gemini Ultra 2 landed. Plus Meta dropped Llama 4.', openRate: '63%', readers: '4,150' },
  { num: 39, date: 'Aug 3', title: 'AI Search Is Getting Serious — Perplexity vs You.com', preview: 'We used both as our main search engine for two weeks.', openRate: '55%', readers: '4,120' },
  { num: 38, date: 'Jul 27', title: 'The Best AI Writing Tools of 2026 — Ranked', preview: 'Jasper, Copy.ai, Sudowrite, Claude. We tested all of them.', openRate: '67%', readers: '4,090' },
  { num: 37, date: 'Jul 20', title: 'Apple Intelligence 2.0: Bigger Than It Looks', preview: "Apple's second AI update is more significant than headlines suggest.", openRate: '59%', readers: '4,060' },
  { num: 36, date: 'Jul 13', title: 'Cursor AI Review: The Code Editor That Clicked', preview: "After six months of daily use, here's why I can't go back to VS Code.", openRate: '72%', readers: '4,030' },
  { num: 35, date: 'Jul 6', title: 'Midjourney v7 vs DALL·E 4: 60-Prompt Showdown', preview: 'Photography, illustration, graphic design — tested side by side.', openRate: '64%', readers: '3,990' },
]

export const tocSections = [
  { id: 'how-we-tested', label: 'How We Tested' },
  { id: 'claude-4', label: 'Claude 4: What It Does Best' },
  { id: 'gpt-5', label: 'GPT-5: Where It Leads' },
  { id: 'verdict', label: 'The Verdict' },
]
