<template>
    <DefaultField :field="field" :errors="errors" :show-help-text="showHelpText">
        <template #field>
            <template v-if="field.value && field.display == 'image'">
                <div
                    class="card relative card relative border-lg border-50 overflow-hidden px-0 py-0 max-w-xs mb-2"
                >
                    <template v-if="field.type == 'image'">
                        <ImageDetail class="block w-full" :file="field" :css="''"></ImageDetail>
                    </template>

                    <template v-else>
                        <object class="no-preview" v-html="field.image"></object>
                    </template>
                </div>
            </template>

            <FilemanagerModal
                ref="filemanager"
                :resource="resourceName"
                :name="field.attribute"
                :home="field.home"
                :active="openModal"
                :value="value"
                :currentPath="currentPath"
                :defaultFolder="defaultFolder"
                :filter="field.filterBy"
                :buttons="field.buttons"
                @open-modal="openModalCreateFolder"
                @close-modal="closeFilemanagerModal"
                @update-current-path="updateCurrentPath"
                @showInfoItem="showInfoItem"
                @uploadFiles="uploadFiles"
            />

            <DetailModal
                ref="detailPopup"
                :info="info"
                :active="activeInfo"
                :popup="true"
                :buttons="field.buttons"
                @closePreview="closePreview"
                @refresh="refreshCurrent"
                @selectFile="setValue"
                @rename="fileRenamed"
            />

            <CreateFolderModal
                ref="createFolderModal"
                :active="showCreateFolder"
                :current="currentPath"
                @closeCreateFolderModal="closeModalCreateFolder"
                @refresh="refreshCurrent"
            />

            <!-- <UploadProgress
                ref="uploader"
                :current="currentPath"
                :visibility="field.visibility"
                :rules="field.upload_rules"
                @removeFile="removeFileFromUpload"
            ></UploadProgress> -->

            <FileSelect
                :id="field.name"
                :field="field"
                :is-readonly="field.readonly"
                :css="errorClasses"
                :value="value"
                @update:value="value = $event"
                @open-modal="openFilemanagerModal"
            ></FileSelect>

            <DangerButton v-if="value" @click.prevent="openRemoveModal">
                <Icon type="trash" width="16" height="16" />
                <span class="ml-2">
                    {{ __('Delete') }}
                </span>
            </DangerButton>

            <ConfirmRemoveFileModal
                :active="removeModalOpen"
                @confirm="removeFile"
                @close="closeRemoveModal"
            ></ConfirmRemoveFileModal>

            <help-text class="error-text mt-2 text-danger" v-if="showErrors && hasError">
                {{ firstError }}
            </help-text>

            <help-text class="help-text mt-2" v-if="showHelpText">
                {{ field.helpText }}
            </help-text>
        </template>
    </DefaultField>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova';

import FilemanagerModal from '../components/modals/FilemanagerModal';
import CreateFolderModal from '../components/modals/CreateFolderModal';
import DetailModal from '../components/modals/DetailModal';
import ConfirmRemoveFileModal from '../components/modals/ConfirmRemoveFileModal';
import ConfirmDeleteModal from '../components/modals/ConfirmDeleteModal';
import RenameModal from '../components/modals/RenameModal';

import UploadProgress from '../components/UploadProgress';
import ImageDetail from '../modules/ImageDetail';
import FileSelect from './custom/FileSelect';

import api from '../api';

export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],

    components: {
        FileSelect: FileSelect,
        UploadProgress: UploadProgress,
        ImageDetail: ImageDetail,

        FilemanagerModal: FilemanagerModal,
        CreateFolderModal: CreateFolderModal,
        DetailModal: DetailModal,
        ConfirmRemoveFileModal: ConfirmRemoveFileModal,
        RenameModal: RenameModal,
        ConfirmDeleteModal: ConfirmDeleteModal,
    },

    data: () => ({
        openModal: false,
        showCreateFolder: false,
        defaultFolder: null,
        currentPath: '/',

        //modalFile
        info: {},
        activeInfo: false,
        popupDetailsLoaded: false,

        //uploader
        filesToUpload: {},
        uploadType: null,
        folderUploadedName: null,

        removeModalOpen: false,
    }),

    methods: {
        openModalCreateFolder() {
            this.showCreateFolder = true;
        },
        closeModalCreateFolder() {
            this.showCreateFolder = false;
        },

        refreshCurrent() {
            this.$refs.filemanager.getData(this.currentPath);
        },

        openFilemanagerModal() {
            this.setCurrentPath();
            this.openModal = true;
        },

        closeFilemanagerModal() {
            this.openModal = false;
        },

        updateCurrentPath(val) {
            this.currentPath = val;
        },

        showInfoItem(item) {
            this.activeInfo = true;
            this.info = item;
        },

        closePreview() {
            this.info = {};
            this.activeInfo = false;
            this.popupDetailsLoaded = false;
        },

        uploadFiles(files, type, firstFolderName) {
            this.filesToUpload = files;
            this.uploadType = type;
            this.folderUploadedName = firstFolderName;
            this.$refs.uploader.startUploadingFiles(files, type);
        },

        removeFileFromUpload(uploadedFileId) {
            let index = this.filesToUpload.map((item) => item.id).indexOf(uploadedFileId);

            this.$delete(this.filesToUpload, index);
            if (this.filesToUpload.length === 0) {
                if (this.uploadType == 'folders') {
                    this.callFolderEvent(this.folderUploadedName);
                }

                this.folderUploadedName = null;
                this.uploadType = null;

                this.refreshCurrent();
            }
        },

        setCurrentPath() {
            if (this.field.folder != null) {
                this.defaultFolder = this.field.folder;
                this.currentPath = this.field.folder;
            } else {
                this.defaultFolder = '/';
                this.currentPath = '/';
            }
        },

        removeFile() {
            this.field.value = null;
            this.value = '';
            this.removeModalOpen = false;
        },

        fileRenamed(item) {
            this.info = item;
        },

        openRemoveModal() {
            this.removeModalOpen = true;
        },

        closeRemoveModal() {
            this.removeModalOpen = false;
        },

        callFolderEvent(path) {
            api.eventFolderUploaded(this.currentPathFolder + '/' + path);
        },

        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            this.value = this.field.value || '';
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.field.attribute, this.value || '');
        },

        /**
         * Update the field's internal value.
         */
        setValue(file) {
            this.value = file.path;
            this.closeFilemanagerModal();
        },
    },

    created() {
        this.setCurrentPath();
    },
};
</script>
