export default {
    getData(path = '/', disk = null, page = 1, perPage = 10, search = null, filter = null) {
        return Nova.request()
            .get('/nova-vendor/nova-file-manager', {
                params: {
                    path,
                    disk,
                    page,
                    perPage,
                    search,
                    filter,
                },
            })
            .then((response) => response.data);
    },

    getDisks() {
        return Nova.request()
            .get('/nova-vendor/nova-file-manager/disks/available')
            .then((response) => response.data);
    },

    fileDelete(disk, path) {
        return Nova.request()
            .post('/nova-vendor/nova-file-manager/files/delete', {
                disk: disk,
                path: path,
            })
            .then((response) => response.data);
    },

    fileDownload(path) {
        return Nova.request()
            .post('/nova-vendor/nova-file-manager/files/download', {
                path: path,
            })
            .then((response) => response.data);
    },

    fileRename(disk, oldPath, newPath) {
        return Nova.request()
            .post('/nova-vendor/nova-file-manager/files/rename', {
                disk: disk,
                oldPath: oldPath,
                newPath: newPath,
            })
            .then((response) => response.data);
    },

    fileUpload(disk, path, file, onUploadProgress = (e) => { }) {
        let formData = new FormData();

        formData.append('disk', disk);
        formData.append('path', path);
        formData.append('file', file);

        return Nova.request()
            .post(
                '/nova-vendor/nova-file-manager/files/upload',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    onUploadProgress: (e) => onUploadProgress(e),
                }
            )
            .then((response) => response.data);
    },

    fileDuplicate(disk, path) {
        return Nova.request()
            .post('/nova-vendor/nova-file-manager/files/duplicate', {
                disk: disk,
                path: path,
            })
            .then((response) => response.data);
    },

    folderCreate(disk, path) {
        return Nova.request()
            .post('/nova-vendor/nova-file-manager/folders/create', {
                disk: disk,
                path: path,
            })
            .then((response) => response.data);
    },

    folderDelete(disk, path) {
        return Nova.request()
            .post('/nova-vendor/nova-file-manager/folders/delete', {
                disk: disk,
                path: path,
            })
            .then((response) => response.data);
    },

    folderRename(disk, oldPath, newPath) {
        return Nova.request()
            .post('/nova-vendor/nova-file-manager/folders/rename', {
                disk: disk,
                oldPath: oldPath,
                newPath: newPath,
            })
            .then((response) => response.data);
    },
};
