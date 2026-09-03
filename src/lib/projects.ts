import profile from "@/assets/profile.asset.json";
import spatial from "@/assets/project-spatial-cover.asset.json";
import rapido from "@/assets/project-rapido-cover.asset.json";
import savesmart from "@/assets/project-savesmart-cover.asset.json";
import meetmind from "@/assets/project-meetmind-cover.asset.json";

import tractoCover from "@/assets/screens/tracto-cover.jpg";
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
  tracto: tractoCover,
};

export type ProjectLinks = { caseStudy?: string; prototype?: string };

export type Project = {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  label: string;
  year: string;
  role: string;
  duration: string;
  tools: string[];
  image: string;
  color: string;
  highlights: string[];
  links?: ProjectLinks;
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
  outcome: string[];
  learnings: string[];
  futureScope: string[];
};

const CONCEPT = "Concept Case Study";
const ROLE = "UI/UX Designer — end-to-end (self-initiated concept)";

export const projects: Project[] = [
  {
    slug: "rapido-ambulance",
    index: "01",
    title: "Rapido Ambulance Mode",
    subtitle: "An emergency ambulance experience designed for the worst possible moment.",
    category: "Mobility · Healthcare · Emergency UX",
    label: "UX Concept Case Study",
    year: "2025",
    role: ROLE,
    duration: "Self-initiated",
    tools: ["Figma", "FigJam", "Notion"],
    image: rapido.url,
    color: "#FF3B30",
    highlights: ["Emergency SOS", "Ambulance Booking", "Hospital Information", "Emergency Navigation"],
    links: {
      caseStudy:
        "https://www.figma.com/proto/g7nt3vuQHjSFq9hxkQeVTB/rapidi?node-id=1-2&viewport=274%2C240%2C0.04&t=U0aLQebTSoLjlcN5-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      prototype:
        "https://www.figma.com/make/Ia5mXPnmFaQzCDQGxFQ6fh/Design-App-with-Reference-Image?fullscreen=1&t=cEncgKOKqLBIYYTF-1&code-node-id=0-9",
    },
    overview:
      "A conceptual emergency ambulance experience designed to make emergency transportation faster, clearer and easier to access during critical situations. The goal was to design an interface a panicking, untrained person can use correctly on the first try.",
    problem: {
      business:
        "Ride-hailing apps are optimised for browsing and choice. An emergency mode has to invert that model — fewer decisions, larger targets and one obvious next action.",
      user:
        "In an emergency, people don't read. They scan. Standard booking flows ask for too many inputs at exactly the moment the user has the least attention available.",
    },
    goals: [
      "Reduce the emergency booking flow to the smallest possible number of decisions.",
      "Make the primary action unmistakable through size, colour and position.",
      "Communicate ambulance and hospital status in plain, calm language.",
      "Keep the experience readable under stress, one-handed and in bright daylight.",
    ],
    research: [
      "Reviewed public guidance on emergency response and ambulance access in Indian cities.",
      "Heuristic review of existing ride-hailing and emergency apps for stress usability.",
      "Mapped the emergency journey: realise → call → wait → track → arrive.",
      "Identified the core design constraint: high stress, low attention, one hand.",
    ],
    personas: [
      {
        name: "Karthik",
        age: 29,
        role: "Bystander at an accident",
        goal: "Get an ambulance moving without knowing any local numbers.",
        pain: "Doesn't know who to call or what information to give.",
      },
      {
        name: "Lakshmi",
        age: 54,
        role: "Family caregiver",
        goal: "Reach the nearest hospital that can actually admit her father.",
        pain: "No visibility into which hospital has capacity right now.",
      },
    ],
    features: [
      { title: "Emergency SOS", desc: "A single, persistent action that starts the emergency flow immediately." },
      { title: "Ambulance Booking", desc: "Type of ambulance and pickup confirmed in as few taps as possible." },
      { title: "Hospital Information", desc: "Nearby hospitals with distance, department and availability status." },
      { title: "Emergency Navigation", desc: "Live route and driver contact with clear, glanceable status." },
    ],
    process: [
      { title: "Discover", desc: "Understand the emergency context and its constraints." },
      { title: "Define", desc: "Frame the problem around attention, not features." },
      { title: "Ideate", desc: "Explore multiple entry points for the SOS action." },
      { title: "Structure", desc: "User flows and wireframes for the shortest path." },
      { title: "Design", desc: "High-contrast red emergency system with large targets." },
      { title: "Prototype", desc: "Interactive Figma prototype of the full booking flow." },
    ],
    screens: [
      {
        title: "Emergency Home",
        purpose: "Give one unmistakable way into the emergency flow.",
        decisions: "Emergency red is reserved exclusively for the SOS action so it never competes with anything else.",
        interaction: "Press and hold to confirm, preventing accidental triggers without adding a dialog.",
        image: rapido1,
      },
      {
        title: "Book Ambulance",
        purpose: "Confirm ambulance type and pickup with minimum input.",
        decisions: "Location is pre-filled and editable rather than requested; defaults do the work.",
        interaction: "Single-column cards with 44px+ targets, reachable one-handed.",
        image: rapido2,
      },
      {
        title: "Track & Navigate",
        purpose: "Reduce anxiety during the wait with clear, honest status.",
        decisions: "Plain-language status over jargon; driver contact is always one tap away.",
        interaction: "Live map with a persistent status sheet that never fully hides the route.",
        image: rapido3,
      },
    ],
    designSystem: {
      typography: "Inter — large weights for status, generous line height",
      colors: ["#FF3B30", "#111827", "#F8F9FB", "#FFFFFF"],
      components: ["SOS button", "Status sheet", "Hospital card", "Map overlay", "Alert banner"],
    },
    challenges: [
      "Designing urgency without creating visual panic.",
      "Balancing speed of booking against the need to confirm critical details.",
      "Keeping the map readable while surfacing status at the same time.",
    ],
    outcome: [
      "A complete emergency flow prototyped end to end in Figma.",
      "A focused colour and type system dedicated to emergency states.",
      "A clearer personal framework for designing under-stress interfaces.",
    ],
    learnings: [
      "Defaults are a design decision — every avoidable input costs time.",
      "Contrast and hierarchy matter more than decoration in critical UI.",
      "Plain language is an accessibility feature.",
    ],
    futureScope: [
      "Voice-triggered SOS for situations where the screen can't be used.",
      "Offline-first fallback for low-connectivity areas.",
      "Accessibility pass for screen readers and large text modes.",
    ],
  },
  {
    slug: "savesmart",
    index: "02",
    title: "SaveSmart",
    subtitle: "A savings experience that turns intentions into habits.",
    category: "FinTech · Mobile App",
    label: "UX Case Study — Concept",
    year: "2025",
    role: ROLE,
    duration: "Self-initiated",
    tools: ["Figma", "FigJam", "Notion"],
    image: savesmart.url,
    color: "#F9C935",
    highlights: ["Savings Goals", "Progress Tracking", "Simple Financial Experience", "Mobile-First UX"],
    links: {
      caseStudy:
        "https://www.figma.com/proto/znE78PVPsqplpdZakuDP7t/savings-app?node-id=19-9323&page-id=0%3A1&t=LOSn7WjFXrgQfsYW-1",
      prototype:
        "https://www.figma.com/make/2E2L5aF6oJqcfQUWauAmZt/saving?fullscreen=1&t=UIYSokZhTldU46cV-1&code-node-id=0-9",
    },
    overview:
      "A smart savings experience designed to help users create savings goals, track progress and build better saving habits — without the dense charts and jargon that make most finance apps feel intimidating.",
    problem: {
      business:
        "Finance apps show data, not direction. Users open them, feel judged, and close them again.",
      user:
        "People know they should save but can't see progress in a way that feels motivating or personal.",
    },
    goals: [
      "Make a savings goal creatable in under a minute.",
      "Show progress visually before showing numbers.",
      "Design a calm, non-judgemental financial tone.",
      "Keep the whole experience comfortable one-handed on a 390px screen.",
    ],
    research: [
      "Reviewed common savings and budgeting patterns across popular mobile finance apps.",
      "Heuristic evaluation focused on first-run experience and empty states.",
      "Mapped the habit loop: set goal → contribute → see progress → repeat.",
      "Identified the biggest drop-off risk as the empty first screen.",
    ],
    personas: [
      {
        name: "Divya",
        age: 24,
        role: "First-job saver",
        goal: "Save for a laptop without tracking every rupee manually.",
        pain: "Existing apps feel like accounting software.",
      },
      {
        name: "Arun",
        age: 31,
        role: "Multi-goal planner",
        goal: "Run three goals in parallel and know which is falling behind.",
        pain: "Progress is buried inside charts and statements.",
      },
    ],
    features: [
      { title: "Savings Goals", desc: "Named goals with a target amount and a target date." },
      { title: "Progress Tracking", desc: "Visual progress first, precise numbers on demand." },
      { title: "Simple Financial Experience", desc: "Plain language, no jargon, no shaming." },
      { title: "Mobile-First UX", desc: "Thumb-reachable layout designed from 390px up." },
    ],
    process: [
      { title: "Discover", desc: "Understand why saving apps get abandoned." },
      { title: "Define", desc: "Frame the problem as motivation, not maths." },
      { title: "Ideate", desc: "Explore card, bento and list-based progress models." },
      { title: "Structure", desc: "Flows for goal creation, contribution and review." },
      { title: "Design", desc: "Warm, calm visual system with a single accent." },
      { title: "Prototype", desc: "Interactive prototype covering the full habit loop." },
    ],
    screens: [
      {
        title: "Overview",
        purpose: "Answer 'am I on track?' within two seconds of opening the app.",
        decisions: "One hero number, everything else secondary — hierarchy does the explaining.",
        interaction: "Pull to refresh; cards expand in place instead of navigating away.",
        image: save1,
      },
      {
        title: "Goals Bento",
        purpose: "Compare multiple goals at a glance.",
        decisions: "Bento sizing communicates priority without extra labels.",
        interaction: "Tap to expand a goal; long-press to reorder priority.",
        image: save2,
      },
      {
        title: "Transactions",
        purpose: "Make every contribution traceable without feeling like a ledger.",
        decisions: "Grouped by day with generous spacing and quiet secondary text.",
        interaction: "Sticky date headers with smooth scroll and lightweight filters.",
        image: save3,
      },
    ],
    designSystem: {
      typography: "Inter — tabular numerals for amounts",
      colors: ["#F9C935", "#111827", "#667085", "#F8F9FB"],
      components: ["Goal card", "Progress ring", "Amount input", "Transaction row", "Empty state"],
    },
    challenges: [
      "Showing financial detail without overwhelming the first screen.",
      "Designing empty states that motivate rather than block.",
      "Using a bright accent without it becoming the whole interface.",
    ],
    outcome: [
      "A complete goal-creation and tracking flow prototyped in Figma.",
      "A reusable component set for cards, progress and amount inputs.",
      "A clear point of view on calm financial tone of voice.",
    ],
    learnings: [
      "Empty states are the real onboarding.",
      "Visual progress motivates more than precise numbers.",
      "Restraint with an accent colour makes it more powerful.",
    ],
    futureScope: [
      "Automated round-up contributions.",
      "Shared household goals.",
      "Accessibility audit for colour contrast on the yellow accent.",
    ],
  },
  {
    slug: "spatial-living",
    index: "03",
    title: "Spatial Living",
    subtitle: "See the room before you change the room.",
    category: "AR / VR · Spatial Design",
    label: "AR/VR UX Concept",
    year: "2025",
    role: ROLE,
    duration: "Self-initiated",
    tools: ["Figma", "Spline", "FigJam"],
    image: spatial.url,
    color: "#4F46E5",
    highlights: ["Room Scanning", "Digital Twin", "Furniture Placement", "AR Visualization", "VR Experience"],
    links: {
      caseStudy:
        "https://www.figma.com/proto/emEFeI7yPrDYA3mEnknlCA/ar-vr?page-id=0%3A1&node-id=2-2&t=QEOGD6FGNhntZWuk-1",
      prototype:
        "https://www.figma.com/proto/ORXnpa7R3aqqjSvqrf6itl/AR-VR-App?node-id=1-711&p=f&viewport=180%2C281%2C0.12&t=WNrzT20apsXctZU7-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    },
    overview:
      "An AR/VR interior design experience that allows users to visualise, rearrange and transform their spaces before making physical changes — bridging the gap between imagining a room and committing to it.",
    problem: {
      business:
        "Furniture is bought from flat 2D images, and mismatch between expectation and reality drives returns.",
      user:
        "People can't judge scale, proportion or clearance from a product photo, so buying feels like a gamble.",
    },
    goals: [
      "Make room scanning feel effortless and fast.",
      "Let users place furniture at true scale in their own space.",
      "Design one coherent language across phone AR, tablet and VR.",
      "Keep spatial controls learnable without a tutorial.",
    ],
    research: [
      "Teardown of existing AR furniture tools and their onboarding flows.",
      "Mapped the spatial journey: scan → understand → place → compare → decide.",
      "Studied AR interaction patterns for placement, snapping and constraints.",
      "Identified the key friction as trust — users don't believe the scale is accurate.",
    ],
    personas: [
      {
        name: "Ananya",
        age: 26,
        role: "First-time renter",
        goal: "Furnish a small apartment without buying twice.",
        pain: "Anxious about scale and layout in a compact space.",
      },
      {
        name: "Rohan",
        age: 34,
        role: "New homeowner",
        goal: "Plan a cohesive living room before ordering anything.",
        pain: "Too many options, no way to compare them in context.",
      },
    ],
    features: [
      { title: "Room Scanning", desc: "Guided capture with live feedback so users know it's working." },
      { title: "Digital Twin", desc: "A measured 1:1 model of the room to design against." },
      { title: "Furniture Placement", desc: "True-scale placement with dimensions and clearance shown." },
      { title: "AR Visualisation", desc: "See the change in the actual room through the camera." },
      { title: "VR Experience", desc: "Walk the redesigned space at full scale on a headset." },
    ],
    process: [
      { title: "Discover", desc: "Understand hesitation in buying furniture online." },
      { title: "Define", desc: "Frame the problem as spatial confidence." },
      { title: "Ideate", desc: "Sketch tri-device interaction models." },
      { title: "Structure", desc: "Flows across scan, place and compare." },
      { title: "Design", desc: "Spatial UI language with depth-aware surfaces." },
      { title: "Prototype", desc: "Interactive AR/VR prototype in Figma and Spline." },
    ],
    screens: [
      {
        title: "Room Scan",
        purpose: "Guide the user through capturing an accurate model of the room.",
        decisions: "Live progress and coverage feedback removes the 'is this working?' doubt.",
        interaction: "Device tilt reveals the scanning grid; a subtle pulse confirms surface lock.",
        image: spatial1,
      },
      {
        title: "Spatial Specs",
        purpose: "Show real measurements so users trust what they see.",
        decisions: "Dimensions sit on the object, not in a panel, keeping attention in the space.",
        interaction: "Tap a surface to pin measurements; drag to re-measure.",
        image: spatial2,
      },
      {
        title: "Replace Furniture",
        purpose: "Swap existing pieces for alternatives in context.",
        decisions: "A low, thumb-reachable tray keeps the room visible while browsing.",
        interaction: "Drag from tray into the room; pieces snap to walls and floor.",
        image: spatial3,
      },
      {
        title: "Before / After",
        purpose: "Support the final decision with a direct comparison.",
        decisions: "A single slider beats side-by-side thumbnails for judging change.",
        interaction: "Drag the divider to wipe between original and redesigned room.",
        image: spatial4,
      },
    ],
    designSystem: {
      typography: "Inter — light weights over camera feed, high contrast chips",
      colors: ["#4F46E5", "#111827", "#F8F9FB", "#FFFFFF"],
      components: ["Scan overlay", "Measurement chip", "Furniture tray", "Compare slider", "Depth card"],
    },
    challenges: [
      "Keeping UI legible over unpredictable camera backgrounds.",
      "Designing controls that work on phone, tablet and headset.",
      "Communicating spatial accuracy without technical jargon.",
    ],
    outcome: [
      "A tri-device concept prototyped across AR, tablet and VR views.",
      "A spatial UI kit with overlay, measurement and tray components.",
      "A stronger understanding of depth, contrast and 3D affordances.",
    ],
    learnings: [
      "In spatial UI, the room is the canvas — the interface must yield to it.",
      "Feedback builds trust; silence reads as failure.",
      "Comparison is the moment a decision actually happens.",
    ],
    futureScope: [
      "Lighting simulation across times of day.",
      "Shared spaces for couples and flatmates.",
      "Accessibility mode with voice-guided scanning.",
    ],
  },
  {
    slug: "meetmind-ai",
    index: "04",
    title: "MeetMind AI",
    subtitle: "Be present in the meeting, not in your notes.",
    category: "AI · Productivity",
    label: "AI Product Concept",
    year: "2025",
    role: ROLE,
    duration: "Self-initiated",
    tools: ["Figma", "FigJam", "ChatGPT"],
    image: meetmind.url,
    color: "#10B981",
    highlights: ["AI Summary", "Meeting Insights", "Action Items", "Information Organization"],
    links: {
      caseStudy:
        "https://www.figma.com/proto/SAzJFr20RHUidLmTgbu1Zk/metting-ai?page-id=0%3A1&node-id=1-3&t=H6gGhbc7UEwICiBp-1",
    },
    overview:
      "An AI-powered meeting assistant concept that helps users capture meeting information, identify action items and organise important insights — designed around trust in what the AI produces.",
    problem: {
      business:
        "AI meeting tools generate a lot of text. Very little of it becomes an action anyone actually takes.",
      user:
        "Note-takers miss the conversation; participants miss the notes. Afterwards, nobody is sure what was decided.",
    },
    goals: [
      "Make the live meeting view calm and non-distracting.",
      "Turn the summary into decisions and actions, not paragraphs.",
      "Let users verify any AI claim against the source moment.",
      "Design honest states for uncertainty and low confidence.",
    ],
    research: [
      "Reviewed patterns in existing transcription and AI note tools.",
      "Mapped the meeting journey: join → capture → review → act.",
      "Studied how people skim summaries to find decisions.",
      "Identified verification as the missing trust mechanism.",
    ],
    personas: [
      {
        name: "Priya",
        age: 27,
        role: "Associate product manager",
        goal: "Leave every meeting with a clear action list.",
        pain: "Splits attention between listening and typing.",
      },
      {
        name: "Vikram",
        age: 38,
        role: "Team lead",
        goal: "Catch up on meetings he couldn't attend in minutes.",
        pain: "Full transcripts are too long to be useful.",
      },
    ],
    features: [
      { title: "AI Summary", desc: "A short, structured recap organised by decision and topic." },
      { title: "Meeting Insights", desc: "Themes, open questions and follow-ups surfaced clearly." },
      { title: "Action Items", desc: "Owner and task extracted as editable, assignable items." },
      { title: "Information Organisation", desc: "Meetings grouped and searchable across projects." },
    ],
    process: [
      { title: "Discover", desc: "Understand why meeting notes go unread." },
      { title: "Define", desc: "Frame the problem as trust and actionability." },
      { title: "Ideate", desc: "Explore live, review and digest layouts." },
      { title: "Structure", desc: "Flows for capture, review and action assignment." },
      { title: "Design", desc: "Quiet dark interface for long reading sessions." },
      { title: "Prototype", desc: "Interactive prototype of the full meeting lifecycle." },
    ],
    screens: [
      {
        title: "Home",
        purpose: "Get back to the meeting that matters right now.",
        decisions: "Recent and upcoming split cleanly; search is always visible.",
        interaction: "Cards preview key decisions on hover before opening.",
        image: meet1,
      },
      {
        title: "Live Meeting",
        purpose: "Capture without pulling attention away from the conversation.",
        decisions: "Transcript is de-emphasised; only highlights get visual weight.",
        interaction: "Tap to mark a moment; markers persist into the summary.",
        image: meet2,
      },
      {
        title: "AI Summary",
        purpose: "Convert the conversation into decisions and actions.",
        decisions: "Every AI statement links back to its moment in the transcript.",
        interaction: "Inline editing of action items with owner assignment.",
        image: meet3,
      },
    ],
    designSystem: {
      typography: "Inter — comfortable reading measure for long summaries",
      colors: ["#10B981", "#111827", "#667085", "#F8F9FB"],
      components: ["Meeting card", "Transcript line", "Highlight marker", "Action item", "Confidence tag"],
    },
    challenges: [
      "Designing for AI output that varies in length and quality.",
      "Showing uncertainty without undermining confidence in the tool.",
      "Keeping a dense information view readable.",
    ],
    outcome: [
      "A full meeting lifecycle prototyped from live capture to action.",
      "A pattern for linking AI statements back to their source.",
      "A component set for AI states, including low-confidence output.",
    ],
    learnings: [
      "AI interfaces need verification paths, not just outputs.",
      "Less transcript, more structure.",
      "Honest empty and error states build more trust than polish.",
    ],
    futureScope: [
      "Multi-language summaries.",
      "Task tool integrations for action items.",
      "Per-person recap views.",
    ],
  },
  {
    slug: "tracto-healthcare",
    index: "05",
    title: "Tracto Healthcare",
    subtitle: "Health tracking and appointments, made simple to read.",
    category: "Healthcare · Mobile App",
    label: CONCEPT,
    year: "2026",
    role: ROLE,
    duration: "Self-initiated",
    tools: ["Figma", "FigJam", "Notion"],
    image: tractoCover,
    color: "#0EA5A0",
    highlights: ["Health Tracking", "Appointments", "Healthcare Information", "Simple Navigation"],
    overview:
      "A healthcare app concept designed to simplify health tracking and appointment-related experiences through a clear and accessible mobile interface, with legibility and calm as the primary design goals.",
    problem: {
      business:
        "Healthcare apps often present clinical data in clinical language, which limits everyday use.",
      user:
        "People want to know how they're doing and when their next appointment is — not to interpret charts.",
    },
    goals: [
      "Surface today's health status and next appointment above everything else.",
      "Design for accessible contrast and large, readable text.",
      "Reduce navigation to four clear destinations.",
      "Use plain language for every health term shown.",
    ],
    research: [
      "Reviewed common health tracking and appointment booking patterns.",
      "Heuristic review focused on readability and accessibility.",
      "Mapped the journey: check status → book → prepare → follow up.",
      "Identified information density as the main barrier to daily use.",
    ],
    personas: [
      {
        name: "Meera",
        age: 45,
        role: "Managing a chronic condition",
        goal: "Keep track of readings and medication without effort.",
        pain: "Health apps show too much at once.",
      },
      {
        name: "Suresh",
        age: 62,
        role: "Regular checkup patient",
        goal: "Book and remember appointments easily.",
        pain: "Small text and buried booking flows.",
      },
    ],
    features: [
      { title: "Health Tracking", desc: "Daily metrics summarised in plain language." },
      { title: "Appointments", desc: "Booking and reminders in a single, short flow." },
      { title: "Healthcare Information", desc: "Records and prescriptions organised and searchable." },
      { title: "Simple Navigation", desc: "Four destinations, no nested menus." },
    ],
    process: [
      { title: "Discover", desc: "Understand daily health-tracking behaviour." },
      { title: "Define", desc: "Frame the problem as legibility, not features." },
      { title: "Ideate", desc: "Explore card and summary-led dashboards." },
      { title: "Structure", desc: "Flows for tracking, booking and records." },
      { title: "Design", desc: "Accessible visual system with calm teal accents." },
      { title: "Prototype", desc: "Interactive prototype for the core journeys." },
    ],
    screens: [
      {
        title: "Health Dashboard",
        purpose: "Answer 'how am I today?' at a glance.",
        decisions: "Status is written in words first, numbers second.",
        interaction: "Cards expand for detail without leaving the screen.",
      },
      {
        title: "Appointments",
        purpose: "Book and review appointments in one short flow.",
        decisions: "Next appointment is pinned so it's never hunted for.",
        interaction: "Date and slot selection with large, forgiving touch targets.",
      },
      {
        title: "Records & Medication",
        purpose: "Keep prescriptions and history findable.",
        decisions: "Grouped by type with quiet secondary metadata.",
        interaction: "Search-first list with reminder toggles inline.",
      },
    ],
    designSystem: {
      typography: "Inter — minimum 16px body, generous line height",
      colors: ["#0EA5A0", "#111827", "#667085", "#F8F9FB"],
      components: ["Metric card", "Appointment card", "Reminder row", "Record item", "Tab bar"],
    },
    challenges: [
      "Keeping medical information accurate in tone while staying plain.",
      "Designing for a wide range of ages and abilities.",
      "Balancing summary and detail on a small screen.",
    ],
    outcome: [
      "An accessible healthcare concept with core journeys designed.",
      "A component set built around legibility-first defaults.",
      "A practical accessibility checklist applied through the design.",
    ],
    learnings: [
      "Accessibility constraints improve the design for everyone.",
      "Plain language is a hierarchy tool.",
      "Fewer destinations beat clever navigation.",
    ],
    futureScope: [
      "Caregiver access and shared views.",
      "Medication adherence reminders.",
      "Regional language support.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
