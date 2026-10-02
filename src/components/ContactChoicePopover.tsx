'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
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
  const [mounted, setMounted] = useState(false);
  const [menuStyle, setMenuStyle] = useState({ top: 0, left: 0 });

  const rootRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateMenuPosition = () => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const menuWidth = 290;
    const menuHeight = 220;
    const gap = 12;

    let left = rect.right - menuWidth;
    left = Math.max(12, Math.min(left, window.innerWidth - menuWidth - 12));

    const spaceBelow = window.innerHeight - rect.bottom;
    const top =
      spaceBelow >= menuHeight + gap
        ? rect.bottom + gap
        : Math.max(12, rect.top - menuHeight - gap);

    setMenuStyle({ top, left });
  };

  useEffect(() => {
    if (!open) return;

    updateMenuPosition();

    const handleViewportChange = () => updateMenuPosition();

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!rootRef.current?.contains(target) && !menuRef.current?.contains(target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleViewportChange);
    window.addEventListener('scroll', handleViewportChange, true);
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', handleViewportChange);
      window.removeEventListener('scroll', handleViewportChange, true);
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const isPhone = type === 'phone';
  const Icon = isPhone ? Phone : MessageCircle;
  const title = isPhone ? 'Choose a number' : 'Choose WhatsApp number';
  const description = isPhone
    ? 'Select the number you want to call.'
    : 'Select the number you want to message.';

  const menu = open && mounted
    ? createPortal(
        <div
          ref={menuRef}
          className="fixed z-[9999] w-[290px] overflow-hidden rounded-2xl border border-white/10 bg-[#0A1724] p-4 text-white shadow-2xl"
          style={{
            top: menuStyle.top,
            left: menuStyle.left,
          }}
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
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <div ref={rootRef} className={'relative inline-flex ' + wrapperClassName}>
        <button
          ref={buttonRef}
          type="button"
          className={buttonClassName}
          onClick={() => setOpen((current) => !current)}
          aria-label={label ?? title}
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          <Icon size={18} aria-hidden="true" />
        </button>
      </div>
      {menu}
    </>
  );
}
