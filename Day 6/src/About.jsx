import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-section">
      <div className="inner-container">
        <h2>About Us</h2>
        <p className="text">
        A task management portal, also known as a task management system or software, is a digital platform that helps individuals or teams organize and track their tasks, projects, and workflows. It provides a centralized location for creating, assigning, prioritizing, and monitoring tasks, ensuring efficient collaboration and productivity.

Key features of a task management portal may include:

Task Creation: Users can create tasks, assign them to team members, set due dates, and add relevant details such as descriptions, attachments, and dependencies.

Task Assignment: Tasks can be assigned to specific team members or groups, allowing for clear responsibility and accountability.

Prioritization and Deadlines: Users can prioritize tasks based on their urgency or importance and set deadlines to ensure timely completion.

Progress Tracking: The portal enables tracking the progress of tasks, showing their status (e.g., not started, in progress, completed), estimated time remaining, and any associated comments or updates.
        </p>
      </div>
    </div>
  );
}

export default About;
