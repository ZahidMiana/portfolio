import React from "react";
import "./WhatsAppFloat.css";

export default function WhatsAppFloat() {
  const phoneNumber = "923085897061";
  const message =
    "Hi Zahid! I visited your portfolio and would like to connect.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="32"
        height="32"
        fill="white"
      >
        <path d="M24 4C12.954 4 4 12.954 4 24c0 3.536.938 6.855 2.572 9.726L4 44l10.573-2.47A19.906 19.906 0 0024 44c11.046 0 20-8.954 20-20S35.046 4 24 4zm0 36c-3.214 0-6.216-.96-8.726-2.605l-.625-.376-6.48 1.512 1.545-6.33-.41-.654A15.916 15.916 0 018 24c0-8.837 7.163-16 16-16s16 7.163 16 16-7.163 16-16 16zm8.773-11.953c-.48-.24-2.84-1.4-3.28-1.56-.44-.16-.76-.24-1.08.24-.32.48-1.24 1.56-1.52 1.88-.28.32-.56.36-1.04.12-.48-.24-2.03-.748-3.867-2.387-1.43-1.275-2.395-2.85-2.675-3.33-.28-.48-.03-.74.21-.98.217-.217.48-.56.72-.84.24-.28.32-.48.48-.8.16-.32.08-.6-.04-.84-.12-.24-1.08-2.6-1.48-3.56-.39-.935-.786-.81-1.08-.824l-.92-.016c-.32 0-.84.12-1.28.6-.44.48-1.68 1.64-1.68 4s1.72 4.64 1.96 4.96c.24.32 3.387 5.17 8.207 7.25 1.146.495 2.04.79 2.737 1.012 1.15.365 2.197.314 3.023.19.922-.137 2.84-1.16 3.24-2.28.4-1.12.4-2.08.28-2.28-.12-.2-.44-.32-.92-.56z" />
      </svg>
    </a>
  );
}
