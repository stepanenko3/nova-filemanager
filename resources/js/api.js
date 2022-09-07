export default {
    getData(path = '/', disk = null, page = 1, perPage = 10, search = null, filter = null) {
        return Nova.request()
            .get('/nova-vendor/nova-filemanager', {
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
            .get('/nova-vendor/nova-filemanager/disks/available')
            .then((response) => response.data);
    },

    fileDelete(disk, path) {
        return Nova.request()
            .post('/nova-vendor/nova-filemanager/files/delete', {
                disk: disk,
                path: path,
            })
            .then((response) => response.data);
    },

    fileDownload(path) {
        return Nova.request()
            .post('/nova-vendor/nova-filemanager/files/download', {
                path: path,
            })
            .then((response) => response.data);
    },

    fileRename(disk, oldPath, newPath) {
        return Nova.request()
            .post('/nova-vendor/nova-filemanager/files/rename', {
                disk: disk,
                oldPath: oldPath,
                newPath: newPath,
            })
            .then((response) => response.data);
    },

    fileUpload() {
        return Nova.request()
            .post('/nova-vendor/nova-filemanager/files/upload')
            .then((response) => response.data);
    },

    fileDuplicate(disk, path) {
        return Nova.request()
            .post('/nova-vendor/nova-filemanager/files/duplicate', {
                disk: disk,
                path: path,
            })
            .then((response) => response.data);
    },

    folderCreate(disk, path) {
        return Nova.request()
            .post('/nova-vendor/nova-filemanager/folders/create', {
                disk: disk,
                path: path,
            })
            .then((response) => response.data);
    },

    folderDelete(disk, path) {
        return Nova.request()
            .post('/nova-vendor/nova-filemanager/folders/delete', {
                disk: disk,
                path: path,
            })
            .then((response) => response.data);
    },

    folderRename(disk, oldPath, newPath) {
        return Nova.request()
            .post('/nova-vendor/nova-filemanager/folders/rename', {
                disk: disk,
                oldPath: oldPath,
                newPath: newPath,
            })
            .then((response) => response.data);
    },
};
