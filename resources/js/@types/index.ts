export type OurFile = {
    id: string
    name: string
    extension: string
    mime: string
    path: string
    type: string
    url: string
    size: number
    sizeReadable?: string
    lastModified: number
    lastModifiedReadable?: string
    meta?: {
        type: string
        aspectRation?: string
        height?: number
        width?: 400
    }

}

export type OurFolder = {
    id: string
    name: string
    path: string
}

export type ModalPayload = any;

export type Modal = {
    id: string
    name: string
    payload: ModalPayload,
}

export type OptionValue = {
    label: string
    value: string
}

export type Breadcrumb = {
    current: boolean
    id: string
    name: string
    path: string
}

export type PaginationLink = {
    url: string | null
    label: string
    active: boolean
}

export type Pagination = {
    current_page: number
    last_page: number
    from: number
    to: number
    total: number
    links: Array<PaginationLink>
}

export type Data = {
    path: string
    disk: string
    files: Array<OurFile>
    folders: Array<OurFolder>
    breadcrumbs: Array<Breadcrumb>
    filters: any
    pageLimits: Array<Number>
    pagination: Pagination
}

export type QueueEntryStatus = boolean | null

export type QueueEntry = {
    id: string
    file: File
    entity?: OurFile
    isImage?: boolean
    isVideo?: boolean
    isArchive?: boolean
    ratio: number
    status?: QueueEntryStatus
}
