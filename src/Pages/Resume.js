import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../Ashley_Chang_Resume.pdf';
import Navbar from "./NavBar";
import Pager from "./Page"

class Core extends React.Component{
    render() {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
        return (
            <>
                {/*<h1>My Resume </h1>*/}
                <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
                    <h1>My Resume </h1>
                </div>
                <Document file={resume}>
                    <Page pageNumber={1}/>
                </Document>
            </>
        );
    }
}

class Resume extends React.Component{
    render() {
        return (
            <>
            <Navbar/>
                <div className="top"/>
            <Pager
                id={"projects"}
                content={<Core/>}
            />
            </>
        );
    }
}

export default Resume;