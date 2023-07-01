import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

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
            <div class="grid grid-cols-2 gap-8 flex-1 ">
              <div>
                  <h2 class="mb-4 font-semibold">Free Trial</h2>
                  <ul className="text-sm">
                      <li class="mb-5">
                          <a href="#" class="hover:underline">Azure</a>
                      </li>
                      <li class="mb-5">
                          <a href="#" class="hover:underline">AWS</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Google</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-4 font-semibold">Resources</h2>
                  <ul className="text-sm">
                      <li class="mb-5">
                          <a href="#" class="hover:underline ">Terms Of Service</a>
                      </li>
                      <li class="mb-5">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Support</a>
                      </li>
                  </ul>
              </div>
          </div>
        </div>
        <hr class="h-p border-white"></hr>
        <div className="container flex items-center justify-center py-6">
            <p className="text-white text-sm">© 2022 Example</p>
        </div>
    </footer>
  )
}
