<template>
    <DefaultField :field="currentField" :errors="errors" :show-help-text="showHelpText">
        <template #field>
            <FilemanagerModal
                ref="filemanager"
                :resource="resourceName"
                :name="currentField.attribute"
                :home="currentField.home"
                :active="openModal"
                :value="value"
                :currentPath="currentPath"
                :defaultFolder="defaultFolder"
                :filter="currentField.filterBy"
                :buttons="currentField.buttons"
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
                :buttons="currentField.buttons"
                @closePreview="closePreview"
                @refresh="refreshCurrent"
                @selectFile="setValue($event.path)"
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
                :visibility="currentField.visibility"
                :rules="currentField.upload_rules"
                @removeFile="removeFileFromUpload"
            ></UploadProgress> -->

            <FileSelect
                :id="currentField.name"
                :field="currentField"
                :is-readonly="currentField.readonly"
                :css="errorClasses"
                :value="value"
                @update:value="setValue($event)"
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
    import { DependentFormField, HandlesValidationErrors } from 'laravel-nova';

    import FilemanagerModal from '../modals/FilemanagerModal';
    import CreateFolderModal from '../modals/CreateFolderModal';
    import DetailModal from '../modals/DetailModal';
    import ConfirmRemoveFileModal from '../modals/ConfirmRemoveFileModal';
    import ConfirmDeleteModal from '../modals/ConfirmDeleteModal';
    import RenameModal from '../modals/RenameModal';

    import UploadProgress from '../components/UploadProgress';
    import FileSelect from './custom/FileSelect';

    import api from '../api';

    export default {
        mixins: [DependentFormField, HandlesValidationErrors],

        components: {
            FileSelect: FileSelect,
            UploadProgress: UploadProgress,

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
                if (this.currentField.folder != null) {
                    this.defaultFolder = this.currentField.folder;
                    this.currentPath = this.currentField.folder;
                } else {
                    this.defaultFolder = '/';
                    this.currentPath = '/';
                }
            },

            removeFile() {
                this.setValue(null);
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
                this.value = this.currentField.value || '';
            },

            /**
             * Fill the given FormData object with the field's internal value.
             */
            fill(formData) {
                formData.append(this.currentField.attribute, this.value || '');
            },

            /**
             * Update the field's internal value.
             */
            setValue(value) {
                this.value = value;
                this.currentField.value = value;

                this.closeFilemanagerModal();
                this.handleChange({
                    target: {
                        value: value,
                    },
                });
            },
        },

        created() {
            this.setCurrentPath();
        },
    };
</script>
