// // // src/pages/UpvotePage.js

// // import React, { useState } from 'react';
// // import { Card, CardContent, Button, Typography, Grid } from '@mui/material';
// // import { motion } from 'framer-motion';  // For animations
// // import './Upvote.css';

// // const UpvotePage = ({ issues }) => {
// //   const [issuesList, setIssuesList] = useState(issues);

// //   const handleVote = (index, type) => {
// //     const updatedIssues = issuesList.map((issue, i) => {
// //       if (i === index) {
// //         return {
// //           ...issue,
// //           votes: type === 'upvote' ? issue.votes + 1 : issue.votes,
// //           downvotes: type === 'downvote' ? issue.downvotes + 1 : issue.downvotes,
// //         };
// //       }
// //       return issue;
// //     });

// //     // Reorder issues based on vote difference
// //     const sortedIssues = [...updatedIssues].sort((a, b) => (b.votes - b.downvotes) - (a.votes - a.downvotes));
// //     setIssuesList(sortedIssues);
// //   };

// //   return (
// //     <div className="upvote-page">
// //       <h1>Upvote Issues</h1>
// //       <Grid container spacing={3}>
// //         {issuesList.map((issue, index) => (
// //           <Grid item xs={12} md={6} key={index}>
// //             <motion.div
// //               initial={{ opacity: 0, transform: 'translateY(20px)' }}
// //               animate={{ opacity: 1, transform: 'translateY(0)' }}
// //               transition={{ duration: 0.5 }}
// //             >
// //               <Card className="issue-card">
// //                 <CardContent>
// //                   <Typography variant="h6">{issue.name}</Typography>
// //                   <Typography variant="body2" color="textSecondary">
// //                     {issue.description.substring(0, 100)}...
// //                   </Typography>
// //                   <Typography variant="caption" color="textSecondary">
// //                     {new Date(issue.timestamp).toLocaleString()}
// //                   </Typography>
// //                   <div className="vote-buttons">
// //                     <Button
// //                       variant="outlined"
// //                       color="primary"
// //                       onClick={() => handleVote(index, 'upvote')}
// //                     >
// //                       Upvote ({issue.votes})
// //                     </Button>
// //                     <Button
// //                       variant="outlined"
// //                       color="secondary"
// //                       onClick={() => handleVote(index, 'downvote')}
// //                     >
// //                       Downvote ({issue.downvotes})
// //                     </Button>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </motion.div>
// //           </Grid>
// //         ))}
// //       </Grid>
// //     </div>
// //   );
// // };

// // export default UpvotePage;


// // src/pages/UpvotePage.js

// import React, { useState } from 'react';
// import { Card, CardContent, Button, Typography, Grid } from '@mui/material';
// import { motion } from 'framer-motion';  // For animations
// import './Upvote.css';

// const UpvotePage = ({ issues }) => {
//   console.log('Issues data:', issues); // Add this line

//   const [issuesList, setIssuesList] = useState(issues);

//   const handleVote = (index, type) => {
//     const updatedIssues = issuesList.map((issue, i) => {
//       if (i === index) {
//         return {
//           ...issue,
//           votes: type === 'upvote' ? issue.votes + 1 : issue.votes,
//           downvotes: type === 'downvote' ? issue.downvotes + 1 : issue.downvotes,
//         };
//       }
//       return issue;
//     });

//     // Reorder issues based on vote difference
//     const sortedIssues = [...updatedIssues].sort((a, b) => (b.votes - b.downvotes) - (a.votes - a.downvotes));
//     setIssuesList(sortedIssues);
//   };

