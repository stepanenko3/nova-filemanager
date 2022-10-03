<template>
    <div ref="filemanager-container">
        <Heading class="mb-6">
            {{ __('Filemanager') }}
        </Heading>

        <div class="relative" id="filemanager-manager">
            <Manager
                ref="manager"

                :card="card"

                :loading="loading"
                :path="path"
                :search="search"
                :disk="disk"
                :files="files"
                :breadcrumbs="breadcrumbs"
                :directories="directories"
                :filter="filter"
                :filters="filters"
                :multiSelecting="multiSelecting"
                :selectedFiles="selectedFiles"
                :pageLimits="pageLimits"

                @refresh="refresh"
                @goToFolder="goToFolder"
                @goToPage="goToPage"
                @select="select"
                @delete="openDeleteModal"
                @rename="openRenameModal"
                @multiDelete="openMultiDeleteModal"
                @createFolder="openModalCreateFolder"
                @showInfo="showInfo"

                @update:search="setSearch"
                @update:disk="setDisk"
                @update:filter="setFilter"
                @update:perPage="setPerPage"
                @update:multiSelecting="multiSelecting = $event"
            />
        </div>

        <DetailModal
            ref="detailPopup"
            :info="info"
            :active="info !== null"
            :disk="disk"

            @close="closePreview"
            @rename="openRenameModal"
            @delete="openDeleteModal"
            @duplicate="openConfirmDuplicateModal"
        />

        <CreateFolderModal
            ref="createFolderModal"
            :path="path"
            :disk="disk"
            @refresh="refreshCurrent"
        />

        <RenameModal
            ref="renameModal"
            :disk="disk"
            @refresh="refreshCurrent"
        />

        <ConfirmDuplicateModal
            ref="duplicateModal"
            :disk="disk"
            @refresh="refreshCurrent"
        />

        <ConfirmDeleteModal
            ref="confirmDelete"
            :disk="disk"
            @refresh="refreshCurrent"
        />

        <ConfirmMultiDeleteModal
            ref="confirmMultiDelete"
            :disk="disk"
            :selectedFiles="selectedFiles"
            @refresh="refreshCurrent"
        />
    </div>
</template>

<script>
    import ToolMixin from '../mixins/ToolMixin';

    export default {
        mixins: [
            ToolMixin,
        ],

        data: () => ({
            card: true,
            savePath: true,
        }),
    };
</script>
