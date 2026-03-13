import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WorkIcon from '@mui/icons-material/Work';
import headshot from './headshot.jpeg';

const jobs = [
    { company: 'IBM', role: 'Sales Engineer Intern', date: 'Incoming Summer 2026', location: 'Chicago, IL' },
    { company: 'Archer Integrated Risk Management', role: 'Sales Engineer Intern', date: 'May 2025 – Present', location: 'Overland Park, KS' },
    { company: 'University Daily Kansan', role: 'Account Executive', date: 'Oct 2024 – Feb 2025', location: 'Lawrence, KS' },
    { company: 'Garmin', role: 'Product Support Specialist Intern', date: 'May 2024 – Aug 2024', location: 'Olathe, KS' },
];

// Teal pulled from the Chicago skyline city lights / water reflections
const ACCENT = '#3abfcf';
const DOT_SIZE = 40;
const LINE_COLOR = '#444';

// Shared dark section style — keeps all sections cohesive with the hero
const darkSection = {
    backgroundColor: '#111',
    color: 'white',
};

const ActionAreaCard = () => {
    const handleLinkedClick = () => window.open("https://www.linkedin.com/in/quinn-westrope/", "_blank");
    const handleEmailClick = () => { window.location.href = "mailto:qwestrope1313@gmail.com"; };
    const handleResumeClick = () => window.open(`${process.env.PUBLIC_URL}/resume.pdf`, "_blank");
    const handlePhoneClick = () => { window.location.href = "tel:9132601614"; };

    return (
        <Box sx={{ width: '100%' }}>

            {/* ── HERO ── */}
            <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
                <Box sx={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `url(${process.env.PUBLIC_URL}/chicago.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(45%)',
                }} />
                <Box sx={{
                    position: 'absolute',
                    top: '38%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                    textAlign: 'center',
                    width: '90%',
                }}>
                    <Typography sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 750,
                        color: 'white',
                        fontSize: { xs: '2.8rem', sm: '4rem', md: '5.5rem' },
                        lineHeight: 1.05,
                        textShadow: '2px 4px 12px rgba(0,0,0,0.6)',
                        whiteSpace: { sm: 'nowrap' },
                    }}>
                        Quinn Westrope
                    </Typography>
                    <Typography sx={{
                        color: 'rgba(255,255,255,0.72)',
                        fontSize: { xs: '0.95rem', md: '1.15rem' },
                        fontFamily: 'Inter, sans-serif',
                        mt: 2.5,
                        letterSpacing: '0.04em',
                        fontWeight: 300,
                    }}>
                        Sales Engineer
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, mt: 1.5, justifyContent: 'center' }}>
                        <Button className="icon" onClick={handleResumeClick} sx={{ color: 'white', minWidth: 0 }}>
                            <PictureAsPdfIcon fontSize="large" />
                        </Button>
                        <Button className="icon" onClick={handleLinkedClick} sx={{ color: 'white', minWidth: 0 }}>
                            <LinkedInIcon fontSize="large" />
                        </Button>
                        <Button className="icon" onClick={handleEmailClick} sx={{ color: 'white', minWidth: 0 }}>
                            <EmailIcon fontSize="large" />
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* ── ABOUT ── */}
            <Box sx={{
                ...darkSection,
                backgroundColor: '#181818',
                minHeight: '100vh',
                px: { xs: 5, sm: 6, md: '10%' },
                py: { xs: 8, md: 0 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
            }}>
                <Typography sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    color: ACCENT,
                    textTransform: 'uppercase',
                    mb: 1.5,
                }}>
                    About
                </Typography>
                <Typography sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                    color: 'white',
                    mb: 5,
                    textAlign: 'center',
                }}>
                    Let me introduce myself.
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'center', sm: 'flex-start' },
                    gap: { xs: 4, sm: 5 },
                    maxWidth: 780,
                    width: '100%',
                }}>
                    <Box sx={{
                        width: { xs: 150, sm: 170 },
                        height: { xs: 150, sm: 170 },
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: `1.5px solid ${ACCENT}`,
                        flexShrink: 0,
                    }}>
                        <Box
                            component="img"
                            src={headshot}
                            alt="Quinn Westrope"
                            sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center -15px' }}
                        />
                    </Box>
                    <Typography sx={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        color: 'rgba(255,255,255,0.65)',
                        lineHeight: 2,
                        textAlign: { xs: 'center', sm: 'left' },
                    }}>
                        I'm a junior at the University of Kansas studying Computer Science, with a passion for
                        bridging the gap between technology and business. I'm heading into tech sales and have
                        experience as a Sales Engineer working directly with clients to build solutions and drive
                        deals forward. Outside of work, you'll find me on the golf course, playing basketball,
                        or planning my next trip.
                    </Typography>
                </Box>
            </Box>

            {/* ── EXPERIENCE ── */}
            <Box sx={{
                ...darkSection,
                backgroundColor: '#202020',
                minHeight: '100vh',
                px: { xs: 5, sm: 6, md: '10%' },
                py: { xs: 8, md: 0 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
            }}>
                <Typography sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                    color: 'white',
                    mb: 6,
                    textAlign: 'center',
                }}>
                    Work Experience
                </Typography>

                <Box sx={{ width: '100%', maxWidth: 860 }}>
                    {jobs.map((job, i) => {
                        const isLast = i === jobs.length - 1;
                        return (
                            <Box key={job.company} sx={{ display: 'flex', alignItems: 'stretch', mb: isLast ? 0 : 0 }}>

                                {/* Left: role + date (desktop only) */}
                                <Box sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    flex: 1,
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    pr: 3,
                                    pt: '10px',
                                    pb: isLast ? 0 : '48px',
                                }}>
                                    <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'rgba(255,255,255,0.88)', textAlign: 'right' }}>
                                        {job.role}
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', mt: 0.5, textAlign: 'right' }}>
                                        {job.date}
                                    </Typography>
                                </Box>

                                {/* Center: dot + connecting line */}
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: DOT_SIZE }}>
                                    <Box sx={{
                                        width: DOT_SIZE, height: DOT_SIZE,
                                        borderRadius: '50%',
                                        backgroundColor: '#1e1e1e',
                                        border: `1px solid #555`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0, zIndex: 1,
                                    }}>
                                        <WorkIcon sx={{ color: ACCENT, fontSize: 18 }} />
                                    </Box>
                                    {!isLast && (
                                        <Box sx={{ width: '1px', flexGrow: 1, minHeight: '48px', backgroundColor: LINE_COLOR, mt: 0 }} />
                                    )}
                                </Box>

                                {/* Right: company + location */}
                                <Box sx={{
                                    flex: 1,
                                    pl: 3,
                                    pt: '10px',
                                    pb: isLast ? 0 : '48px',
                                }}>
                                    {/* Mobile only: role + date */}
                                    <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 1.5 }}>
                                        <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'rgba(255,255,255,0.88)' }}>
                                            {job.role}
                                        </Typography>
                                        <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', mt: 0.5 }}>
                                            {job.date}
                                        </Typography>
                                        <Box sx={{ width: 36, height: '1px', backgroundColor: LINE_COLOR, my: 1.5 }} />
                                    </Box>
                                    <Typography sx={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1rem', color: ACCENT }}>
                                        {job.company}
                                    </Typography>
                                    <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', mt: 0.4 }}>
                                        {job.location}
                                    </Typography>
                                </Box>

                            </Box>
                        );
                    })}
                </Box>
            </Box>

            {/* ── CONTACT ── */}
            <Box sx={{
                ...darkSection,
                backgroundColor: '#1c1c1c',
                minHeight: '100vh',
                px: { xs: 5, sm: 6, md: '10%' },
                py: { xs: 8, md: 0 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
            }}>
                <Typography sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    color: ACCENT,
                    textTransform: 'uppercase',
                    mb: 1.5,
                }}>
                    Contact
                </Typography>
                <Typography sx={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 700,
                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                    color: 'white',
                    mb: 6,
                    textAlign: 'center',
                }}>
                    Let's Connect
                </Typography>

                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: { xs: 5, sm: 6, md: 10, lg: 14 },
                    mb: 7,
                    width: '100%',
                }}>
                    {[
                        { icon: <LocalPhoneIcon sx={{ fontSize: 36, color: ACCENT }} />, label: 'Call', sub: '(913) 260-1614', action: handlePhoneClick },
                        { icon: <EmailIcon sx={{ fontSize: 36, color: ACCENT }} />, label: 'Email', sub: 'qwestrope1313@gmail.com', action: handleEmailClick },
                        { icon: <LinkedInIcon sx={{ fontSize: 36, color: ACCENT }} />, label: 'LinkedIn', sub: 'Quinn Westrope', action: handleLinkedClick },
                    ].map(({ icon, label, sub, action }) => (
                        <Box key={label} onClick={action} sx={{
                            cursor: 'pointer', textAlign: 'center',
                            '&:hover': { opacity: 0.7 }, transition: 'opacity 0.2s',
                            py: { xs: 1, sm: 0 },
                        }}>
                            {icon}
                            <Typography sx={{ color: 'white', fontFamily: 'Inter, sans-serif', fontWeight: 600, mt: 1 }}>{label}</Typography>
                            <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', mt: 0.25 }}>{sub}</Typography>
                        </Box>
                    ))}
                </Box>

                <Button
                    variant="outlined"
                    startIcon={<PictureAsPdfIcon />}
                    onClick={handleResumeClick}
                    sx={{
                        color: 'white',
                        borderColor: 'rgba(255,255,255,0.3)',
                        borderWidth: 1.5,
                        borderRadius: 3,
                        px: 3.5, py: 1.1,
                        textTransform: 'none',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.95rem',
                        '&:hover': { borderColor: ACCENT, color: ACCENT, backgroundColor: 'transparent', borderWidth: 1.5 },
                    }}
                >
                    View Resume
                </Button>

                <Typography sx={{
                    color: 'rgba(255,255,255,0.2)',
                    fontSize: '0.75rem',
                    fontFamily: 'Inter, sans-serif',
                    mt: 10,
                    textAlign: 'center',
                }}>
                    © 2025 Quinn Westrope
                </Typography>
            </Box>

        </Box>
    );
};

export default ActionAreaCard;
