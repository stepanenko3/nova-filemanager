
export default function truncate(text: string, stop: number, clamp: string = "...") {
    return text.slice(0, stop) + (stop < text.length ? clamp : "");
}
