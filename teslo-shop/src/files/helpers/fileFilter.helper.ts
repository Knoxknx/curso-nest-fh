export const fileFilter = (req: Express.Request, file: Express.Multer.File, callback: Function) => {

  if (!file) return callback(new Error('File is empty'), false);

  const fileExtensions = file.mimetype.split('/')[1];
  const validExtensions = ['jpg', 'png', 'jpeg'];

  if (validExtensions.includes(fileExtensions)) {
    return callback(null, true);
  }

  return callback(null, true);
}