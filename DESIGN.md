# Design Brief

## Tone & Purpose
Workflow Automation Control System — clean, developer-first productivity dashboard. Minimalist professionalism inspired by Linear/Vercel. Visual clarity and information density prioritized over decoration.

## Differentiation
Color-coded node system (violet=trigger, blue=API, amber=condition, green=action) with smooth SVG connectors. Dark-on-dark cards with high contrast text. Functional node types immediately recognizable by hue.

## Color Palette (OKLCH)
| Semantic | Light | Dark |
|----------|-------|------|
| Background | 0.99 0 0 (white) | 0.08 0 0 (#0f172a) |
| Card | 1.0 0 0 (white) | 0.14 0 0 (slate-800) |
| Border | 0.9 0 0 (light grey) | 0.22 0 0 (slate-700) |
| Primary/Accent | — | 0.6 0.16 310 (violet-600) |
| Success | — | 0.75 0.15 85 (emerald) |
| Warning | — | 0.70 0.21 130 (amber) |
| Destructive | — | 0.60 0.19 25 (red) |

## Typography
| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Display | Space Grotesk | 600–700 | Page titles, section headers |
| Body | Plus Jakarta Sans | 400–500 | UI text, labels, descriptions |
| Mono | Geist Mono | 400 | Code blocks, API endpoints, keys |

## Elevation & Depth
- **Background**: #0f172a (0.08 0 0)
- **Card Surface**: slate-800 (0.14 0 0) with subtle 1px border (slate-700)
- **Elevated**: slight shadow on hover/focus, not at rest
- **Popover**: slate-900 (0.18 0 0), 2px border

## Structural Zones
| Zone | Background | Border | Usage |
|------|-----------|--------|-------|
| Sidebar | 0.13 0 0 | 0.22 0 0 (1px right) | Navigation, persistent |
| Header | card (0.14 0 0) | border (0.22 0 0, bottom) | Toolbar, canvas actions |
| Canvas | background (0.08 0 0) | — | Workflow editor, grid |
| Property Panel | card (0.14 0 0) | border left | Node inspector, editable fields |
| Main Content | background | — | Workflow list, table rows |

## Component Patterns
- Buttons: violet primary (0.6 0.16 310), slate secondary, destructive red
- Inputs: border-slate-700, focus ring violet
- Cards: 1px border, rounded-lg (0.625rem), minimal shadow on hover
- Nodes: 4px left border (color-coded), 2px rounded-lg, dark background
- Icons: Lucide React, 20px default, 16px compact

## Spacing & Rhythm
- Grid unit: 0.5rem (Tailwind default)
- Card padding: 1rem
- Section gap: 1.5rem
- Button/input height: 2.5rem (10 units)

## Motion & Animation
- Transitions: 0.3s cubic-bezier(0.4, 0, 0.2, 1) for all interactive elements
- No entrance animations; focus on interaction feedback
- SVG connectors: smooth line drawing on connect, fade on delete
- Property panel: slide-in 0.2s ease-out, slide-out 0.15s ease-in

## Responsive
- Desktop (1024px+): Full three-column (sidebar–canvas–panel)
- Tablet (768–1024px): Sidebar fixed, canvas primary, panel slides over
- Mobile (<768px): Sidebar collapsible hamburger, canvas full-width, panel slides from bottom

## Constraints
- Minimal shadows: only on elevated/interactive elements
- No gradients, no blur effects
- Subtle borders (1px slate-700) only on card edges, headers
- rounded-lg (0.625rem) throughout, no radius variation
- All colors via CSS tokens (no hex literals)
- Lucide icons only, no custom SVG illustrations
