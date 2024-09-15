// // // src/pages/Issues.js

// // import React, { useState, useEffect } from 'react';
// // import { Button, TextField, CircularProgress, Modal, Box } from '@mui/material';
// // import './Issues.css';  // For the purple theme and custom styling
// // import Navbar from '../components/Navbar';  

// // const Issues = () => {
// //     const [issueName, setIssueName] = useState('');
// //     const [issueDescription, setIssueDescription] = useState('');
// //     const [issueImage, setIssueImage] = useState(null);
// //     const [isSubmitting, setIsSubmitting] = useState(false);
// //     const [successMessage, setSuccessMessage] = useState('');
// //     const [errorMessage, setErrorMessage] = useState('');
// //     const [openModal, setOpenModal] = useState(true);

// //     const handleIssueSubmit = (e) => {
// //         e.preventDefault();
// //         setIsSubmitting(true);
// //         setErrorMessage('');
// //         setSuccessMessage('');

// //         // Simulate an API request with setTimeout (Replace this with actual API call)
// //         setTimeout(() => {
// //             if (Math.random() > 0.5) {  // Random success/failure
// //                 setSuccessMessage('Issue submitted successfully!');
// //             } else {
// //                 setErrorMessage('Error submitting issue. Please try again.');
// //             }
// //             setIsSubmitting(false);
// //         }, 2000);
// //     };

// //     const handleCloseModal = () => setOpenModal(false);

// //     return (
// //         <div className="issues-page">
// //             {/* Warning Modal */}
// //             <Modal
// //                 open={openModal}
// //                 onClose={handleCloseModal}
// //                 aria-labelledby="modal-title"
// //                 aria-describedby="modal-description"
// //             >
// //                 <Box className="modal-box">
// //                     <h2 id="modal-title">Warning</h2>
// //                     <p id="modal-description">
// //                         Please ensure that all fields are filled out before submitting your issue.
// //                     </p>
// //                     <Button variant="contained" color="primary" onClick={handleCloseModal}>
// //                         Close
// //                     </Button>
// //                 </Box>
// //             </Modal>
// //             {/* <Navbar /> */}
// //             {/* Form */}
// //             <form className="issue-form" onSubmit={handleIssueSubmit}>
// //                 <h2>Report a Public Service Issue</h2>

// //                 <TextField
// //                     label="Issue Name"
// //                     variant="outlined"
// //                     fullWidth
// //                     required
// //                     value={issueName}
// //                     onChange={(e) => setIssueName(e.target.value)}
// //                     style={{ marginBottom: '20px' }}
// //                 />

// //                 <TextField
// //                     label="Issue Description"
// //                     variant="outlined"
// //                     fullWidth
// //                     required
// //                     multiline
// //                     rows={4}
// //                     value={issueDescription}
// //                     onChange={(e) => setIssueDescription(e.target.value)}
// //                     style={{ marginBottom: '20px' }}
// //                 />
// //                 <h4>Add Image of Issue</h4>
// //                 <Button
// //                     variant="contained"
// //                     component="label"
// //                     style={{ marginBottom: '20px' }}
// //                 >
// //                     Choose File
// //                     <input
// //                         type="file"
// //                         hidden
// //                         onChange={(e) => setIssueImage(e.target.files[0])}
// //                     />
// //                 </Button>

// //                 {issueImage && <p>File selected: {issueImage.name}</p>}

// //                 <Button
// //                     type="submit"
// //                     variant="contained"
// //                     color="secondary"
// //                     fullWidth
// //                     disabled={isSubmitting}
// //                 >
// //                     {isSubmitting ? <CircularProgress size={24} /> : 'Submit Issue'}
// //                 </Button>

// //                 {successMessage && <p className="success-message">{successMessage}</p>}
// //                 {errorMessage && <p className="error-message">{errorMessage}</p>}
// //             </form>
// //         </div>
// //     );
// // };

// // export default Issues;


// // src/pages/Issues.js

// import React, { useState } from 'react';
// import { Button, TextField, CircularProgress, Modal, Box } from '@mui/material';
// import './Issues.css';  // For the purple theme and custom styling
// import Navbar from '../components/Navbar';  

// const Issues = () => {
//     const [issueName, setIssueName] = useState('');
//     const [issueDescription, setIssueDescription] = useState('');
//     const [issueImage, setIssueImage] = useState(null);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [successMessage, setSuccessMessage] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [openModal, setOpenModal] = useState(false);  // Changed to false by default

//     const handleIssueSubmit = (e) => {
//         e.preventDefault();
//         if (!issueName || !issueDescription) {
//             setErrorMessage('Please fill out all fields.');
//             return;
//         }

//         setIsSubmitting(true);
//         setErrorMessage('');
//         setSuccessMessage('');

