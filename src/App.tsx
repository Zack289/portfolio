import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { Layout } from "@/components/layout/Layout";
import { PageTransition } from "@/components/layout/PageTransition";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { Home } from "@/pages/Home";
import { AllProjects } from "@/pages/AllProjects";
import { NotFound } from "@/pages/NotFound";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <LoadingScreen isLoading={isLoading} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <PageTransition>
                  <Home />
                </PageTransition>
              </Layout>
            }
          />
          <Route
            path="/projects"
            element={
              <Layout>
                <PageTransition>
                  <AllProjects />
                </PageTransition>
              </Layout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
