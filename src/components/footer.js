import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import ScrollTop from "../components/scroll-top";

export default function Footer() {
  return (
    <footer className="bg-company-black">
        <div className="container sm:flex text-white pt-24 pb-24">
            <div className="text-sm flex-1 pt-6 max-sm:mb-16">
                <p className="mb-2"><FaPhoneAlt className="inline-block mb-1 mr-1 rotate-90 text-xs"/>
                    <a href="tel:1-877-777-7777" className="hover:underline">+1 (877) 777-7777</a>
                </p>
                <p><FaMapMarkerAlt className="inline-block mb-1 mr-1"/>123 Main st, San Francisco, CA, 94107</p>
            </div>
            <div className="grid grid-cols-2 gap-8 flex-1 relative">
              <div>
                  <h2 className="mb-4 font-semibold">Free Trial</h2>
                  <ul className="text-sm">
                      <li className="mb-5">
                          <a href="#" className="hover:underline">Azure</a>
                      </li>
                      <li className="mb-5">
                          <a href="#" className="hover:underline">AWS</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Google</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-4 font-semibold">Resources</h2>
                  <ul className="text-sm">
                      <li className="mb-5">
                          <a href="#" className="hover:underline ">Terms Of Service</a>
                      </li>
                      <li className="mb-5">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Support</a>
                      </li>
                  </ul>
              </div>
              <ScrollTop />
            </div>

        </div>
        <hr className="h-p border-white"></hr>
        <div className="container flex items-center justify-center py-6">
            <p className="text-white text-sm">© 2022 Example</p>
        </div>
    </footer>
  )
}
