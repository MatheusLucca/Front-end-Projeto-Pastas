import instance from '@/commons/plugins/axios'

class ApiClient {
    async generateDirectoryTree(author) {
        return (await instance.post(`/api/directories/generate-directory-tree?author=${author}`)).data
    }

    async populateDirectoryTree(id, title, abstract, keyword) {
        return (await instance.post(`/api/directories/populate-directory-tree?id=${id}&title=${title}&abstract=${abstract}&keyword=${keyword}`)).data
    }

    async convert2txt(path) {
        return (await instance.post(`/api/pdf/convert/to-txt?path=${path}`)).data
    }

    async downloadDirectory(){
        return (await instance.get(`/api/download`, {responseType:'blob'})).data
    }

    async deleteDirectory(){
        return (await instance.delete(`/api/directories`)).data
    }
}

export default new ApiClient()