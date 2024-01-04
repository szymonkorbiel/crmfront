import instance from "./instance";


const downloadPDF = async (fileName, action) => {
    try {
      const encodedFileName = encodeURIComponent(fileName);
      const downloadUrl = `http://localhost:8000/api/file/download?file=${encodedFileName}`;
      const { data } = await instance.get(downloadUrl, { responseType: 'blob', });

      if (action == 'open') {
        openPdfInNewTab(data);
      } else if (action == 'download') {
        downloadFile(data, fileName);
      }

    } catch (e) {
      
    }
  }

  const openPdfInNewTab = (pdfContent) => {
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const dataUrl = URL.createObjectURL(blob);
    window.open(dataUrl, '_blank');
  };

  const downloadFile = (pdfContent, fileName) => {
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const dataUrl = URL.createObjectURL(blob);
    const anchor = document.createElement('a');

    anchor.href = dataUrl;
    anchor.download = fileName;
    anchor.click();
  }

  const PdfUtils = {
    downloadPDF
  }

  export default PdfUtils;