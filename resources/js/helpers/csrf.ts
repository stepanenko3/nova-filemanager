export function csrf(): string {
  return (document.head.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)?.content ?? ''
}
