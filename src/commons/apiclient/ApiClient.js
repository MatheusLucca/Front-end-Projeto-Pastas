import instance from '@/commons/plugins/axios'

class ApiClient {
    async generateDirectoryTree(author) {
        return (await instance.get(`/api/directories/generate-directory-tree?author=${author}`)).data
    }

    async populateDirectoryTree(id, title, abstract, keyword) {
        return (await instance.get(`/api/directories/populate-directory-tree?id=${id}&title=${title}&abstract=${abstract}&keyword=${keyword}`)).data
    }

    async convert2txt(id, path) {
        return (await instance.get(`/api/pdf/convert/to-txt?id=${id}&path=${path}`)).data
    }
}

export default new ApiClient()