//   return (
//     <div className="upvote-page">
//       <h1>Upvote Issues</h1>
//       <Grid container spacing={3}>
//         {issuesList.length > 0 ? (
//           issuesList.map((issue, index) => (
//             <Grid item xs={12} md={6} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, transform: 'translateY(20px)' }}
//                 animate={{ opacity: 1, transform: 'translateY(0)' }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <Card className="issue-card">
//                   <CardContent>
//                     <Typography variant="h6">{issue.name}</Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {issue.description.substring(0, 100)}...
//                     </Typography>
//                     <Typography variant="caption" color="textSecondary">
//                       {new Date(issue.timestamp).toLocaleString()}
//                     </Typography>
//                     <div className="vote-buttons">
//                       <Button
//                         variant="outlined"
//                         color="primary"
//                         onClick={() => handleVote(index, 'upvote')}
//                       >
//                         Upvote ({issue.votes})
//                       </Button>
//                       <Button
//                         variant="outlined"
//                         color="secondary"
//                         onClick={() => handleVote(index, 'downvote')}
//                       >
//                         Downvote ({issue.downvotes})
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))
//         ) : (
//           <Typography variant="body1">No issues to display</Typography>
//         )}
//       </Grid>
//     </div>
//   );
// };

// export default UpvotePage;


// src/pages/Upvote.js

// import React, { useContext, useState, useEffect } from 'react';
// import { Card, CardContent, Button, Typography, Grid } from '@mui/material';
// import { motion } from 'framer-motion';  // For animations
// import './Upvote.css';  // Add your CSS for styling
// import IssuesContext from '../contexts/IssuesContext';  // Import IssuesContext

// const Upvote = () => {
//     const { issues } = useContext(IssuesContext);  // Use context
//     const [issuesList, setIssuesList] = useState([]);

//     useEffect(() => {
//         setIssuesList(issues);
//     }, [issues]);

//     const handleVote = (index, type) => {
//         const updatedIssues = issuesList.map((issue, i) => {
//             if (i === index) {
//                 return {
//                     ...issue,
//                     votes: type === 'upvote' ? issue.votes + 1 : issue.votes,
//                     downvotes: type === 'downvote' ? issue.downvotes + 1 : issue.downvotes,
//                 };
//             }
//             return issue;
//         });

//         // Reorder issues based on vote difference
//         const sortedIssues = [...updatedIssues].sort((a, b) => (b.votes - b.downvotes) - (a.votes - a.downvotes));
//         setIssuesList(sortedIssues);
//     };

//     return (
//         <div className="upvote-page">
//             <h1>Upvote Issues</h1>
//             <Grid container spacing={3}>
//                 {issuesList.length > 0 ? (
//                     issuesList.map((issue, index) => (
//                         <Grid item xs={12} md={6} key={index}>
//                             <motion.div
//                                 initial={{ opacity: 0, transform: 'translateY(20px)' }}
//                                 animate={{ opacity: 1, transform: 'translateY(0)' }}
//                                 transition={{ duration: 0.5 }}
//                             >
//                                 <Card className="issue-card">
//                                     <CardContent>
//                                         <Typography variant="h6">{issue.name}</Typography>
//                                         <Typography variant="body2" color="textSecondary">
//                                             {issue.description.substring(0, 100)}...
//                                         </Typography>
//                                         <Typography variant="caption" color="textSecondary">
//                                             {new Date(issue.timestamp).toLocaleString()}
//                                         </Typography>
//                                         <div className="vote-buttons">
//                                             <Button
//                                                 variant="outlined"
//                                                 color="primary"
//                                                 onClick={() => handleVote(index, 'upvote')}
//                                             >
//                                                 Upvote ({issue.votes})
//                                             </Button>
//                                             <Button
//                                                 variant="outlined"
//                                                 color="secondary"
//                                                 onClick={() => handleVote(index, 'downvote')}
//                                             >
//                                                 Downvote ({issue.downvotes})
//                                             </Button>
//                                         </div>
//                                     </CardContent>
//                                 </Card>
//                             </motion.div>
//                         </Grid>
//                     ))
//                 ) : (
//                     <Typography variant="body1">No issues to display</Typography>
//                 )}
//             </Grid>
//         </div>
//     );
// };

// export default Upvote;


