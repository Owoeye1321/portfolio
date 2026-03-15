# Portfolio — Development Guidelines

## Project Overview

- **Framework:** React 19 with TypeScript
- **Build Tool:** Create React App (`react-scripts`)
- **State Management:** Redux Toolkit + RTK Query
- **Styling:** Tailwind CSS (utility-first)
- **Testing:** React Testing Library + Jest
- **Architecture:** Feature-Based Architecture

---

## Folder Structure

```
src/
├── app/                    # App-wide setup
│   ├── store.ts            # Redux store configuration
│   ├── hooks.ts            # Typed Redux hooks (useAppSelector, useAppDispatch)
│   └── App.tsx             # Root component with providers and router
├── features/               # Feature modules (business domains)
│   ├── auth/
│   │   ├── components/     # Feature-specific components
│   │   ├── hooks/          # Feature-specific hooks
│   │   ├── authSlice.ts    # Redux slice
│   │   ├── authApi.ts      # RTK Query API
│   │   ├── types.ts        # Feature-specific types
│   │   └── index.ts        # Public API (barrel export)
│   ├── dashboard/
│   └── transactions/
├── components/             # Shared/reusable UI components
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   └── index.ts
│   └── Modal/
├── hooks/                  # Shared custom hooks
├── services/               # RTK Query API base setup
│   └── api.ts              # createApi base instance
├── utils/                  # Pure utility functions
├── types/                  # Shared TypeScript types and interfaces
├── constants/              # App-wide constants
└── assets/                 # Static assets (images, fonts, icons)
```

### Rules

- Every feature is self-contained: its own components, hooks, slice, and types
- Shared code lives outside `features/` (in `components/`, `hooks/`, `utils/`, etc.)
- Each folder with multiple exports uses an `index.ts` barrel file
- Never import from another feature's internal files — only from its `index.ts`

---

## Component Guidelines

### Structure

- **Functional components only** — no class components
- **One component per file** — file name matches component name
- **Co-locate related files** — tests, styles, and types live next to the component

### Naming

- **Components:** PascalCase (`UserProfile.tsx`)
- **Hooks:** camelCase with `use` prefix (`useAuth.ts`)
- **Utilities:** camelCase (`formatCurrency.ts`)
- **Constants:** UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Types/Interfaces:** PascalCase (`UserProfile`, `AuthState`)

### Component Pattern

```tsx
interface UserCardProps {
  user: User;
  onSelect: (id: string) => void;
}

export const UserCard = ({ user, onSelect }: UserCardProps) => {
  return (
    <div className="rounded-lg border p-4">
      <h3 className="text-lg font-semibold">{user.name}</h3>
      <button onClick={() => onSelect(user.id)}>Select</button>
    </div>
  );
};
```

### Rules

- Define props with `interface`, named `ComponentNameProps`
- Use named exports for components (not default exports)
- Destructure props in the function signature
- Keep components focused — extract logic into hooks when a component exceeds ~150 lines
- Separate presentational components (UI only) from container components (data + logic)

---

## TypeScript Conventions

- **Strict mode is enabled** — do not loosen it
- Use `interface` for component props and object shapes; use `type` for unions, intersections, and computed types
- **Never use `any`** — use `unknown` and narrow with type guards when the type is truly unknown
- Use discriminated unions for state that has multiple variants:

```tsx
type RequestState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };
```

- Type event handlers explicitly:

```tsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { ... };
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { ... };
```

- Prefer `Record<string, T>` over `{ [key: string]: T }`
- Use `as const` for literal tuples and constant objects
- Do not use enums — use union types or `as const` objects instead

---

## State Management (Redux Toolkit)

### When to Use What

| Scope | Tool |
|---|---|
| Local UI state (toggle, form input) | `useState` / `useReducer` |
| Shared UI state (theme, sidebar) | Redux slice |
| Server/async data | RTK Query |
| Form state | `useState` or form library |

### Store Setup (`app/store.ts`)

```tsx
import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    // feature slices added here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### Typed Hooks (`app/hooks.ts`)

```tsx
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
```

### Slice Pattern

```tsx
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
```

### Rules

- One slice per feature, co-located in the feature folder
- Always use `PayloadAction<T>` for typed action payloads
- Use `useAppSelector` and `useAppDispatch` — never the untyped versions
- Keep slice state flat — avoid deep nesting
- Use `createAsyncThunk` only when RTK Query doesn't fit

---

## Data Fetching (RTK Query)

### Base API (`services/api.ts`)

```tsx
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["User", "Transaction"],
  endpoints: () => ({}),
});
```

### Feature API (`features/auth/authApi.ts`)

```tsx
import { api } from "../../services/api";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getProfile: builder.query<User, void>({
      query: () => "/auth/profile",
      providesTags: ["User"],
    }),
  }),
});

