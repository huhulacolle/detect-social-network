import socialNetworkRegex from "./social-network-regex";

export default function detectSocialNetwork(url: string): string | null {

  const urlParser = new URL(url).hostname

  for (const label in socialNetworkRegex) {
    for (const regex of socialNetworkRegex[label]) {
      if (regex.test(urlParser)) {
        return label;
      }
    }
  }
  return null;
}
