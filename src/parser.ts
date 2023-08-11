export default function (social: string): string {
  return new URL(social).hostname
}