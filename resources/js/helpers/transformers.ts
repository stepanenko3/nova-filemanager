import { OurFile } from "@/@types";

export default function nativeFileToEntity(file: File) {
    return {
        id: file.name,
        name: file.name,
        extension: file.type.split('/')[1],
        mime: file.type,
        path: file.name,
        type: file.type.split('/')[0],
        url: URL.createObjectURL(file),
        size: Number(file.size.toString()),
        lastModified: Number(new Date(file.lastModified).toString()),
    } as OurFile
}
