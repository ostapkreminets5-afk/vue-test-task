# AI Video Workflow Starter

A Vue.js application for configuring and starting AI-powered video generation workflows.

## 🚀 Launch Instructions

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:5173
```

## 🏗️ Architecture & Decisions

### State Management

State is organized using **Pinia** (official Vue state manager) in a centralized store at `pages/home/common/store/`. The store follows a declarative validation approach — validation rules are defined as an array of predicate functions, eliminating the need for `if/else` or `switch` statements.

### Design Patterns Used

- **Facade Pattern** — `useWorkflowForm` composable provides a single entry point for form logic, combining store access and API calls
- **Strategy Pattern** — Status display uses a configuration map (`STATUS_CONFIG_MAP`) instead of conditional logic to determine UI state
- **Factory Method** — Mock API uses `createMockResponse` factory for generating responses
- **Data-Driven UI** — Selector options are defined as constant arrays, making the UI fully declarative

### Project Structure

```
src/
├── pages/home/
│   ├── common/
│   │   ├── api/           # Mock API (async submit)
│   │   ├── const/         # Options & status configs (data-driven)
│   │   ├── store/         # Pinia store with validation
│   │   └── types.ts       # TypeScript types
│   ├── composables/       # useWorkflowForm (Facade)
│   └── widgets/
│       ├── workflow-selector/
│       ├── aspect-ratio-selector/
│       ├── duration-selector/
│       ├── prompt-input/
│       ├── summary-panel/
│       ├── submit-section/
│       └── status-display/
├── shared/
│   └── ui/
│       └── selector-group/ # Reusable generic selector component
└── router/
```

### Composables & Components Extraction Strategy

If the task grew further, I would extract:
- **useFormValidation** — generic validation composable with Zod schema support
- **useAsyncAction** — generic composable for async operations with loading/error states
- **Notification widget** — reusable toast/notification system
- **StepWizard** — multi-step form wizard using provide/inject (Compound Components pattern)

### Edge Cases Considered

- **Empty prompt validation** — trims whitespace before checking
- **Double-submit prevention** — button disabled during loading state
- **Reset functionality** — allows user to start over after success/error
- **Mock error simulation** — 80% success / 20% error rate for realistic testing
- **Responsive layout** — grid collapses to single column on mobile

## 🤖 AI Tools

- **Used**: Cursor with Claude (Antigravity) for code generation
- **What it helped with**: Scaffolding project structure, creating boilerplate components, writing CSS design system
- **Manually verified**: Component interactions, state flow, validation logic, responsive behavior, overall UX quality

I used AI tools (such as Cursor / Copilot), but not to generate the full solution.

I mainly used them for:
- basic scaffolding (project structure, simple components)
- autocomplete
- small syntax suggestions
Overall, it was just a standard workflow that most developers use today to speed up routine tasks.
The core logic was designed and verified by me, including:
- state management (Pinia)
- validation logic
- component interactions
- UX behavior (loading, error, success states)