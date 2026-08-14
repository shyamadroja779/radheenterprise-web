import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Hammer, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0D14] border-t border-gray-800/80 text-muted-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="bg-primary-yellow p-1.5 rounded text-dark-bg">
                <Hammer className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-lg tracking-wider text-text-white leading-none">
                  RADHE
                </span>
                <span className="font-sans font-medium text-[9px] tracking-widest text-primary-yellow uppercase">
                  ENTERPRISE
                </span>
              </div>
            </div>
            <p className="text-xs text-muted-gray leading-relaxed">
              Industrial material handling equipment redefined. Building high-performance, heavy-duty lifting solutions since 2018. Gujarat's trusted partner in material logistics.
            </p>
          </div>

          {/* Quick Categories Links */}
          <div>
            <h4 className="text-text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-primary-yellow pl-2">
              Equipment Categories
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/manual-stacker" className="hover:text-primary-yellow transition-colors">
                  Manual Stackers
                </Link>
              </li>
              <li>
                <Link href="/electric-stacker" className="hover:text-primary-yellow transition-colors">
                  Electric & Semi-Electric Stackers
                </Link>
              </li>
              <li>
                <Link href="/pallet-truck" className="hover:text-primary-yellow transition-colors">
                  Manual & Electric Pallet Trucks
                </Link>
              </li>
              <li>
                <Link href="/forklift" className="hover:text-primary-yellow transition-colors">
                  Diesel & Electric Forklifts
                </Link>
              </li>
              <li>
                <Link href="/drum-handler" className="hover:text-primary-yellow transition-colors">
                  Drum Handlers
                </Link>
              </li>
              <li>
                <Link href="/lift-table" className="hover:text-primary-yellow transition-colors">
                  Hydraulic Lift Tables
                </Link>
              </li>
              <li>
                <Link href="/tail-lift" className="hover:text-primary-yellow transition-colors">
                  Hydraulic Tail Lifts
                </Link>
              </li>
              <li>
                <Link href="/aerial-work-platform" className="hover:text-primary-yellow transition-colors">
                  Aerial Work Platforms
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary-yellow transition-colors">
                  Logistics Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-primary-yellow pl-2">
              Get In Touch
            </h4>
            <ul className="space-y-2.5 text-xs text-muted-gray mb-5">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-yellow shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/place/RADHE+ENTERPRISE+MORBI/@22.8601386,70.9543395,18z/data=!4m6!3m5!1s0x39598f73ea06dfc1:0xe61481f337601735!8m2!3d22.8601386!4d70.9543395!16s%2Fg%2F11ytvmwbyt?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-yellow transition-colors"
                >
                  Near CNG Petrol Pump, Opposite Shiv Hotel, Uchi Mandal, Morbi - 363642, Gujarat, India.
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-yellow shrink-0" />
                <a href="mailto:radheenterprise1003@gmail.com" className="hover:text-primary-yellow">
                  radheenterprise1003@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-yellow shrink-0" />
                <a href="tel:+919624681003" className="hover:text-primary-yellow">
                  +91 96246 81003
                </a>
              </li>
            </ul>
            <div className="space-y-2 pt-2 border-t border-gray-800/40">
              <h5 className="text-text-white font-bold text-[10px] uppercase tracking-wider">
                Review Us on Google
              </h5>
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJwd8G6nOPWTkRNRdgN_OBFOY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block p-1.5 bg-white rounded-lg border border-gray-800 hover:border-primary-yellow/60 transition-all max-w-[100px] hover:scale-105 duration-200"
              >
                <Image
                  src="/images/google-review-qr.png"
                  alt="Google Review QR Code - Radhe Enterprise"
                  width={90}
                  height={90}
                  className="w-full h-auto object-contain block"
                />
              </a>
              <p className="text-[9px] text-muted-gray leading-normal">
                Scan or click to leave feedback
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-primary-yellow pl-2">
              Factory & Sales Office
            </h4>
            <p className="text-xs leading-relaxed mb-3">
              We engineer custom machinery solutions for all warehousing loads. Visit us at our Morbi complex or consult our technicians online.
            </p>
            <div className="bg-[#161B22] p-3 rounded-lg border border-gray-800 text-xs">
              <div className="flex justify-between mb-1">
                <span>Mon - Sat:</span>
                <span className="text-text-white font-medium">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-primary-yellow font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Absolute Mandatory Footer Copyright */}
        <div className="border-t border-gray-800/80 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} RADHE ENTERPRISE. All rights reserved. | Built by Triqora Technologies
          </p>
        </div>
      </div>
    </footer>
  );
}
