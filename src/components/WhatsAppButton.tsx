'use client';

import ContactChoicePopover from '@/components/ContactChoicePopover';

export default function WhatsAppButton() {
  return (
    <ContactChoicePopover
      type="whatsapp"
      label="Choose a WhatsApp number"
      wrapperClassName="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[100]"
      buttonClassName="h-14 w-14 sm:h-16 sm:w-16 bg-green-500 hover:bg-green-600 active:scale-95 hover:scale-105 text-white rounded-full shadow-[0_12px_30px_rgba(0,0,0,0.28)] transition-all duration-300 flex items-center justify-center border-2 border-white/30"
    />
  );
}
