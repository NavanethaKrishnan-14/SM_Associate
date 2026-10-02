'use client';

import ContactChoicePopover from '@/components/ContactChoicePopover';

export default function WhatsAppButton() {
  return (
    <ContactChoicePopover
      type="whatsapp"
      label="Choose a WhatsApp number"
      wrapperClassName="fixed bottom-8 right-8 z-40"
      buttonClassName="p-4 bg-green-500 hover:bg-green-600 active:scale-95 hover:scale-110 text-white rounded-full shadow-lg transition-all duration-300 animate-bounce-soft flex items-center justify-center"
    />
  );
}