// src/pages/Issues.js
// import React, { useState, useContext } from 'react';
// import { Button, TextField, CircularProgress, Modal, Box } from '@mui/material';
// import './Issues.css';
// import Navbar from '../components/Navbar';
// import IssuesContext from '../contexts/IssuesContext';

// const Issues = () => {
//     const { addIssue } = useContext(IssuesContext);
//     const [issueName, setIssueName] = useState('');
//     const [issueDescription, setIssueDescription] = useState('');
//     const [issueImage, setIssueImage] = useState(null);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [successMessage, setSuccessMessage] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [openModal, setOpenModal] = useState(false);

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
//                 addIssue({
//                     name: issueName,
//                     description: issueDescription,
//                     votes: 0,
//                     downvotes: 0,
//                     timestamp: new Date().toISOString(),
//                 });
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


// src/pages/Upvote.js
// import React, { useContext, useState, useEffect } from 'react';
// import { Card, CardContent, Button, Typography, Grid } from '@mui/material';
// import { motion } from 'framer-motion';
// import './Upvote.css';
// import IssuesContext from '../contexts/IssuesContext';

// const Upvote = () => {
//     const { issues } = useContext(IssuesContext);  // Use context
//     const [issuesList, setIssuesList] = useState([]);

//     useEffect(() => {
//         if (issues) {
//             setIssuesList([...issues].sort((a, b) => (b.votes - b.downvotes) - (a.votes - a.downvotes)));
//         }
//     }, [issues]);

//     const handleVote = (index, type) => {
//         const updatedIssues = issuesList.map((issue, i) => {
//             if (i === index) {
//                 return {
//                     ...issue,
//                     votes: type === 'upvote' ? issue.votes + 1 : issue.votes,
//                     downvotes: type === 'downvote' ? issue.downvotes + 1 : issue.downvotes,
//                 };
//             }
//             return issue;
//         });

//         // Reorder issues based on vote difference
//         const sortedIssues = [...updatedIssues].sort((a, b) => (b.votes - b.downvotes) - (a.votes - a.downvotes));
//         setIssuesList(sortedIssues);
//     };

//     return (
//         <div className="upvote-page">
//             <h1>Upvote Issues</h1>
//             <Grid container spacing={3}>
//                 {issuesList.length > 0 ? (
//                     issuesList.map((issue, index) => (
//                         <Grid item xs={12} md={6} key={index}>
//                             <motion.div
//                                 initial={{ opacity: 0, transform: 'translateY(20px)' }}
//                                 animate={{ opacity: 1, transform: 'translateY(0)' }}
//                                 transition={{ duration: 0.5 }}
//                             >
//                                 <Card className="issue-card">
//                                     <CardContent>
//                                         <Typography variant="h6">{issue.name}</Typography>
//                                         <Typography variant="body2" color="textSecondary">
//                                             {issue.description.substring(0, 100)}...
//                                         </Typography>
//                                         <Typography variant="caption" color="textSecondary">
//                                             {new Date(issue.timestamp).toLocaleString()}
//                                         </Typography>
//                                         <div className="vote-buttons">
//                                             <Button
//                                                 variant="outlined"
//                                                 color="primary"
//                                                 onClick={() => handleVote(index, 'upvote')}
//                                             >
//                                                 Upvote ({issue.votes})
//                                             </Button>
//                                             <Button
//                                                 variant="outlined"
//                                                 color="secondary"
//                                                 onClick={() => handleVote(index, 'downvote')}
//                                             >
//                                                 Downvote ({issue.downvotes})
//                                             </Button>
//                                         </div>
//                                     </CardContent>
//                                 </Card>
//                             </motion.div>
//                         </Grid>
//                     ))
//                 ) : (
//                     <Typography variant="body1">No issues to display</Typography>
//                 )}
//             </Grid>
//         </div>
//     );
// };

// export default Upvote;