//         // Simulate an API request with setTimeout (Replace this with actual API call)
//         setTimeout(() => {
//             if (Math.random() > 0.5) {  // Random success/failure
//                 setSuccessMessage('Issue submitted successfully!');
//                 setIssueName('');
//                 setIssueDescription('');
//                 setIssueImage(null);
//             } else {
//                 setErrorMessage('Error submitting issue. Please try again.');
//             }
//             setIsSubmitting(false);
//         }, 2000);
//     };

//     const handleCloseModal = () => setOpenModal(false);

//     return (
//         <div className="issues-page">
//             {/* Warning Modal */}
//             <Modal
//                 open={openModal}
//                 onClose={handleCloseModal}
//                 aria-labelledby="modal-title"
//                 aria-describedby="modal-description"
//             >
//                 <Box className="modal-box">
//                     <h2 id="modal-title">Warning</h2>
//                     <p id="modal-description">
//                         Please ensure that all fields are filled out before submitting your issue.
//                     </p>
//                     <Button variant="contained" color="primary" onClick={handleCloseModal}>
//                         Close
//                     </Button>
//                 </Box>
//             </Modal>

//             {/* Form */}
//             <form className="issue-form" onSubmit={handleIssueSubmit}>
//                 <h2>Report a Public Service Issue</h2>

//                 <TextField
//                     label="Issue Name"
//                     variant="outlined"
//                     fullWidth
//                     required
//                     value={issueName}
//                     onChange={(e) => setIssueName(e.target.value)}
//                     style={{ marginBottom: '20px' }}
//                 />

//                 <TextField
//                     label="Issue Description"
//                     variant="outlined"
//                     fullWidth
//                     required
//                     multiline
//                     rows={4}
//                     value={issueDescription}
//                     onChange={(e) => setIssueDescription(e.target.value)}
//                     style={{ marginBottom: '20px' }}
//                 />

//                 <h4>Add Image of Issue (Optional)</h4>
//                 <Button
//                     variant="contained"
//                     component="label"
//                     style={{ marginBottom: '20px' }}
//                 >
//                     Choose File
//                     <input
//                         type="file"
//                         hidden
//                         onChange={(e) => setIssueImage(e.target.files[0])}
//                         accept="image/*"  // Accept only image files
//                     />
//                 </Button>

//                 {issueImage && <p>File selected: {issueImage.name}</p>}

//                 <Button
//                     type="submit"
//                     variant="contained"
//                     color="secondary"
//                     fullWidth
//                     disabled={isSubmitting}
//                 >
//                     {isSubmitting ? <CircularProgress size={24} /> : 'Submit Issue'}
//                 </Button>

//                 {successMessage && <p className="success-message">{successMessage}</p>}
//                 {errorMessage && <p className="error-message">{errorMessage}</p>}
//             </form>
//         </div>
//     );
// };

// export default Issues;


// src/pages/Issues.js

// import React, { useState, useContext } from 'react';
// import { Button, TextField, CircularProgress, Modal, Box } from '@mui/material';
// import './Issues.css';  
// import IssuesContext from '../contexts/IssuesContext'; // Import IssuesContext

// const Issues = () => {
//     const [issueName, setIssueName] = useState('');
//     const [issueDescription, setIssueDescription] = useState('');
//     const [issueImage, setIssueImage] = useState(null);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [successMessage, setSuccessMessage] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [openModal, setOpenModal] = useState(false);

//     const { addIssue } = useContext(IssuesContext); // Get addIssue from IssuesContext

//     const handleIssueSubmit = (e) => {
//         e.preventDefault();
//         if (!issueName || !issueDescription) {
//             setErrorMessage('Please fill out all fields.');
//             setOpenModal(true);
//             return;
//         }

//         setIsSubmitting(true);
//         setErrorMessage('');
//         setSuccessMessage('');

//         setTimeout(() => {
//             if (Math.random() > 0.5) {  
//                 const newIssue = {
//                     name: issueName,
//                     description: issueDescription,
//                     image: issueImage,
//                     votes: 0,
//                     downvotes: 0,
//                     timestamp: new Date().toISOString(),
//                 };
//                 addIssue(newIssue);  // Add issue to context
//                 setSuccessMessage('Issue submitted successfully!');
//                 setIssueName('');
//                 setIssueDescription('');
//                 setIssueImage(null);
//             } else {
//                 setErrorMessage('Error submitting issue. Please try again.');
//             }
//             setIsSubmitting(false);
//         }, 2000);
//     };

//     const handleCloseModal = () => setOpenModal(false);

//     return (
//         <div className="issues-page">
//             <Modal open={openModal} onClose={handleCloseModal}>
//                 <Box className="modal-box">
//                     <h2>Warning</h2>
//                     <p>Please ensure that all fields are filled out before submitting your issue.</p>
//                     <Button variant="contained" onClick={handleCloseModal}>Close</Button>
//                 </Box>
//             </Modal>

//             <form className="issue-form" onSubmit={handleIssueSubmit}>
//                 <h2>Report a Public Service Issue</h2>

