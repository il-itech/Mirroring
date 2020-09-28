import { createActionCreator } from 'deox';

interface FileData {
  avatar: string;
  avatarName: string;
  uId: string;
}

export const uploadFile = createActionCreator(
  'UPLOAD_FILE',
  resolve => (fileData: FileData) => resolve(fileData),
);