// import React, { useContext, useState, useEffect } from 'react';
// import { Card, CardContent, Button, Typography, Grid } from '@mui/material';
// import { motion } from 'framer-motion';
// import './Upvote.css';
// import IssuesContext from '../contexts/IssuesContext';

// const Upvote = () => {
//     const { issues } = useContext(IssuesContext);  // Use context
//     const [issuesList, setIssuesList] = useState([]);

//     useEffect(() => {
//         console.log('Issues from context:', issues);  // Debug log
//         if (issues && issues.length > 0) {
//             setIssuesList([...issues].sort((a, b) => (b.votes - b.downvotes) - (a.votes - a.downvotes)));
//         } else {
//             setIssuesList([]); // Ensure state is cleared if no issues exist
//         }
//     }, [issues]);

//     const handleVote = (index, type) => {
//         const updatedIssues = issuesList.map((issue, i) => {
//             if (i === index) {
//                 return {
//                     ...issue,
//                     votes: type === 'upvote' ? issue.votes + 1 : issue.votes,
//                     downvotes: type === 'downvote' ? issue.downvotes + 1 : issue.downvotes,
//                 };
//             }
//             return issue;
//         });

//         const sortedIssues = [...updatedIssues].sort((a, b) => (b.votes - b.downvotes) - (a.votes - a.downvotes));
//         setIssuesList(sortedIssues);
//     };

//     return (
//         <div className="upvote-page">
//             <h1>Upvote Issues</h1>
//             <Grid container spacing={3}>
//                 {issuesList.length > 0 ? (
//                     issuesList.map((issue, index) => (
//                         <Grid item xs={12} md={6} key={index}>
//                             <motion.div
//                                 initial={{ opacity: 0, transform: 'translateY(20px)' }}
//                                 animate={{ opacity: 1, transform: 'translateY(0)' }}
//                                 transition={{ duration: 0.5 }}
//                             >
//                                 <Card className="issue-card">
//                                     <CardContent>
//                                         <Typography variant="h6">{issue.name}</Typography>
//                                         <Typography variant="body2" color="textSecondary">
//                                             {issue.description.substring(0, 100)}...
//                                         </Typography>
//                                         <Typography variant="caption" color="textSecondary">
//                                             {new Date(issue.timestamp).toLocaleString()}
//                                         </Typography>
//                                         <div className="vote-buttons">
//                                             <Button
//                                                 variant="outlined"
//                                                 color="primary"
//                                                 onClick={() => handleVote(index, 'upvote')}
//                                             >
//                                                 Upvote ({issue.votes})
//                                             </Button>
//                                             <Button
//                                                 variant="outlined"
//                                                 color="secondary"
//                                                 onClick={() => handleVote(index, 'downvote')}
//                                             >
//                                                 Downvote ({issue.downvotes})
//                                             </Button>
//                                         </div>
//                                     </CardContent>
//                                 </Card>
//                             </motion.div>
//                         </Grid>
//                     ))
//                 ) : (
//                     <Typography variant="body1">No issues to display</Typography>
//                 )}
//             </Grid>
//         </div>
//     );
// };

// export default Upvote;


// import React, { useContext, useState, useEffect } from 'react';
// import { Button, Typography, Box, Grid } from '@mui/material';
// import { motion } from 'framer-motion';
// import './Upvote.css';
// import IssuesContext from '../contexts/IssuesContext';

// const Upvote = () => {
//     const { issues } = useContext(IssuesContext);  // Use context to get the issues list
//     const [issuesList, setIssuesList] = useState([]);
//     const [userVotes, setUserVotes] = useState({});  // Store user votes in state

//     // Load votes from localStorage on mount
//     useEffect(() => {
//         const savedVotes = JSON.parse(localStorage.getItem('userVotes')) || {};
//         setUserVotes(savedVotes);
//     }, []);

//     // On each issues update, save them to localStorage and sort by vote difference
//     useEffect(() => {
//         if (issues) {
//             const sortedIssues = [...issues].sort((a, b) => (b.votes - b.downvotes) - (a.votes - a.downvotes));
//             setIssuesList(sortedIssues);
//             localStorage.setItem('issuesList', JSON.stringify(sortedIssues));  // Store issues persistently
//         }
//     }, [issues]);

