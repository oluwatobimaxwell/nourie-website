import Layout from "./Layout.jsx";

import Home from "./Home";

import About from "./About";

import HowItWorks from "./HowItWorks";

import Contact from "./Contact";

import PrivacyPolicy from "./PrivacyPolicy";

import TermsOfService from "./TermsOfService";

import CookiePolicy from "./CookiePolicy";

import Blogs from "./Blogs";

import CorporatePartnership from "./CorporatePartnership";

import PartnershipForm from "./PartnershipForm";

import WaitingList from "./WaitingList";

import BlogDetail from "./BlogDetail";

import ScrollToTop from "@/components/ScrollToTop.jsx";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    About: About,
    
    HowItWorks: HowItWorks,
    
    Contact: Contact,
    
    PrivacyPolicy: PrivacyPolicy,
    
    TermsOfService: TermsOfService,
    
    CookiePolicy: CookiePolicy,
    
    Blogs: Blogs,
    
    CorporatePartnership: CorporatePartnership,
    
    PartnershipForm: PartnershipForm,
    
    WaitingList: WaitingList,
    
    BlogDetail: BlogDetail,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/About" element={<About />} />
                
                <Route path="/HowItWorks" element={<HowItWorks />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                
                <Route path="/TermsOfService" element={<TermsOfService />} />
                
                <Route path="/CookiePolicy" element={<CookiePolicy />} />
                
                <Route path="/Blogs" element={<Blogs />} />
                
                <Route path="/CorporatePartnership" element={<CorporatePartnership />} />
                
                <Route path="/PartnershipForm" element={<PartnershipForm />} />
                
                <Route path="/WaitingList" element={<WaitingList />} />
                
                <Route path="/BlogDetail" element={<BlogDetail />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <ScrollToTop />
            <PagesContent />
        </Router>
    );
}