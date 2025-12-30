import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";

import Page from "./components/Page";
import ContactUsPage from "./components/pages/ContactUsPage";
import TermsAndConditions from "./components/legal/TermsAndConditions";
import PrivacyPolicy from "./components/legal/PrivacyPolicy";
import ScrollToHash from "./components/ScrollToHash";
export default function App() {
  return (
    <HashRouter basename="/golianos-client">
      <ScrollToHash />
      <Routes>
        {/* Public client layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Page />} />
          <Route path="/:slug" element={<Page />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