//     const handleVote = (index, type) => {
//         const issueId = issuesList[index].timestamp;  // Use timestamp or any unique ID as issue identifier
//         const updatedVotes = { ...userVotes };

//         if (updatedVotes[issueId]) {
//             // User has already voted on this issue
//             alert('You have already voted on this issue.');
//             return;
//         }

//         const updatedIssues = issuesList.map((issue, i) => {
//             if (i === index) {
//                 return {
//                     ...issue,
//                     votes: type === 'upvote' ? issue.votes + 1 : issue.votes,
//                     downvotes: type === 'downvote' ? issue.downvotes + 1 : issue.downvotes,
//                 };
//             }
//             return issue;
//         });

//         // Mark this issue as voted by the user
//         updatedVotes[issueId] = type;
//         setUserVotes(updatedVotes);
//         localStorage.setItem('userVotes', JSON.stringify(updatedVotes));  // Save votes to localStorage

//         // Reorder issues based on vote difference
//         const sortedIssues = [...updatedIssues].sort((a, b) => (b.votes - b.downvotes) - (a.votes - a.downvotes));
//         setIssuesList(sortedIssues);
//         localStorage.setItem('issuesList', JSON.stringify(sortedIssues));  // Update persisted issues
//     };

//     return (
//         <div className="upvote-page">
//             <h1>Upvote Issues</h1>
//             <Grid container spacing={2}>
//                 {issuesList.length > 0 ? (
//                     issuesList.map((issue, index) => (
//                         <Grid item xs={12} key={index}>
//                             <motion.div
//                                 initial={{ opacity: 0, transform: 'translateY(20px)' }}
//                                 animate={{ opacity: 1, transform: 'translateY(0)' }}
//                                 transition={{ duration: 0.5 }}
//                             >
//                                 <Box className="issue-list-item" sx={{ 
//                                     border: '1px solid #ddd', 
//                                     padding: '16px', 
//                                     borderRadius: '8px', 
//                                     marginBottom: '12px',
//                                     display: 'flex',
//                                     justifyContent: 'space-between',
//                                     alignItems: 'center'
//                                 }}>
//                                     <Box sx={{ flexGrow: 1 }}>
//                                         <Typography variant="h6" sx={{ marginBottom: '8px' }}>{issue.name}</Typography>
//                                         <Typography variant="body2" color="textSecondary">
//                                             {issue.description.substring(0, 100)}...
//                                         </Typography>
//                                         <Typography variant="caption" color="textSecondary">
//                                             {new Date(issue.timestamp).toLocaleString()}
//                                         </Typography>
//                                     </Box>

//                                     <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
//                                         <Button
//                                             variant="outlined"
//                                             color="primary"
//                                             onClick={() => handleVote(index, 'upvote')}
//                                             disabled={userVotes[issue.timestamp] !== undefined}  // Disable button if already voted
//                                             sx={{ marginBottom: '8px' }}
//                                         >
//                                             Upvote ({issue.votes})
//                                         </Button>
//                                         <Button
//                                             variant="outlined"
//                                             color="secondary"
//                                             onClick={() => handleVote(index, 'downvote')}
//                                             disabled={userVotes[issue.timestamp] !== undefined}  // Disable button if already voted
//                                         >
//                                             Downvote ({issue.downvotes})
//                                         </Button>
//                                     </Box>
//                                 </Box>
//                             </motion.div>
//                         </Grid>
//                     ))
//                 ) : (
//                     <Typography variant="body1">No issues to display</Typography>
//                 )}
//             </Grid>
//         </div>
//     );
// };

// export default Upvote;


