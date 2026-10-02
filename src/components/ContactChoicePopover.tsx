'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import { generateWhatsAppUrl } from '@/lib/utils';

type ContactChoicePopoverProps = {
  type: 'phone' | 'whatsapp';
  label?: string;
  buttonClassName?: string;
  wrapperClassName?: string;
};

const phoneOptions = [
  {
    label: '+91 97902 19874',
    value: COMPANY_INFO.primaryPhone,
  },
  {
    label: '+91 90470 07720',
    value: COMPANY_INFO.secondaryPhone,
  },
];

const whatsappMessage = 'Hello SM Associate, I am interested in your finance/vehicle services. I would like to know more.';

export default function ContactChoicePopover({
  type,
  label,
  buttonClassName = '',
  wrapperClassName = '',
}: ContactChoicePopoverProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const isPhone = type === 'phone';
  const Icon = isPhone ? Phone : MessageCircle;
  const title = isPhone ? 'Choose a number' : 'Choose WhatsApp number';
  const description = isPhone ? 'Select the number you want to call.' : 'Select the number you want to message.';

  return (
    <div ref={rootRef} className={'relative inline-flex ' + wrapperClassName}>
      <button
        type="button"
        className={buttonClassName}
        onClick={() => setOpen((current) => !current)}
        aria-label={label ?? title}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <Icon size={18} aria-hidden="true" />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full z-[90] mt-3 w-[290px] overflow-hidden rounded-2xl border border-white/10 bg-[#0A1724] p-4 text-white shadow-2xl"
          role="dialog"
          aria-label={title}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold tracking-wide text-white">{title}</p>
              <p className="mt-1 text-xs leading-5 text-slate-300">{description}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-white/25 hover:text-white"
              aria-label="Close"
            >
              <X size={15} />
            </button>
          </div>

          <div className="mt-4 space-y-2">
            {phoneOptions.map((option) => {
              const href = isPhone
                ? 'tel:' + option.value
                : generateWhatsAppUrl(whatsappMessage, option.value);

              return (
                <a
                  key={option.value}
                  href={href}
                  target={isPhone ? undefined : '_blank'}
                  rel={isPhone ? undefined : 'noopener noreferrer'}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-3 transition hover:border-[#D9B65B]/70 hover:bg-[#D9B65B]/10"
                >
                  <span>
                    <span className="block text-xs uppercase tracking-[0.12em] text-slate-400">
                      {isPhone ? 'Call' : 'WhatsApp'}
                    </span>
                    <span className="mt-0.5 block text-sm font-semibold text-white">{option.label}</span>
                  </span>
                  <Icon size={17} className="text-[#D9B65B]" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