//                 <TextField
//                     label="Issue Name"
//                     variant="outlined"
//                     fullWidth
//                     required
//                     value={issueName}
//                     onChange={(e) => setIssueName(e.target.value)}
//                     style={{ marginBottom: '20px' }}
//                 />

//                 <TextField
//                     label="Issue Description"
//                     variant="outlined"
//                     fullWidth
//                     required
//                     multiline
//                     rows={4}
//                     value={issueDescription}
//                     onChange={(e) => setIssueDescription(e.target.value)}
//                     style={{ marginBottom: '20px' }}
//                 />

//                 <h4>Add Image of Issue (Optional)</h4>
//                 <Button variant="contained" component="label" style={{ marginBottom: '20px' }}>
//                     Choose File
//                     <input
//                         type="file"
//                         hidden
//                         onChange={(e) => setIssueImage(e.target.files[0])}
//                         accept="image/*"
//                     />
//                 </Button>

//                 {issueImage && <p>File selected: {issueImage.name}</p>}

//                 <Button
//                     type="submit"
//                     variant="contained"
//                     color="secondary"
//                     fullWidth
//                     disabled={isSubmitting}
//                 >
//                     {isSubmitting ? <CircularProgress size={24} /> : 'Submit Issue'}
//                 </Button>

//                 {successMessage && <p className="success-message">{successMessage}</p>}
//                 {errorMessage && <p className="error-message">{errorMessage}</p>}
//             </form>
//         </div>
//     );
// };

// export default Issues;


import React, { useState, useContext } from 'react';
import { Button, TextField, CircularProgress, Modal, Box } from '@mui/material';
import './Issues.css';  
import IssuesContext from '../contexts/IssuesContext';

const Issues = () => {
    const [issueName, setIssueName] = useState('');
    const [issueDescription, setIssueDescription] = useState('');
    const [issueImage, setIssueImage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const { addIssue } = useContext(IssuesContext);

    const handleIssueSubmit = (e) => {
        e.preventDefault();

        // Debugging logs
        console.log("Issue submission started");
        console.log("Issue Name:", issueName);
        console.log("Issue Description:", issueDescription);

        if (!issueName || !issueDescription) {
            setErrorMessage('Please fill out all fields.');
            setOpenModal(true);
            return;
        }

        setIsSubmitting(true);
        setErrorMessage('');
        setSuccessMessage('');

        // Simulate an API request (or replace with real one)
        setTimeout(() => {
            if (Math.random() > 0.5) {  
                const newIssue = {
                    name: issueName,
                    description: issueDescription,
                    image: issueImage,
                    votes: 0,
                    downvotes: 0,
                    timestamp: new Date().toISOString(),
                };
                
                try {
                    addIssue(newIssue);  // Add issue to context
                    setSuccessMessage('Issue submitted successfully!');
                    
                    // Reset form fields after successful submission
                    setIssueName('');
                    setIssueDescription('');
                    setIssueImage(null);
                    console.log('Issue added:', newIssue);
                } catch (error) {
                    setErrorMessage('Error submitting issue: ' + error.message);
                    console.error('Error adding issue:', error);
                }
            } else {
                setErrorMessage('Error submitting issue. Please try again.');
                console.log('Issue submission failed randomly.');
            }
            setIsSubmitting(false);
        }, 2000);
    };

    const handleCloseModal = () => setOpenModal(false);

    return (
        <div className="issues-page">
            <Modal open={openModal} onClose={handleCloseModal}>
                <Box className="modal-box">
                    <h2>Warning</h2>
                    <p>Please ensure that all fields are filled out before submitting your issue.</p>
                    <Button variant="contained" onClick={handleCloseModal}>Close</Button>
                </Box>
            </Modal>

            <form className="issue-form" onSubmit={handleIssueSubmit}>
                <h2>Report a Public Service Issue</h2>

                <TextField
                    label="Issue Name"
                    variant="outlined"
                    fullWidth
                    required
                    value={issueName}
                    onChange={(e) => setIssueName(e.target.value)}
                    style={{ marginBottom: '20px' }}
                />

                <TextField
                    label="Issue Description"
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    value={issueDescription}
                    onChange={(e) => setIssueDescription(e.target.value)}
                    style={{ marginBottom: '20px' }}
                />

                <h4>Add Image of Issue (Optional)</h4>
                <Button variant="contained" component="label" style={{ marginBottom: '20px' }}>
                    Choose File
                    <input
                        type="file"
                        hidden
                        onChange={(e) => setIssueImage(e.target.files[0])}
                        accept="image/*"
                    />
                </Button>

                {issueImage && <p>File selected: {issueImage.name}</p>}

                <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    fullWidth
                    disabled={isSubmitting}
                >
                    {isSubmitting ? <CircularProgress size={24} /> : 'Submit Issue'}
                </Button>

                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default Issues;