import React, { useContext, useState, useEffect } from 'react';
import { Button, Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import './Upvote.css';
import IssuesContext from '../contexts/IssuesContext';

const Upvote = () => {
    const { issues } = useContext(IssuesContext);  // Use context to get the issues list
    const [issuesList, setIssuesList] = useState([]);
    const [userVotes, setUserVotes] = useState({});  // Store user votes in state

    // Load votes from localStorage on mount
    useEffect(() => {
        const savedVotes = JSON.parse(localStorage.getItem('userVotes')) || {};
        setUserVotes(savedVotes);
    }, []);

    // On each issues update, save them to localStorage and sort by vote difference
    useEffect(() => {
        if (issues) {
            const sortedIssues = [...issues].sort((a, b) => (b.votes - b.downvotes) - (a.votes - a.downvotes));
            setIssuesList(sortedIssues);
            localStorage.setItem('issuesList', JSON.stringify(sortedIssues));  // Store issues persistently
        }
    }, [issues]);

    const handleVote = (index, type) => {
        const issueId = issuesList[index].timestamp;  // Use timestamp or any unique ID as issue identifier
        const updatedVotes = { ...userVotes };

        // Toggle voting and allow switching between upvote and downvote
        if (updatedVotes[issueId] === type) {
            // If the user clicks the same vote again, they "unvote" (remove vote)
            updatedVotes[issueId] = null;
        } else {
            // User switches vote or makes a new vote
            updatedVotes[issueId] = type;
        }

        const updatedIssues = issuesList.map((issue, i) => {
            if (i === index) {
                return {
                    ...issue,
                    votes: updatedVotes[issueId] === 'upvote' ? issue.votes + 1 : issue.votes,
                    downvotes: updatedVotes[issueId] === 'downvote' ? issue.downvotes + 1 : issue.downvotes,
                };
            }
            return issue;
        });

        setUserVotes(updatedVotes);
        localStorage.setItem('userVotes', JSON.stringify(updatedVotes));  // Save votes to localStorage

        // Reorder issues based on vote difference
        const sortedIssues = [...updatedIssues].sort((a, b) => (b.votes - b.downvotes) - (a.votes - a.downvotes));
        setIssuesList(sortedIssues);
        localStorage.setItem('issuesList', JSON.stringify(sortedIssues));  // Update persisted issues
    };

    return (
        <div className="upvote-page">
            <h1>Upvote Issues</h1>
            <Grid container spacing={2}>
                {issuesList.length > 0 ? (
                    issuesList.map((issue, index) => (
                        <Grid item xs={12} key={index}>
                            <motion.div
                                initial={{ opacity: 0, transform: 'translateY(20px)' }}
                                animate={{ opacity: 1, transform: 'translateY(0)' }}
                                transition={{ duration: 0.5 }}
                            >
                                <Box className="issue-list-item" sx={{ 
                                    border: '1px solid #ddd', 
                                    padding: '16px', 
                                    borderRadius: '8px', 
                                    marginBottom: '12px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Typography variant="h6" sx={{ marginBottom: '8px' }}>{issue.name}</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {issue.description.substring(0, 100)}...
                                        </Typography>
                                        <Typography variant="caption" color="textSecondary">
                                            {new Date(issue.timestamp).toLocaleString()}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <Button
                                            variant="contained"
                                            color={userVotes[issue.timestamp] === 'upvote' ? 'primary' : 'inherit'}
                                            onClick={() => handleVote(index, 'upvote')}
                                            sx={{ backgroundColor: userVotes[issue.timestamp] === 'upvote' ? 'green' : 'white' }}
                                        >
                                            Upvote
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color={userVotes[issue.timestamp] === 'downvote' ? 'secondary' : 'inherit'}
                                            onClick={() => handleVote(index, 'downvote')}
                                            sx={{ backgroundColor: userVotes[issue.timestamp] === 'downvote' ? 'red' : 'white' }}
                                        >
                                            Downvote
                                        </Button>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="body1">No issues to display</Typography>
                )}
            </Grid>
        </div>
    );
};

export default Upvote;
