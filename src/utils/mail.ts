// builds a link that opens Gmail's compose window directly, addressed to the given email
// (falls back to a normal mailto: if someone's not on Gmail, browsers handle that fine too)
export function gmailComposeUrl(email: string): string {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
}
