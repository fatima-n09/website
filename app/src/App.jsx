import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/Transaction";
import Signup from "./pages/Auth/Signup/Signup";
import Signin from "./pages/Auth/Signup/Signin/Signin";
import RegisterEmailVerify from "./pages/Auth/RegisterEmailVerify/RegisterEmailVerify";
import RegisterSuccess from "./pages/Auth/RegisterSuccess/RegisterSuccess";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import SuccessfullySent from "./pages/Auth/SuccessfullySent/SuccessfullySent";
import PasswordResetDone from "./pages/Auth/PasswordResetDone/PasswordResetDone"; 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/transactions", element: <TransactionPage /> },
  { path: "/support", element: <Support /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
  { path: "/RegisterEmailVerify", element: <RegisterEmailVerify /> },
  { path: "/RegisterSuccess", element: <RegisterSuccess /> },
  { path: "/ForgotPassword", element: <ForgotPassword /> },
  { path: "/SuccessfullySent", element: <SuccessfullySent /> },
  { path: "/PasswordResetDone", element: <PasswordResetDone /> },
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
