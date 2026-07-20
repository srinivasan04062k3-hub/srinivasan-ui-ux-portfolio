import profile from "@/assets/profile.asset.json";
import spatial from "@/assets/project-spatial.asset.json";
import rapido from "@/assets/project-rapido.asset.json";
import savesmart from "@/assets/project-savesmart.asset.json";
import meetmind from "@/assets/project-meetmind.asset.json";

import spatial1 from "@/assets/screens/spatial-1-scan.jpg";
import spatial2 from "@/assets/screens/spatial-2-specs.jpg";
import spatial3 from "@/assets/screens/spatial-3-replace.jpg";
import spatial4 from "@/assets/screens/spatial-4-compare.jpg";
import rapido1 from "@/assets/screens/rapido-1-home.jpg";
import rapido2 from "@/assets/screens/rapido-2-book.jpg";
import rapido3 from "@/assets/screens/rapido-3-track.jpg";
import save1 from "@/assets/screens/savesmart-1-overview.jpg";
import save2 from "@/assets/screens/savesmart-2-bento.jpg";
import save3 from "@/assets/screens/savesmart-3-transactions.jpg";
import meet1 from "@/assets/screens/meetmind-1-home.jpg";
import meet2 from "@/assets/screens/meetmind-2-live.jpg";
import meet3 from "@/assets/screens/meetmind-3-summary.jpg";

export const assets = {
  profile: profile.url,
  spatial: spatial.url,
  rapido: rapido.url,
  savesmart: savesmart.url,
  meetmind: meetmind.url,
};

const screenImages = {
  "spatial-living": [spatial1, spatial2, spatial3, spatial4],
  "rapido-ambulance": [rapido1, rapido2, rapido3],
  savesmart: [save1, save2, save3],
  "meetmind-ai": [meet1, meet2, meet3],
} as const;

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  duration: string;
  tools: string[];
  image: string;
  color: string;
  overview: string;
  problem: { business: string; user: string };
  goals: string[];
  research: string[];
  personas: { name: string; age: number; role: string; goal: string; pain: string }[];
  features: { title: string; desc: string }[];
  process: { title: string; desc: string }[];
  screens: { title: string; purpose: string; decisions: string; interaction: string; image?: string }[];
  designSystem: { typography: string; colors: string[]; components: string[] };
  challenges: string[];
  impact: string[];
  learnings: string[];
  futureScope: string[];
};

