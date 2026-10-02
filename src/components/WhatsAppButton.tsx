'use client';

import ContactChoicePopover from '@/components/ContactChoicePopover';

export default function WhatsAppButton() {
  return (
    <ContactChoicePopover
      type="whatsapp"
      label="Choose a WhatsApp number"
      wrapperClassName="whatsapp-floating-button"
      buttonClassName="whatsapp-floating-button-icon"
    />
  );
}