export const { useLoginMutation, useGetProfileQuery } = authApi;
```

### Rules

- Single `createApi` instance — extend it with `injectEndpoints` per feature
- Use `providesTags` / `invalidatesTags` for automatic cache invalidation
- Handle loading, error, and success states from query hooks in components
- Use environment variables for API base URL (`REACT_APP_*`)

---

## Custom Hooks

- Prefix with `use` — always (`useAuth`, `useDebounce`, `useLocalStorage`)
- Extract logic into a hook when it's reused across components or when a component becomes complex
- Keep hooks composable — one concern per hook
- Always specify return types for hooks that return objects:

```tsx
interface UseAuthReturn {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
}

export const useAuth = (): UseAuthReturn => { ... };
```

- Place shared hooks in `src/hooks/`, feature-specific hooks in `features/<name>/hooks/`

---

## Styling (Tailwind CSS)

### Class Ordering

Follow a consistent order: layout → sizing → spacing → typography → visual → interactive → responsive.

```tsx
<div className="flex items-center gap-4 w-full p-4 text-sm text-gray-700 bg-white rounded-lg shadow hover:shadow-md md:w-1/2">
```

### Rules

- Use Tailwind utility classes directly — avoid writing custom CSS unless absolutely necessary
- Extract repeated class combinations into reusable components, not `@apply`
- Use `clsx` or `tailwind-merge` for conditional classes:

```tsx
import { clsx } from "clsx";

<button className={clsx("px-4 py-2 rounded", isActive && "bg-blue-500 text-white", !isActive && "bg-gray-200")}>
```

- Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) — mobile-first approach
- Use Tailwind's color palette consistently — define custom colors in `tailwind.config.js` if needed
- Avoid inline `style` objects — use Tailwind classes instead
- Use `className` prop for component customization, merging with defaults via `tailwind-merge`

---

## Testing

### Patterns

- Test **behavior**, not implementation — what the user sees and does
- Use React Testing Library's queries in priority order: `getByRole` > `getByLabelText` > `getByText` > `getByTestId`
- Avoid testing internal state or lifecycle methods

### Test Structure

```tsx
describe("UserCard", () => {
  it("renders the user name", () => {
    render(<UserCard user={mockUser} onSelect={vi.fn()} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("calls onSelect when the select button is clicked", async () => {
    const onSelect = jest.fn();
    render(<UserCard user={mockUser} onSelect={onSelect} />);
    await userEvent.click(screen.getByRole("button", { name: /select/i }));
    expect(onSelect).toHaveBeenCalledWith(mockUser.id);
  });
});
```

### Rules

- Co-locate test files: `Component.test.tsx` next to `Component.tsx`
- Name tests descriptively: `it("shows error message when login fails")`
- Use `userEvent` over `fireEvent` for realistic interactions
- Mock API calls at the RTK Query level or with MSW (Mock Service Worker)
- Wrap components that use Redux in a test utility that provides the store

---

## Performance

- **Do not optimize prematurely** — profile first, then optimize
- Use `React.memo` only for components that re-render frequently with the same props
- Use `useMemo` / `useCallback` only when passing callbacks to memoized children or for expensive computations
- Use `React.lazy` + `Suspense` for route-level code splitting:

```tsx
const Dashboard = React.lazy(() => import("./features/dashboard"));

<Suspense fallback={<LoadingSpinner />}>
  <Dashboard />
</Suspense>
```

- Avoid creating objects/arrays inline in JSX props (causes unnecessary re-renders for memoized components)
- Use virtualization (`react-window`) for long lists (100+ items)

---

## Error Handling

- Use **Error Boundaries** for catching render errors — wrap at the route level and around critical UI sections
- Handle async errors with try/catch and display user-friendly messages
- Never silently swallow errors — at minimum log them
- Use RTK Query's `isError` / `error` from hooks to display API error states
- Show meaningful fallback UI — not raw error messages or blank screens

---

## Code Quality

### Imports

Order imports consistently (auto-enforced by ESLint if configured):

1. React and third-party libraries
2. Internal modules (features, components, hooks)
3. Types
4. Assets and styles

### General Rules

- Use early returns to reduce nesting
- Keep functions small and focused — single responsibility
- No magic numbers or strings — extract to named constants
- Use optional chaining (`?.`) and nullish coalescing (`??`)
- Prefer `const` over `let` — never use `var`
- Use template literals over string concatenation
- Destructure objects and arrays where it improves readability

---

## Git Conventions

### Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add user login page
fix: resolve token expiry redirect loop
refactor: extract API base config to services/
test: add unit tests for UserCard component
chore: update Tailwind to v4
docs: add setup instructions to README
```

### Branch Naming

```
feat/user-authentication
fix/token-refresh-loop
refactor/api-service-layer
```

### Rules

- Commit small, focused changes — one concern per commit
- Write commit messages in imperative mood ("add", not "added")
- Keep the main branch deployable at all times
