import socialNetworkRegex from "./social-network-regex";

import parser from "./parser";

export default function detectSocialNetwork(url: string): string | null {

  const urlParser = parser(url);

  for (const label in socialNetworkRegex) {
    for (const regex of socialNetworkRegex[label]) {
      if (regex.test(urlParser)) {
        return label;
      }
    }

  }
  return null;
}


