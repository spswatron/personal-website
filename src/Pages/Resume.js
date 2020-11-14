import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../Ashley_Chang_Resume.pdf';
import Navbar from "./NavBar";
import Pager from "./Page"
import Sidebar from "./Sidebar";

class Core extends React.Component{
    render() {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
        return (
            <>
                {/*<h1>My Resume </h1>*/}
                <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
                    <h1 style={{marginTop: '2%'}}>My Resume </h1>
                </div>
                {/*<object data={resume} type="application/pdf" style={{width:'100%', height:'100%'}}>*/}
                <iframe src={resume} style={{width:'100%', height:'100%', overflow: 'auto'}}/>
            </>
        );
    }
}

class Resume extends React.Component{
    render() {
        return (
            <>
            <Navbar/>
            <div className={"nav fa"}><Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /></div>
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