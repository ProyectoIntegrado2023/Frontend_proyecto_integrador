interface ExtensionMappings {
    [key: string]: string;
}

export function extencionValida(extension: string): string {
    const validExtensions: ExtensionMappings = {
      // img
      'image/jpg':    '../../../assets/img/icons/img.png',
      'image/png':    '../../../assets/img/icons/img.png',
      'image/jpeg':   '../../../assets/img/icons/img.png',
      'text/plain':   '../../../assets/img/icons/txt.png',

      // pdf
      'application/pdf':  '../../../assets/img/icons/pdf.png',
      
      // excel
      'application/vnd.ms-excel':                                             '../../../assets/img/icons/excel.png',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':    '../../../assets/img/icons/excel.png',
      
      // word
      'application/msword':                                                       '../../../assets/img/icons/word.png',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document':  '../../../assets/img/icons/word.png',
      
      // powerpoint
      'application/vnd.ms-powerpoint':                                                '../../../assets/img/icons/ppt.png',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation':    '../../../assets/img/icons/ppt.png',
    };
    const defaultIcon = '../../../assets/img/icons/otros.png';

    return validExtensions[extension] || defaultIcon;
  }