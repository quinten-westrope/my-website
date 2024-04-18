import * as react from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Bio = () => {
    return (
        <Box
        sx={{
            "&.MuiBox-root": { display: "flex", flexDirection: "column" }
        }}>

            <Typography
            variant="h4"
            sx={{
                fontFamily: "montserrat",
                fontWeight: 600,
                margin: 1,
                color: "black",
                textAlign: "center",
                position: "relative",
                display: "inline-block",
                padding: 2
            }}
            >
                <span className="middle-out">About Me</span>
            </Typography>


            <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
            >
                Hey, I'm Quinn.
            </Typography>

            <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
            >
                I am an incoming Product Support specialist intern at Garmin for their golf division.
            </Typography>

            <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
            >
                I am passionate about technology and enjoy learning new things in my free time.
            </Typography>


            <Typography
            variant="h4"
            sx={{
                fontFamily: "montserrat",
                fontWeight: 600,
                margin: 1,
                color: "black",
                textAlign: "center",
                position: "relative",
                display: "inline-block",
                padding: 2
            }}
            >
                <span className="middle-out">Education</span>
            </Typography>

            <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
            >
                I am currently a freshman at the University of Kansas studying Computer Science.
            </Typography>

            <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
            >
                I am a member of the KU Association for Computing Machinery Club.
            </Typography>

            <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
            >
                Expected graduation date: May 2027
            </Typography>

            <Typography
            variant="h4"
            sx={{
                fontFamily: "montserrat",
                fontWeight: 600,
                margin: 1,
                color: "black",
                textAlign: "center",
                position: "relative",
                display: "inline-block",
                padding: 2
            }}
            >
                <span className="middle-out">Projects</span>
            </Typography>
        
            <Typography
            variant="h5"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 550,
                color: "black",
                margin: (1, 0),
                textAlign: "center",
            }}
            >
                Real-Time Typing Evaluator
            </Typography>
        
            <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
            >
                Engineered a typing test application with adaptive difficulty levels for dynamic user experience.
            </Typography>
        

            <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
            >
                Implemented real-time Words Per Minute (WPM) calculation for immediate and accurate feedback.
            </Typography>

            <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
            >
                Utilized multithreading for optimal responsiveness and smooth user interactions.
            </Typography>

            <Typography
            variant="h5"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 550,
                color: "black",
                margin: (1, 0),
                textAlign: "center",
            }}
            >
                BudgetBro App
            </Typography>

            <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
            >
                Developed a budget management application "Budget Bro" using Python's tkinter for GUI, allowing users to track expenses and manage their finances effectively.
            </Typography>

            <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
            >
                Integrated data visualization features using matplotlib to generate pie charts representing expense distribution, enhancing user understanding of spending habits.
            </Typography>

            <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
            >
                Implemented dynamic updating of expense categories and total balance in real-time, providing users with immediate feedback on their financial status and expenditure.
            </Typography>

            <Typography
            variant="h5"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 550,
                color: "black",
                margin: (1, 0),
                textAlign: "center",
            }}
            >
                Notes App
            </Typography>

            <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
            >
                Developed a versatile Notes App using Python's Tkinter library for GUI.
            </Typography>

            <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
            >
                Created a multi-window interface allowing users to enter, display, and categorize notes.
            </Typography>

            <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
            >
                Incorporated dynamic color-coding for notes, enhancing user experience and organization.
            </Typography>


            <Typography
            variant="h4"
            sx={{
                fontFamily: "montserrat",
                fontWeight: 600,
                margin: 1,
                color: "black",
                textAlign: "center",
                position: "relative",
                display: "inline-block",
                padding: 2
            }}
            >
                <span className="middle-out">Technical Skills</span>
            </Typography>

            <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
            >
                <span style={{ fontWeight: 600 }}>Languages:</span> Python, JavaScript, HTML, CSS
            </Typography>

            <Typography
            variant="h6"
            sx={{
                fontFamily: "playfair display",
                fontWeight: 300,
                margin: (1, 0),
                color: "black",
                textAlign: "center",
            }}
            >
                <span style={{ fontWeight: 600 }}>Professional Tools:</span> Github, Git, Visual Studio Code
            </Typography>

        </Box>

    );
}

export default Bio;