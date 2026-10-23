'use client';

import React, { useState } from 'react';
import {
  Download,
  Shield,
  Zap,
  WifiOff,
  CheckCircle2,
  Settings,
  FileText,
  Smartphone,
  Check,
  Send,
  Globe,
  Github,
  Mail,
  MapPin,
  ChevronRight,
  User,
  BookOpen,
  Award,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

/**
 * =====================================================================
 * CONFIGURATION & APK DOWNLOAD LINK
 * =====================================================================
 * Replace APK_DOWNLOAD_URL with your actual direct download link.
 * You can also set NEXT_PUBLIC_APK_URL in a .env.local file.
 * =====================================================================
 */
const APK_DOWNLOAD_URL = process.env.NEXT_PUBLIC_APK_URL || "https://drive.google.com/uc?export=download&id=1uOQ6G7B4JfaGK16HQhj96IHIrCiN1uJG";

const SCREENSHOTS = [
  {
    id: 1,
    title: "Home Dashboard",
    image: "/screenshots/screen1.png",
    fallbackType: "dashboard"
  },
  {
    id: 2,
    title: "Courses List",
    image: "/screenshots/screen2.png",
    fallbackType: "courses"
  },
  {
    id: 3,
    title: "Chapter & Topics",
    image: "/screenshots/screen3.png",
    fallbackType: "topics"
  },
  {
    id: 4,
    title: "Interactive Quiz",
    image: "/screenshots/screen4.png",
    fallbackType: "quiz"
  },
  {
    id: 5,
    title: "User Profile",
    image: "/screenshots/screen5.png",
    fallbackType: "profile"
  }
];

export default function LandingPage() {
  return (
    <div className="appnexus-page min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-500/20">

      {/* 1. HEADER / NAVIGATION */}
      <nav className="app-nav fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">

            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center font-black text-white text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                A
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                AppNexus
              </span>
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-7 text-xs font-semibold text-slate-600">
              <a href="#home" className="text-blue-600 font-bold border-b-2 border-blue-600 pb-0.5">Home</a>
              <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
              <a href="#screenshots" className="hover:text-blue-600 transition-colors">Screenshots</a>
              <a href="#install" className="hover:text-blue-600 transition-colors">Install Guide</a>
            </div>

            {/* Download Button */}
            <a
              href={APK_DOWNLOAD_URL}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full font-bold text-xs transition-all shadow-sm shadow-blue-500/20 hover:shadow-md flex items-center gap-1.5 hover:scale-105 active:scale-95"
            >
              <Download size={14} />
              Download APK
            </a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="app-hero relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50">

        {/* Soft Radial Background Blurs */}
        <div className="absolute top-12 right-12 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="app-hero-inner max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">

            {/* Left Content */}
            <div className="app-hero-copy lg:col-span-7 text-center lg:text-left">

              {/* App Icon + Title */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center font-black text-white text-3xl shadow-lg shadow-blue-500/25">
                  A
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                      AppNexus
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg font-semibold text-slate-600 mt-0.5">
                    Your All-in-One Mobile Companion
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md mx-auto lg:mx-0 my-5">
                Fast, secure and powerful — AppNexus brings you the best experience with smart features, offline support and a simple design. Download now and explore more!
              </p>

              {/* CTA Download Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6">
                <a
                  href={APK_DOWNLOAD_URL}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/25 transition-all hover:scale-105 active:scale-95"
                >
                  <Download size={16} />
                  Download APK
                </a>
              </div>

              {/* Feature Highlights Bar */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs font-semibold text-slate-600 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Zap size={16} className="text-blue-600" />
                  <span>Fast & Lightweight</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield size={16} className="text-blue-600" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <WifiOff size={16} className="text-blue-600" />
                  <span>Works Offline</span>
                </div>
              </div>

            </div>

            {/* Right Side: Phone Mockup */}
            <div className="app-hero-visual lg:col-span-5 relative flex justify-center mt-6 lg:mt-0">

              {/* Background Glow Ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-2xl transform scale-90" />

              {/* Floating Badge */}
              <div className="absolute top-10 -right-2 sm:right-2 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-1.5 transform rotate-6">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider">
                  Better • Faster • Smarter
                </span>
              </div>

              {/* Phone Frame */}
              <div className="app-hero-device relative z-10 w-[240px] sm:w-[260px] bg-slate-900 p-3 rounded-[40px] shadow-2xl border-[5px] border-slate-900">
                {/* Notch */}
                <div className="w-20 h-3.5 bg-slate-900 rounded-b-xl mx-auto absolute top-2.5 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-800 mr-1.5" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                </div>

                {/* Inner Screen */}
                <div className="bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 rounded-[30px] overflow-hidden aspect-[9/19] flex flex-col justify-between p-5 text-white text-center relative pt-10">

                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[9px] opacity-70 mb-2 px-1">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-white/60" />
                      <div className="w-2 h-2 rounded-full bg-white/60" />
                    </div>
                  </div>

                  {/* App Branding on Hero Screen */}
                  <div className="my-auto space-y-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-500 to-purple-600 mx-auto flex items-center justify-center text-white font-black text-2xl shadow-md">
                      A
                    </div>
                    <h3 className="text-xl font-black tracking-tight">AppNexus</h3>
                    <p className="text-[10px] text-blue-200/80 font-medium px-2">
                      Learn • Grow • Succeed
                    </p>
                  </div>

                  {/* Hero Screen Decorative Graphic */}
                  <div className="w-full h-24 rounded-xl bg-gradient-to-tr from-blue-600/40 via-purple-500/30 to-pink-500/20 backdrop-blur-md p-3 flex flex-col justify-end text-left border border-white/10">
                    <span className="text-[9px] uppercase tracking-wider text-blue-300 font-bold">Welcome Back</span>
                    <span className="text-xs font-bold">Ready to Start Learning?</span>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. APP SHOWCASE / SCREENSHOTS SECTION (5 PHONES IN A ROW) */}
      <section id="screenshots" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="text-center mb-12">
            <span className="text-blue-600 text-[11px] font-black uppercase tracking-widest block mb-1">
              APP SHOWCASE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              See AppNexus in Action
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto mt-2">
              Explore the beautiful and easy-to-use interface designed to give you the best experience.
            </p>
          </div>

          {/* 5 Phone Screens Grid (1 row of 5 on lg screens) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 max-w-6xl mx-auto items-center">
            {SCREENSHOTS.map((screen) => (
              <PhoneScreenshotCard key={screen.id} screen={screen} />
            ))}
          </div>

        </div>
      </section>

      {/* 4. KEY FEATURES SECTION */}
      <section id="features" className="py-16 bg-slate-50/80 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="text-center mb-12">
            <span className="text-blue-600 text-[11px] font-black uppercase tracking-widest block mb-1">
              KEY FEATURES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Choose AppNexus?
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto mt-2">
              Everything you need for a smarter, safer and smoother experience.
            </p>
          </div>

          {/* 3 Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white mx-auto flex items-center justify-center mb-4 shadow-md shadow-blue-500/20">
                <Zap size={22} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Lightning Fast</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Enjoy smooth and quick performance even on low-end devices.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center mb-4 shadow-md shadow-emerald-500/20">
                <Shield size={22} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Top Security</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Your data is protected with advanced security measures.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500 text-white mx-auto flex items-center justify-center mb-4 shadow-md shadow-purple-500/20">
                <WifiOff size={22} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Offline Support</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Access your content anytime, anywhere — no internet needed.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. INSTALLATION GUIDE SECTION */}
      <section id="install" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Heading */}
          <div className="text-center mb-12">
            <span className="text-blue-600 text-[11px] font-black uppercase tracking-widest block mb-1">
              INSTALLATION GUIDE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How to Install AppNexus
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto mt-2">
              Follow these simple steps to install the APK on your Android device.
            </p>
          </div>

          {/* 5 Horizontal Step Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto relative">

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-4 bg-slate-50/80 rounded-xl border border-slate-100">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center mb-3 shadow-sm shadow-blue-600/20">
                1
              </div>
              <div className="text-blue-600 mb-1.5">
                <Download size={18} />
              </div>
              <h4 className="font-bold text-slate-900 text-xs mb-1">Download APK</h4>
              <p className="text-[11px] text-slate-500 leading-normal">
                Click the <span className="text-blue-600 font-semibold">Download APK</span> button and save the file to your device.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-4 bg-slate-50/80 rounded-xl border border-slate-100">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center mb-3 shadow-sm shadow-blue-600/20">
                2
              </div>
              <div className="text-blue-600 mb-1.5">
                <Settings size={18} />
              </div>
              <h4 className="font-bold text-slate-900 text-xs mb-1">Enable Unknown Sources</h4>
              <p className="text-[11px] text-slate-500 leading-normal">
                Go to <span className="font-semibold text-slate-700">Settings &gt; Security</span> &gt; Enable "Install unknown apps".
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-4 bg-slate-50/80 rounded-xl border border-slate-100">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center mb-3 shadow-sm shadow-blue-600/20">
                3
              </div>
              <div className="text-blue-600 mb-1.5">
                <FileText size={18} />
              </div>
              <h4 className="font-bold text-slate-900 text-xs mb-1">Open the File</h4>
              <p className="text-[11px] text-slate-500 leading-normal">
                Find the downloaded APK in your file manager and tap on it.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center p-4 bg-slate-50/80 rounded-xl border border-slate-100">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center mb-3 shadow-sm shadow-blue-600/20">
                4
              </div>
              <div className="text-blue-600 mb-1.5">
                <Smartphone size={18} />
              </div>
              <h4 className="font-bold text-slate-900 text-xs mb-1">Install</h4>
              <p className="text-[11px] text-slate-500 leading-normal">
                Tap "Install" and wait for the process to finish.
              </p>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center text-center p-4 bg-slate-50/80 rounded-xl border border-slate-100">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center mb-3 shadow-sm shadow-blue-600/20">
                5
              </div>
              <div className="text-blue-600 mb-1.5">
                <CheckCircle2 size={18} />
              </div>
              <h4 className="font-bold text-slate-900 text-xs mb-1">Done!</h4>
              <p className="text-[11px] text-slate-500 leading-normal">
                Open <span className="font-semibold text-slate-700">AppNexus</span> and start your journey!
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="app-footer bg-[#0b1329] text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

            {/* Col 1: Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-base">
                  A
                </div>
                <span className="text-xl font-bold text-white tracking-tight">AppNexus</span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                Learn • Grow • Succeed
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Quick Links</h5>
              <ul className="space-y-2 text-[11px]">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#screenshots" className="hover:text-white transition-colors">Screenshots</a></li>
                <li><a href="#install" className="hover:text-white transition-colors">Install Guide</a></li>
              </ul>
            </div>

            {/* Col 3: Contact */}
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Contact</h5>
              <ul className="space-y-2 text-[11px]">
                <li className="flex items-center gap-2">
                  <Mail size={13} className="text-blue-400" />
                  <span>support@appnexus.app</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={13} className="text-blue-400" />
                  <span>Addis Ababa, Ethiopia</span>
                </li>
                <li className="flex items-center gap-2">
                  <Globe size={13} className="text-blue-400" />
                  <span>www.appnexus.app</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Follow Us */}
            <div>
              <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Follow Us</h5>
              <div className="flex items-center gap-2.5">
                <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 transition-colors">
                  <Send size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 transition-colors">
                  <Globe size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 transition-colors">
                  <Github size={14} />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Divider */}
          <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
            <p>© 2025 AppNexus. All rights reserved.</p>
            <p>Built with ❤️ for learners everywhere.</p>
          </div>

        </div>
      </footer>

    </div>
  );
}

