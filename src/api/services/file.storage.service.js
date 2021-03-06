import HttpClient from '../../utils/http.client';
let instance = null;

class FileStorageService extends HttpClient {
  constructor() {
    super('file-storages');
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  upload(containerName, formData) {
    const header = {
      'content-type': 'multipart/form-data'
    };
    return this.endPoint([containerName, 'upload']).request('post', formData, null, null, header);
  }

  download(containerName, fileName) {
    return this.endPoint([containerName, 'download', fileName]).request('get');
  }

  getLinkTo(file) {
    return this.backendApi + [
      'file-storages',
      file.container,
      'download',
      file.name
    ].join('/');
  }

  findFileInContainer(containerName, fileName) {
    return this.endPoint([containerName, 'files', fileName]).request('get');
  }
}
const FileStorageApi = new FileStorageService();
export default FileStorageApi;
