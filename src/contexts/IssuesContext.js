// // src/contexts/IssuesContext.js

// import React, { createContext, useState } from 'react';

// const IssuesContext = createContext();

// export const IssuesProvider = ({ children }) => {
//     const [issues, setIssues] = useState([]);

//     const addIssue = (issue) => {
//         setIssues((prevIssues) => [...prevIssues, issue]);
//     };

//     return (
//         <IssuesContext.Provider value={{ issues, addIssue }}>
//             {children}
//         </IssuesContext.Provider>
//     );
// };

// export default IssuesContext;


// // src/contexts/IssuesContext.js
// import React, { createContext, useState } from 'react';

// const IssuesContext = createContext();

// export const IssuesProvider = ({ children }) => {
//     const [issues, setIssues] = useState([]);

//     const addIssue = (issue) => {
//         setIssues((prevIssues) => [...prevIssues, issue]);
//     };

//     return (
//         <IssuesContext.Provider value={{ issues, addIssue }}>
//             {children}
//         </IssuesContext.Provider>
//     );
// };

// export default IssuesContext;


// src/contexts/IssuesContext.js
// import React, { createContext, useState } from 'react';

// const IssuesContext = createContext();

// export const IssuesProvider = ({ children }) => {
//     const [issues, setIssues] = useState([]);

//     // Function to add a new issue
//     const addIssue = (issue) => {
//         // Ensure the issue object contains the expected properties
//         const formattedIssue = {
//             ...issue,
//             votes: issue.votes || 0,  // Default votes to 0 if not provided
//             downvotes: issue.downvotes || 0,  // Default downvotes to 0 if not provided
//             timestamp: issue.timestamp || new Date().toISOString(),  // Default timestamp to current time if not provided
//         };
//         setIssues((prevIssues) => [...prevIssues, formattedIssue]);
//     };

//     // Optional: Function to remove an issue (if needed)
//     const removeIssue = (issueToRemove) => {
//         setIssues((prevIssues) => prevIssues.filter(issue => issue !== issueToRemove));
//     };

//     return (
//         <IssuesContext.Provider value={{ issues, addIssue, removeIssue }}>
//             {children}
//         </IssuesContext.Provider>
//     );
// };

// export default IssuesContext;



import React, { createContext, useState } from 'react';

const IssuesContext = createContext();

export const IssuesProvider = ({ children }) => {
    const [issues, setIssues] = useState([]);

    const addIssue = (issue) => {
        console.log('New issue added:', issue); // Debug log
        const formattedIssue = {
            ...issue,
            votes: issue.votes || 0,
            downvotes: issue.downvotes || 0,
            timestamp: issue.timestamp || new Date().toISOString(),
        };
        setIssues((prevIssues) => [...prevIssues, formattedIssue]);
    };

    const removeIssue = (issueToRemove) => {
        setIssues((prevIssues) => prevIssues.filter(issue => issue !== issueToRemove));
    };

    return (
        <IssuesContext.Provider value={{ issues, addIssue, removeIssue }}>
            {children}
        </IssuesContext.Provider>
    );
};

export default IssuesContext;
