'use client';

import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import { generateWhatsAppUrl } from '@/lib/utils';

export default function WhatsAppButton() {
  const message = 'Hello SM Associate, I am interested in your finance/vehicle services. I would like to know more.';
  const whatsappUrl = generateWhatsAppUrl(message, COMPANY_INFO.whatsappNumber);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-[80] flex items-center gap-3 rounded-full border border-white/20 bg-[#10261f]/92 px-4 py-3 text-white shadow-[0_16px_40px_rgba(0,0,0,.25)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#8fe3d6]/50 hover:bg-[#17392f] active:scale-95"
    >
      <span className="grid h-9 w-9 place-items-center rounded-full bg-[#8fe3d6] text-[#07111f]">
        <MessageCircle size={19} />
      </span>
      <span className="hidden text-sm font-extrabold sm:block">Chat on WhatsApp</span>
    </a>
  );
}
