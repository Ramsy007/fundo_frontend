import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.linksRow}>
        <Link to="/terms-and-conditions">Terms & Conditions</Link>
        <span className={styles.separator}>|</span>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <span className={styles.separator}>|</span>
        <div className={styles.socials}>
          <a
            href="https://www.instagram.com/fundobaba/?igsh=MTJsc3U0NWRvYXg2NQ%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 2.25A6.25 6.25 0 1 1 5.75 12 6.25 6.25 0 0 1 12 5.75Zm0 1.5A4.75 4.75 0 1 0 16.75 12 4.75 4.75 0 0 0 12 7.25Zm6.25-.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"
              />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61575581712049&rdid=3kgoigXpg9wv2ug9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16AiSmev6u%2F#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M22 12a10 10 0 1 0-11.5 9.87v-6.99h-2.1V12h2.1V9.8c0-2.07 1.23-3.21 3.12-3.21.9 0 1.84.16 1.84.16v2.02h-1.04c-1.03 0-1.35.64-1.35 1.3V12h2.3l-.37 2.88h-1.93v6.99A10 10 0 0 0 22 12Z"
              />
            </svg>
          </a>
          {/* <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5Zm-9 19H5v-9h5v9Zm-2.5-10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM19 19h-5v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2V19h-5v-9h5v1.25c.6-.9 1.7-1.25 2.5-1.25 2.2 0 4 1.8 4 4V19Z"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M24 4.56a9.93 9.93 0 0 1-2.83.78A4.93 4.93 0 0 0 23.34 3a9.86 9.86 0 0 1-3.13 1.2A4.92 4.92 0 0 0 16.62 2c-2.73 0-4.94 2.21-4.94 4.94 0 .39.04.77.12 1.13C7.69 7.87 4.07 6.13 1.64 3.16c-.43.74-.68 1.6-.68 2.52 0 1.74.89 3.28 2.25 4.18a4.93 4.93 0 0 1-2.24-.62v.06c0 2.43 1.73 4.46 4.03 4.92-.42.12-.87.18-1.33.18-.32 0-.63-.03-.93-.09.63 1.97 2.45 3.4 4.6 3.44A9.87 9.87 0 0 1 0 21.54a13.94 13.94 0 0 0 7.56 2.22c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63A10.02 10.02 0 0 0 24 4.56Z"
              />
            </svg>
          </a> */}
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} FundoBaba. All rights reserved.
      </div>
    </footer>
  );
}
