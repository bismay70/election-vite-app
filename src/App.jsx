

// import React, { useState } from 'react';
// import { Menu, X, Laptop, Users, Video, Database, Brain, Award, Shield, Star } from 'lucide-react';

// export default function App() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <div className="flex items-center space-x-2">
//               <div className="bg-black p-1 rounded transform rotate-12">
//                 <div className="text-white font-bold text-xl">E</div>
//               </div>
//               <span className="text-2xl font-bold text-black">ElectSecure</span>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center space-x-8">
//               <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">Home</a>
//               <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">About Us</a>
//               <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">Mobile Voting</a>
//               <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">Features</a>
//               <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">Services</a>
//               <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">Pricing</a>
//               <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">Contact Us</a>
//             </nav>

//             {/* Login Button & Mobile Menu */}
//             <div className="flex items-center space-x-4">
//               <button className="bg-black text-white px-6 py-2 rounded font-semibold hover:bg-gray-800 transition-colors">
//                 Login
//               </button>
              
//               {/* Mobile Menu Button */}
//               <button 
//                 className="lg:hidden p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100"
//                 onClick={toggleMobileMenu}
//               >
//                 {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Navigation */}
//           {isMobileMenuOpen && (
//             <div className="lg:hidden border-t border-gray-200 py-4">
//               <nav className="flex flex-col space-y-4">
//                 <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">Home</a>
//                 <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">About Us</a>
//                 <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">Mobile Voting</a>
//                 <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">Features</a>
//                 <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">Services</a>
//                 <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">Pricing</a>
//                 <a href="#" className="text-gray-700 hover:text-black font-medium transition-colors">Contact Us</a>
//               </nav>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Services Bar */}
//       <div className="bg-gray-100 py-4 border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-wrap justify-center items-center space-x-4 sm:space-x-8 text-sm font-medium text-gray-700">
//             <span className="flex items-center space-x-2 py-2">
//               <Laptop className="h-4 w-4" />
//               <span>eVoting</span>
//             </span>
//             <span className="flex items-center space-x-2 py-2">
//               <Users className="h-4 w-4" />
//               <span>eAGM</span>
//             </span>
//             <span className="flex items-center space-x-2 py-2">
//               <Award className="h-4 w-4" />
//               <span>eAuction</span>
//             </span>
//             <span className="flex items-center space-x-2 py-2">
//               <Database className="h-4 w-4" />
//               <span>eDataRoom</span>
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <main className="relative">
//         <div className="bg-white py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
              
//               {/* Left side - Phone and connections */}
//               <div className="relative">
//                 {/* Certifications */}
//                 <div className="absolute -top-10 left-0 z-10">
//                   <div className="bg-black text-white rounded-full p-3 text-xs font-bold text-center w-20 h-20 flex items-center justify-center">
//                     <div>
//                       <div>CERTIFIED</div>
//                       <div className="text-xs">SECURITY & QUALITY</div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute -top-10 right-0 z-10">
//                   <div className="bg-gray-800 text-white rounded-full p-3 text-xs font-bold text-center w-20 h-20 flex items-center justify-center">
//                     <div>
//                       <div>Excellence</div>
//                       <div>10 YEARS</div>
//                       <div>eVoting</div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Phone mockup */}
//                 <div className="flex justify-center relative">
//                   <div className="bg-black rounded-3xl p-4 w-64 h-96 flex items-center justify-center">
//                     <div className="bg-gray-900 rounded-2xl w-full h-full flex items-center justify-center">
//                       <div className="text-center">
//                         <div className="bg-black p-2 rounded mb-2">
//                           <div className="text-white font-bold text-xl">E</div>
//                         </div>
//                         <div className="text-white font-bold">ElectSecure</div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Connection lines and features */}
//                   <div className="absolute top-20 -right-20 hidden lg:block">
//                     <div className="space-y-6">
//                       <div className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-lg border border-gray-200">
//                         <div className="bg-gray-100 p-2 rounded-lg">
//                           <Laptop className="h-5 w-5 text-gray-600" />
//                         </div>
//                         <span className="font-medium">eVoting</span>
//                       </div>
                      
//                       <div className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-lg border border-gray-200">
//                         <div className="bg-gray-100 p-2 rounded-lg">
//                           <Award className="h-5 w-5 text-gray-600" />
//                         </div>
//                         <span className="font-medium">eAuction</span>
//                       </div>
                      
//                       <div className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-lg border border-gray-200">
//                         <div className="bg-gray-100 p-2 rounded-lg">
//                           <Video className="h-5 w-5 text-gray-600" />
//                         </div>
//                         <span className="font-medium">Video Conference</span>
//                       </div>
                      
//                       <div className="flex items-center space-x-3 bg-white rounded-lg p-3 shadow-lg border border-gray-200">
//                         <div className="bg-gray-100 p-2 rounded-lg">
//                           <Database className="h-5 w-5 text-gray-600" />
//                         </div>
//                         <span className="font-medium">Virtual Dataroom</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Right side - Content */}
//               <div className="space-y-8">
//                 <div>
//                   <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
//                     ONLINE ELECTION PLATFORM
//                   </h1>
//                   <p className="text-lg text-gray-700 leading-relaxed">
//                     ElectSecure is the best online voting website and app which enables you to create and participate in online elections
//                   </p>
//                 </div>

//                 <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-lg">
//                   GET A QUOTE
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-black text-white py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-4 gap-8">
//             {/* About us */}
//             <div>
//               <h3 className="text-xl font-semibold mb-4">About us</h3>
//               <ul className="space-y-2 text-gray-300">
//                 <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Right to Vote</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">In The Media</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Award & Recognition</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Management Team</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Incubation</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Indian National Elections</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Our Customers</a></li>
//               </ul>
//             </div>

//             {/* Service */}
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Service</h3>
//               <ul className="space-y-2 text-gray-300">
//                 <li><a href="#" className="hover:text-white transition-colors">eVoting</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">eAuction</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">eAGM</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">eDataRoom</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Time2Justice</a></li>
//               </ul>
//             </div>

//             {/* Legal */}
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Legal</h3>
//               <ul className="space-y-2 text-gray-300">
//                 <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Other Policies</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Certificates</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Notifications</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">App Permission</a></li>
//               </ul>
//             </div>

//             {/* Others */}
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Others</h3>
//               <ul className="space-y-2 text-gray-300">
//                 <li><a href="#" className="hover:text-white transition-colors">Videos</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Help</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Feedback</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
//                 <li><a href="#" className="hover:text-white transition-colors">Archives</a></li>
//               </ul>
//             </div>
//           </div>

//           {/* Bottom section */}
//           <div className="mt-12 pt-8 border-t border-gray-800">
//             <div className="flex flex-col md:flex-row justify-between items-center">
//               <div className="flex items-center space-x-2 mb-4 md:mb-0">
//                 <div className="bg-black p-1 rounded transform rotate-12">
//                   <div className="text-white font-bold text-xl">E</div>
//                 </div>
//                 <span className="text-2xl font-bold text-white">ElectSecure</span>
//               </div>
              
//               <div className="bg-white text-black px-6 py-2 rounded font-semibold">
//                 Contact Us
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }



import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}




