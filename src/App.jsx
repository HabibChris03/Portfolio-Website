import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { AppShell } from './components/layout/AppShell';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ServicesPage } from './pages/ServicesPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { MediaPage } from './pages/MediaPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<AppShell />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="skills" element={<SkillsPage />} />
              <Route path="portfolio" element={<PortfolioPage />} />
              <Route path="portfolio/:slug" element={<ProjectDetailPage />} />
              <Route path="experience" element={<ExperiencePage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="blog" element={<BlogPage />} />
              <Route path="blog/:slug" element={<BlogPostPage />} />
              <Route path="certifications" element={<CertificationsPage />} />
              <Route path="media" element={<MediaPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="work" element={<Navigate to="/portfolio" replace />} />
              <Route path="stack" element={<Navigate to="/skills" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
