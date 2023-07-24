import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import Resume from '../../assets/resumeShubhamJindal.pdf'
import './styles.css'
import { Document, Page } from 'react-pdf';


const FileDownload = () => {

    const [numPages, setNumPages] = useState(null);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
    const handleFileDownload = () => {
        if (Resume) {
            saveAs(Resume);
        }
    };

    return (
        <div className='resume-download'>
            <Document
                file={Resume}
                onLoadSuccess={onDocumentLoadSuccess}
                options={{ workerSrc: "/pdf.worker.js" }}
            >
                <Page pageNumber={1} />
            </Document>
            <button className='resume-btn' onClick={handleFileDownload}>
                Save File As PDF
            </button>
        </div>
    );
};

export default FileDownload;
