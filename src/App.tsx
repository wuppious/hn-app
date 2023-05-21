import { QueryClientProvider } from "@tanstack/react-query";

import queryClient from "./queries";
import Router from "./routes";
import ThemeProvider from "./theme";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
