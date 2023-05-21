import { QueryClientProvider } from "@tanstack/react-query";

import queryClient from "./queries";
import Router from "./routes";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}