export const projects: Project[] = [
  {
    slug: "spatial-living",
    index: "01",
    title: "Spatial Living",
    subtitle: "AR/VR Interior Transformation Experience",
    category: "Spatial · AR / VR",
    year: "2025",
    role: "Lead UI/UX Designer",
    duration: "8 Weeks",
    tools: ["Figma", "Spline", "After Effects", "ProtoPie"],
    image: assets.spatial,
    color: "#8B7CF6",
    overview:
      "Spatial Living lets users scan any room with their phone, walk through a 1:1 digital twin, and swap real furniture in and out before spending a rupee. Built for people who love their space but hate the guesswork of buying online.",
    problem: {
      business:
        "Furniture retailers see a 30%+ return rate driven almost entirely by \"it doesn't fit / look right in my room.\" Every return erodes margin and clogs reverse logistics.",
      user:
        "People shop for furniture in dim showrooms or flat 2D images. They can't tell if a sofa will overwhelm the room, clash with the rug, or block the walkway — until it arrives.",
    },
    goals: [
      "Reduce purchase anxiety by letting users see furniture at real scale, in their real room.",
      "Cut return rates for partner retailers by 40% within 6 months.",
      "Make room scanning feel like magic — under 60 seconds, no expert setup.",
      "Support AR (phone), VR (headset), and Tablet in one cohesive design language.",
    ],
    research: [
      "18 in-depth interviews with recent furniture buyers across 3 cities.",
      "Diary study across 2 weeks tracking real-world buying hesitation moments.",
      "Competitive teardown of IKEA Place, Houzz, Wayfair View in Room, Amazon AR.",
      "Key insight — 82% of participants took a photo of their room before buying, but couldn't visualize scale.",
    ],
    personas: [
      {
        name: "Ananya, 28",
        age: 28,
        role: "First-time apartment renter",
        goal: "Furnish a 1BHK on a tight budget without buying twice.",
        pain: "Anxious about scale, layout and colour clashes.",
      },
      {
        name: "Rohan, 35",
        age: 35,
        role: "New homeowner",
        goal: "Design a cohesive living room he'll love for 5+ years.",
        pain: "Overwhelmed by choice, worried about resale of furniture that doesn't fit.",
      },
    ],
    features: [
      { title: "LiDAR Room Scan", desc: "Sub-60s capture with 98.4% spatial accuracy and confidence readout." },
      { title: "1:1 AR Placement", desc: "Snap furniture into position with physical dimensions overlaid live." },
      { title: "Immersive VR Walkthrough", desc: "Step inside the redesigned room at full scale on Vision Pro / Quest." },
      { title: "Before / After Compare", desc: "Slider on tablet to A/B the original vs the new layout." },
    ],
    process: [
      { title: "Discover", desc: "Interviews, diary study, competitive audit." },
      { title: "Define", desc: "Persona synthesis, opportunity map, jobs-to-be-done." },
      { title: "Ideate", desc: "Crazy 8s, tri-device sketch marathon, storyboarding." },
      { title: "Prototype", desc: "Low → Mid → High fidelity across AR, VR, Tablet." },
      { title: "Test", desc: "5-round usability with 24 users, SUS score 87." },
      { title: "Deliver", desc: "Design system, spec handoff, motion guidelines." },
    ],
    screens: [
      {
        title: "Room Scan",
        purpose: "Guide users through capturing an accurate 3D model of their room.",
        decisions: "Live confidence + progress bars remove the \"is it working?\" doubt users flagged in testing.",
        interaction: "Device tilt reveals scanning grid; haptic pulse confirms surface lock.",
      },
      {
        title: "Spatial Specs",
        purpose: "Show precise physical dimensions so users trust the AR overlay.",
        decisions: "Numbers rendered in monospaced type, anchored to the object, never floating.",
        interaction: "Tap any dimension to switch between cm / inches.",
      },
      {
        title: "Replace Furniture",
        purpose: "Let users swap the currently placed item without leaving the room view.",
        decisions: "Category pills + colour dots keep the browse-in-context flow one tap deep.",
        interaction: "\"Place in Room\" morphs into a magnetic anchor cursor.",
      },
      {
        title: "Before / After",
        purpose: "Reinforce the emotional payoff of the redesign.",
        decisions: "Draggable slider with subtle depth-of-field on the inactive half.",
        interaction: "Rubber-band physics on the divider, snap-to-center when released.",
      },
    ],
    designSystem: {
      typography: "General Sans Display for scale readouts, Söhne Mono for measurements.",
      colors: ["#0B0B12", "#8B7CF6", "#22D3EE", "#F5F5F7"],
      components: ["Confidence Ring", "Dimension Chip", "Category Pill", "Compare Slider", "Immersive Toggle"],
    },
    challenges: [
      "Balancing information density on AR overlays without occluding the room.",
      "Designing one system that survives being rendered on a 6\" phone and a Vision Pro headset.",
      "Communicating scan quality without exposing raw LiDAR jargon.",
    ],
    impact: [
      "SUS score 87 across 24 test users.",
      "Projected 42% reduction in return rates in retailer pilot.",
      "Onboarding time cut from 4m 12s to 47s median.",
    ],
    learnings: [
      "Confidence readouts matter more than raw accuracy — trust is a feeling, not a number.",
      "Cross-device systems need one shared spatial grammar, not three parallel design languages.",
    ],
    futureScope: [
      "Multi-room continuity so users can design a whole home in one session.",
      "AI style-matching that suggests pieces from the user's existing palette.",
    ],
  },
  {
    slug: "rapido-ambulance",
    index: "02",
    title: "Rapido Ambulance Mode",
    subtitle: "One-tap emergency ambulance inside a familiar ride-hailing app",
    category: "Healthcare · Mobility",
    year: "2025",
    role: "UI/UX Designer",
    duration: "5 Weeks",
    tools: ["Figma", "Maze", "Lottie", "Notion"],
    image: assets.rapido,
    color: "#EF4444",
    overview:
      "A dedicated emergency mode inside Rapido that gets an ambulance moving to your location in under 90 seconds — with live tracking, nearest-hospital routing, and automatic alerts to your emergency contacts.",
    problem: {
      business:
        "Ambulance dispatch in Indian cities is fragmented across dozens of numbers. Rapido has the driver network and location infrastructure to solve a genuinely life-saving problem.",
      user:
        "In an emergency, seconds cost lives. People fumble between apps, forget hospital numbers, and can't share their exact location while panicking.",
    },
    goals: [
      "Get an ambulance dispatched in under 90 seconds from app open.",
      "Zero cognitive load — anyone can use it while panicking.",
      "Auto-notify emergency contacts with live location and hospital ETA.",
      "Blend into the existing Rapido app without breaking familiarity.",
    ],
    research: [
      "Interviews with 12 users who had recently experienced a medical emergency.",
      "Field study at 3 hospital ERs observing patient arrival flow.",
      "Analysis of 108 dispatch data and voice-call transcripts.",
      "Key insight — panic dramatically shrinks working memory. UI must forgive every wrong tap.",
    ],
    personas: [
      {
        name: "Meera, 42",
        age: 42,
        role: "Working mother",
        goal: "Get help for her father during a cardiac episode.",
        pain: "Can't recall hospital numbers, hands trembling, poor network.",
      },
      {
        name: "Karthik, 26",
        age: 26,
        role: "Bystander at accident",
        goal: "Get an ambulance to a stranger without knowing the address.",
        pain: "Doesn't know local emergency numbers, low battery.",
      },
    ],
    features: [
      { title: "One-tap Booking", desc: "A single, unmissable Book Now — no forms, no picker." },
      { title: "Nearest Hospital Routing", desc: "Real-time availability across a verified hospital network." },
      { title: "Live Ambulance Tracking", desc: "ETA plus driver+paramedic profile with one-tap call." },
      { title: "Auto Family Alerts", desc: "Emergency contacts get live location the moment you book." },
    ],
    process: [
      { title: "Empathize", desc: "Emergency interviews, ER shadowing." },
      { title: "Define", desc: "Panic-first design principles, hard constraints on tap-count." },
      { title: "Ideate", desc: "Storyboarding worst-case flows: dropped calls, dying battery." },
      { title: "Prototype", desc: "High-contrast prototypes tested with adrenaline simulation." },
      { title: "Test", desc: "Timed task completion — target under 15s to dispatch." },
      { title: "Deliver", desc: "Spec doc, motion guidelines, driver-side handoff." },
    ],
    screens: [
      {
        title: "Home with Ambulance Card",
        purpose: "Make the emergency entry point discoverable without alarming casual users.",
        decisions: "Red card with ambulance illustration lives above the fold — familiar Rapido chrome around it.",
        interaction: "Card gently pulses once every 8s to build recall, never anxiety.",
      },
      {
        title: "Book Now Flow",
        purpose: "Get an ambulance dispatched in the fewest possible taps.",
        decisions: "One 64pt button, single confirmation, auto-detect location. No forms.",
        interaction: "Long-press cancel prevents accidental dismissal after booking.",
      },
      {
        title: "Live Tracking",
        purpose: "Reassure the user that help is actually on the way.",
        decisions: "Map with animated route + big ETA number. Driver+paramedic photo builds trust.",
        interaction: "Swipe up reveals hospital info; auto SMS to family sends silently.",
      },
    ],
    designSystem: {
      typography: "General Sans, 18pt minimum body, 24pt for critical actions.",
      colors: ["#EF4444", "#111827", "#F9FAFB", "#22C55E"],
      components: ["Emergency Card", "One-tap CTA", "Live ETA Chip", "Contact Alert Toast"],
    },
    challenges: [
      "Making an emergency feature discoverable without making the whole app feel scary.",
      "Designing for shaky hands, tears, and glare — literally.",
      "Balancing speed of dispatch with legally required consent screens.",
    ],
    impact: [
      "Prototype dispatch time — 11s median (target was 15s).",
      "94% of test users found Book Now on first try, no onboarding.",
      "Concept won internal healthcare-innovation review.",
    ],
    learnings: [
      "In emergencies, the fewest words win. Every removed label reduced hesitation.",
      "Familiar chrome around unfamiliar features lowers panic dramatically.",
    ],
    futureScope: [
      "Apple Watch / voice-first dispatch.",
      "Hospital pre-check-in with insurance auto-fill.",
    ],
  },
  {
    slug: "savesmart",
    index: "03",
    title: "SaveSmart",
    subtitle: "Banking that actually feels like it works for you",
    category: "FinTech · Mobile Banking",
    year: "2025",
    role: "UI/UX Designer",
    duration: "6 Weeks",
    tools: ["Figma", "Framer", "Rive", "Notion"],
    image: assets.savesmart,
    color: "#2563EB",
    overview:
      "A modern mobile banking experience designed for simplicity, security, and everyday life — with quick access to what people actually use 10 times a day, and none of the legacy banking clutter.",
    problem: {
      business:
        "Legacy bank apps rank 2.1★ on average. Every friction point drives users to third-party wallets, shrinking the bank's share of the customer relationship.",
      user:
        "People check their balance 4x a day but wade through 6 taps of menus to get there. Sending money to a friend should not feel like filing taxes.",
    },
    goals: [
      "Get the top 5 banking tasks under 2 taps.",
      "Make the primary screen glanceable — full balance and recent activity above the fold.",
      "Build trust through visual clarity, not stern chrome.",
      "Design a system that scales to cards, goals, and investments without a redesign.",
    ],
    research: [
      "Survey of 240 mobile banking users across ages 22-55.",
      "Task-analysis of top 5 Indian banking apps.",
      "First-click testing on 3 competing homescreens.",
      "Key insight — users conflate visual noise with security. Cleaner UI is trusted MORE, not less.",
    ],
    personas: [
      {
        name: "Alex, 29",
        age: 29,
        role: "Salaried professional",
        goal: "Track spending and hit savings goals without spreadsheets.",
        pain: "Existing bank app feels like a form, not a tool.",
      },
      {
        name: "Priya, 38",
        age: 38,
        role: "Small business owner",
        goal: "Split personal and business expenses at a glance.",
        pain: "Loses time to slow, cluttered banking workflows.",
      },
    ],
    features: [
      { title: "Overview Home", desc: "Balance, Send / Receive / Top Up / More — one tap deep." },
      { title: "Quick Access Bento", desc: "Bills, Analytics, Goals, Cards — customisable per user." },
      { title: "Recent Transactions", desc: "Merchant icons, amounts, categories — scannable, not tabular." },
      { title: "Card Wallet", desc: "Beautifully rendered card faces with quick-freeze and PIN reveal." },
    ],
    process: [
      { title: "Research", desc: "Survey, competitive audit, task analysis." },
      { title: "Define", desc: "Job stories for the top 5 tasks." },
      { title: "Ideate", desc: "Homescreen studies — 12 variants down to 3." },
      { title: "Prototype", desc: "High-fidelity flow across 26 screens." },
      { title: "Test", desc: "Task-completion + SUS with 18 participants." },
      { title: "Deliver", desc: "Design tokens, motion spec, dev handoff." },
    ],
    screens: [
      {
        title: "Overview",
        purpose: "One-glance answer to \"how much do I have and what happened today.\"",
        decisions: "Balance is the biggest thing on the screen. Actions are large, iconographic, single-purpose.",
        interaction: "Eye icon toggles balance privacy with a satisfying blur transition.",
      },
      {
        title: "Quick Access",
        purpose: "Give power users a customisable shortcut layer.",
        decisions: "2x2 bento with contextual sublabels (\"Due Soon\", \"Spending\") replacing generic menu names.",
        interaction: "Long-press to re-order; springy drop animation.",
      },
      {
        title: "Recent Transactions",
        purpose: "Trigger recognition, not scanning.",
        decisions: "Merchant colour dots + logo silhouettes replace generic bank category icons.",
        interaction: "Swipe row to categorise or split.",
      },
    ],
    designSystem: {
      typography: "General Sans, tabular figures for all currency.",
      colors: ["#0B1E3F", "#2563EB", "#22C55E", "#F8FAFC"],
      components: ["Balance Card", "Action Pod", "Bento Tile", "Transaction Row", "Card Face"],
    },
    challenges: [
      "Convincing stakeholders that less chrome = more trust.",
      "Designing merchant iconography that scales to 400+ brands.",
      "Making numbers feel calm, not alarming, in the red.",
    ],
    impact: [
      "Task-completion time down 46% vs benchmark app.",
      "SUS score 89 (competitor benchmark 62).",
      "Concept selected for internal banking-innovation showcase.",
    ],
    learnings: [
      "In finance, restraint reads as competence.",
      "Users want fewer decisions on the homescreen, not more surfacing.",
    ],
    futureScope: [
      "Goal-based investing tied into the same card wallet.",
      "AI-powered spending nudges that don't feel judgemental.",
    ],
  },
  {
    slug: "meetmind-ai",
    index: "04",
    title: "MeetMind AI",
    subtitle: "Your intelligent meeting companion",
    category: "AI · Productivity",
    year: "2024",
    role: "Product Designer",
    duration: "6 Weeks",
    tools: ["Figma", "Photoshop", "Illustrator", "Miro"],
    image: assets.meetmind,
    color: "#10B981",
    overview:
      "MeetMind AI records, transcribes, translates and summarises meetings automatically — so you can be fully present in the room instead of taking notes.",
    problem: {
      business:
        "Knowledge workers lose ~4 hours a week to note-taking and post-meeting summaries. Existing tools either transcribe OR summarise — never both, and rarely with translation.",
      user:
        "People either miss key moments while writing, or forget them entirely by end of day. Cross-language calls make it worse.",
    },
    goals: [
      "Deliver a live meeting transcript with speaker labels in real time.",
      "Auto-generate a shareable summary within 30s of meeting end.",
      "Support live translation across 12+ languages.",
      "Feel like a companion, not a surveillance tool.",
    ],
    research: [
      "Journals kept by 15 knowledge workers across a full week.",
      "Interviews with hybrid team leads at 4 companies.",
      "Audit of Otter, Fireflies, Fathom, Read.ai.",
      "Key insight — trust in AI notes hinges entirely on the ability to jump to the source moment.",
    ],
    personas: [
      {
        name: "Emma, 31",
        age: 31,
        role: "Product manager",
        goal: "Stay present in customer calls, capture every decision.",
        pain: "Split attention between speaking and typing.",
      },
      {
        name: "Daniel, 44",
        age: 44,
        role: "Consulting lead",
        goal: "Deliver client summaries within an hour of the call.",
        pain: "Spends the evening rewriting scribbled notes.",
      },
    ],
    features: [
      { title: "Live Transcription", desc: "Speaker-attributed, timestamped, jump-to-audio on tap." },
      { title: "AI Summary", desc: "Themed summary with decisions, action items, and open questions." },
      { title: "Live Translation", desc: "On-the-fly translation without breaking transcript layout." },
      { title: "AI Chat", desc: "Ask questions about any meeting — \"what did Emma commit to?\"" },
    ],
    process: [
      { title: "Discover", desc: "Journaling study + competitive audit." },
      { title: "Define", desc: "Trust framework: attribution, source-linking, editability." },
      { title: "Ideate", desc: "Interface studies for live + retrospective modes." },
      { title: "Prototype", desc: "Motion-heavy prototypes for waveform + transcript sync." },
      { title: "Test", desc: "5-day trial with a real product team." },
      { title: "Deliver", desc: "Component library, motion guidelines." },
    ],
    screens: [
      {
        title: "Home",
        purpose: "Get users into their next / current meeting in one tap.",
        decisions: "Upcoming meeting takes the hero slot; AI Notes preview builds trust before the call even starts.",
        interaction: "Card gently breathes when the meeting starts within 10 minutes.",
      },
      {
        title: "Live Meeting",
        purpose: "Confidence that transcription is working, without pulling focus.",
        decisions: "Waveform + live timer at the top; participants ambient below; controls docked.",
        interaction: "Tap any transcript line to jump audio; long-press to add a highlight.",
      },
      {
        title: "Transcript + Summary",
        purpose: "Two views on the same source of truth.",
        decisions: "Segmented control keeps context stable; summary items link back to transcript timestamps.",
        interaction: "Copy-to-clipboard triggers a subtle checkmark ripple.",
      },
    ],
    designSystem: {
      typography: "General Sans body, IBM Plex Mono for timestamps.",
      colors: ["#10B981", "#0F172A", "#F1F5F9", "#F59E0B"],
      components: ["Meeting Card", "Waveform", "Transcript Row", "Summary Chip", "AI Chat Bubble"],
    },
    challenges: [
      "Rendering a live transcript that never jitters as new words arrive.",
      "Communicating AI-generated content without misleading users about certainty.",
      "Designing a tone that felt helpful, never creepy.",
    ],
    impact: [
      "Trial team reported 3.2 hours/week saved per person.",
      "Zero users disabled the transcript view after day one.",
      "Chosen as 2024 UX case-study centrepiece.",
    ],
    learnings: [
      "AI features need visible seams — users trust what they can inspect.",
      "Motion is how you communicate \"this is still listening\" without a red dot.",
    ],
    futureScope: [
      "Real-time coaching prompts for interviewers and sales reps.",
      "Company-wide knowledge search across every meeting.",
    ],
  },
];

// Attach unique per-screen mockups.
for (const p of projects) {
  const imgs = screenImages[p.slug as keyof typeof screenImages];
  if (imgs) {
    p.screens = p.screens.map((s, i) => ({ ...s, image: imgs[i] ?? imgs[imgs.length - 1] }));
  }
}

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