/**
 * =====================================================================
 * PHONE SCREENSHOT CARD COMPONENT WITH IMAGE FALLBACK
 * =====================================================================
 */
function PhoneScreenshotCard({ screen }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Outer Phone Bezel */}
      <div className="w-full bg-slate-900 p-2 rounded-[28px] shadow-lg border-[3.5px] border-slate-900 relative group overflow-hidden">

        {/* Top Notch */}
        <div className="w-14 h-3 bg-slate-900 rounded-b-lg mx-auto absolute top-2 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
        </div>

        {/* Screen Container */}
        <div className="bg-white rounded-[20px] overflow-hidden aspect-[9/19] relative text-slate-900 flex flex-col justify-between">

          {/* If image exists and loads properly, display image */}
          {!imgError ? (
            <img
              src={screen.image}
              alt={screen.title}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            /* Fallback UI Mockups matching the user's reference image */
            <MockupScreen screenType={screen.fallbackType} />
          )}

        </div>
      </div>
    </div>
  );
}

/**
 * =====================================================================
 * UI MOCKUP SCREENS (Fallback when screenshot images are not yet provided)
 * =====================================================================
 */
function MockupScreen({ screenType }) {
  if (screenType === "dashboard") {
    return (
      <div className="p-2 text-left text-[9px] h-full flex flex-col justify-between bg-slate-50 pt-5">
        <div className="space-y-1">
          <div className="flex justify-between items-center text-[8px] text-slate-400">
            <span>9:41</span>
            <span>100%</span>
          </div>
          <div>
            <h4 className="font-black text-slate-900 text-[10px]">Hello, Student 👋</h4>
            <p className="text-[7px] text-slate-400">Keep learning, keep growing!</p>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-1.5 rounded-lg text-white space-y-0.5">
            <p className="text-[7px] font-bold">Freshman Courses</p>
            <p className="text-[6px] text-blue-100">Your future starts here</p>
            <button className="bg-white/20 hover:bg-white/30 text-white text-[6px] px-1 py-0.5 rounded font-medium mt-0.5">
              Explore Courses
            </button>
          </div>
          <div className="grid grid-cols-3 gap-1 pt-0.5">
            <div className="bg-white p-1 rounded-md border border-slate-100 text-center">
              <BookOpen size={8} className="mx-auto text-blue-600 mb-0.5" />
              <span className="text-[6px] font-bold block">Courses</span>
            </div>
            <div className="bg-white p-1 rounded-md border border-slate-100 text-center">
              <Award size={8} className="mx-auto text-emerald-600 mb-0.5" />
              <span className="text-[6px] font-bold block">Quizzes</span>
            </div>
            <div className="bg-white p-1 rounded-md border border-slate-100 text-center">
              <Zap size={8} className="mx-auto text-amber-500 mb-0.5" />
              <span className="text-[6px] font-bold block">Energy</span>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-1 flex justify-around text-slate-400 text-[7px]">
          <span className="text-blue-600 font-bold">Home</span>
          <span>Courses</span>
          <span>Energy</span>
          <span>Profile</span>
        </div>
      </div>
    );
  }

  if (screenType === "courses") {
    return (
      <div className="p-2 text-left text-[9px] h-full flex flex-col justify-between bg-white pt-5">
        <div className="space-y-1">
          <h4 className="font-black text-slate-900 text-[10px]">&lt; Courses</h4>
          <div className="flex gap-0.5 overflow-x-auto text-[6px] pb-0.5">
            <span className="bg-blue-600 text-white px-1 py-0.5 rounded-full font-bold">All</span>
            <span className="bg-slate-100 text-slate-600 px-1 py-0.5 rounded-full">Math</span>
            <span className="bg-slate-100 text-slate-600 px-1 py-0.5 rounded-full">English</span>
          </div>
          <div className="space-y-1">
            {[
              { name: "Mathematics", desc: "12 ch • 82 lessons", icon: "📐", color: "bg-blue-100 text-blue-600" },
              { name: "English", desc: "10 ch • 64 lessons", icon: "📖", color: "bg-red-100 text-red-600" },
              { name: "Physics", desc: "8 ch • 48 lessons", icon: "⚛️", color: "bg-purple-100 text-purple-600" },
              { name: "Chemistry", desc: "9 ch • 50 lessons", icon: "🧪", color: "bg-emerald-100 text-emerald-600" },
            ].map((c, i) => (
              <div key={i} className="flex items-center justify-between p-1 rounded border border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-1">
                  <span className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[7px] ${c.color}`}>
                    {c.icon}
                  </span>
                  <div>
                    <p className="font-bold text-[7px] text-slate-900">{c.name}</p>
                    <p className="text-[5px] text-slate-400">{c.desc}</p>
                  </div>
                </div>
                <ChevronRight size={7} className="text-slate-400" />
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-slate-200 pt-1 flex justify-around text-slate-400 text-[7px]">
          <span>Home</span>
          <span className="text-blue-600 font-bold">Courses</span>
          <span>Energy</span>
          <span>Profile</span>
        </div>
      </div>
    );
  }

  if (screenType === "topics") {
    return (
      <div className="p-2 text-left text-[9px] h-full flex flex-col justify-between bg-white pt-5">
        <div className="space-y-1">
          <p className="text-[6px] font-bold text-slate-400 uppercase tracking-wider">&lt; Mathematics</p>
          <h4 className="font-black text-slate-900 text-[10px]">Chapter 1: Sets</h4>
          <div className="space-y-1 pt-0.5">
            {[
              { title: "1.1 Introduction to Sets", done: true },
              { title: "1.2 Types of Sets", done: true },
              { title: "1.3 Set Operations", done: false },
              { title: "1.4 Venn Diagrams", done: false },
            ].map((t, i) => (
              <div key={i} className="flex items-center justify-between p-1 rounded border border-slate-100 bg-slate-50">
                <span className="text-[7px] font-semibold text-slate-800">{t.title}</span>
                {t.done ? (
                  <CheckCircle2 size={8} className="text-emerald-500" />
                ) : (
                  <div className="w-2 h-2 rounded-full border border-slate-300" />
                )}
              </div>
            ))}
          </div>
        </div>
        <button className="w-full bg-blue-600 text-white font-bold text-[7px] py-1 rounded shadow-sm">
          Next -&gt;
        </button>
      </div>
    );
  }

  if (screenType === "quiz") {
    return (
      <div className="p-2 text-left text-[9px] h-full flex flex-col justify-between bg-white pt-5">
        <div className="space-y-1">
          <div className="flex justify-between text-[6px] font-bold text-slate-400">
            <span>3 / 10</span>
            <span>3:02</span>
          </div>
          <h4 className="font-extrabold text-slate-900 text-[8px] leading-tight">
            What is the SI unit of Force?
          </h4>
          <div className="space-y-0.5 pt-1">
            {[
              { opt: "Joule", selected: false },
              { opt: "Newton", selected: true },
              { opt: "Watt", selected: false },
              { opt: "Pascal", selected: false },
            ].map((o, i) => (
              <div
                key={i}
                className={`p-1 rounded border text-[7px] font-medium flex items-center justify-between ${
                  o.selected
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700 font-bold'
                    : 'border-slate-200 text-slate-600'
                }`}
              >
                <span>{o.opt}</span>
                <div className={`w-2 h-2 rounded-full border flex items-center justify-center ${
                  o.selected ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-slate-300'
                }`}>
                  {o.selected && <Check size={5} />}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="w-full bg-emerald-500 text-white font-bold text-[7px] py-1 rounded shadow-sm">
          Next -&gt;
        </button>
      </div>
    );
  }

  // Profile Fallback
  return (
    <div className="p-2 text-left text-[9px] h-full flex flex-col justify-between bg-white pt-5">
      <div className="space-y-1.5">
        <div className="text-center pt-0.5">
          <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 mx-auto flex items-center justify-center font-bold mb-0.5">
            <User size={12} />
          </div>
          <h4 className="font-bold text-slate-900 text-[9px]">John Doe</h4>
          <p className="text-[6px] text-slate-400">john@example.com</p>
        </div>
        <div className="space-y-0.5 text-[7px]">
          {[
            { label: "My Profile", icon: User },
            { label: "My Courses", icon: BookOpen },
            { label: "Energy & Rewards", icon: Zap },
            { label: "Settings", icon: Settings },
            { label: "Help & Support", icon: HelpCircle },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-0.5 border-b border-slate-100 text-slate-700">
              <div className="flex items-center gap-1">
                <item.icon size={7} className="text-blue-600" />
                <span className="font-medium text-[6.5px]">{item.label}</span>
              </div>
              <ChevronRight size={7} className="text-slate-400" />
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-200 pt-0.5 flex justify-around text-slate-400 text-[7px]">
        <span>Home</span>
        <span>Courses</span>
        <span>Energy</span>
        <span className="text-blue-600 font-bold">Profile</span>
      </div>
    </div>
  );
}
