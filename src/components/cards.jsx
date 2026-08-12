import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Tooltip } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import headshot from './headshot.jpeg';

const jobs = [
    { company: 'IBM', role: 'Sales Engineer Intern', date: 'May 2026 – Present', location: 'Chicago, IL', description: 'Automation | U.S. Horizon Midwest Market.' },
    { company: 'Archer Integrated Risk Management', role: 'Sales Engineer Intern', date: 'May 2025 – May 2026', location: 'Overland Park, KS', description: 'Delivered software demos, built PoCs, and responded to RFPs.' },
    { company: 'University Daily Kansan', role: 'Account Executive', date: 'Oct 2024 – Feb 2025', location: 'Lawrence, KS', description: 'Sold advertising space to local businesses.' },
    { company: 'Garmin', role: 'Product Support Specialist Intern', date: 'May 2024 – Aug 2024', location: 'Olathe, KS', description: 'Communicated technical solutions to customers.' },
];

const education = [
    {
        degree: 'BPS in Applied Data Analytics',
        date: 'Expected May 2027',
        school: 'University of Kansas',
        location: 'Lawrence, KS',
        description: 'Cumulative GPA: 3.68. Studying how data and technology drive business decisions.',
    },
];

const skills = [
    { name: 'Communication', level: 90 },
    { name: 'Sales Prospecting & Outreach', level: 85 },
    { name: 'Technical Aptitude', level: 70 },
    { name: 'Grit', level: 100 },
];

const highlights = [
    {
        tag: 'Sales Development',
        date: 'Summer 2026',
        title: 'Advanced a FinOps Sales Opportunity',
        description: 'Booked and led a client discovery call that moved a FinOps sales opportunity forward.',
    },
    {
        tag: 'Outreach',
        date: 'Summer 2026',
        title: 'Led 3 Outreach Campaigns',
        description: 'Planned and ran three outreach campaigns, reaching 75+ contacts and totalling 450+ touches.',
    },
    {
        tag: 'Internal Tools',
        date: 'Summer 2026',
        title: 'Built a 2H Dashboard',
        description: "Used IBM's internal AI tools to build a dashboard tracking the team's progress toward second-half sales goals.",
    },
];

const FONT = '"IBM Plex Sans", sans-serif';
const ACCENT = '#0f62fe'; // IBM Blue
const TEXT = '#161616';
const TEXT_MUTED = 'rgba(22,22,22,0.6)';
const BORDER = '#e0e0e0';
const DOT_SIZE = 40;
const LINE_COLOR = '#c6c6c6';

// Shared light section style — keeps content sections cohesive and IBM-clean
const section = {
    color: TEXT,
};

const ActionAreaCard = () => {
    const handleLinkedClick = () => window.open("https://www.linkedin.com/in/quinn-westrope/", "_blank");
    const handleEmailClick = () => { window.location.href = "mailto:westrope.quinn@gmail.com"; };
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
                    backgroundPosition: 'center 20%',
                    filter: 'brightness(65%)',
                }} />
                <Box sx={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 42%, rgba(0,0,0,0.55) 100%)',
                }} />
                <Box sx={{
                    position: 'absolute',
                    top: '34%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                    textAlign: 'center',
                    width: '90%',
                }}>
                    <Typography sx={{
                        fontFamily: FONT,
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
                        fontFamily: FONT,
                        mt: 2.5,
                        letterSpacing: '0.04em',
                        fontWeight: 300,
                    }}>
                        Sales Engineer Intern, IBM
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, mt: 1.5, justifyContent: 'center', isolation: 'isolate' }}>
                        <Tooltip title="Resume" arrow>
                            <Button className="icon" onClick={handleResumeClick} sx={{ color: 'white', minWidth: 0, transition: 'color 0.15s ease', '&:hover': { color: ACCENT, backgroundColor: 'transparent' } }}>
                                <PictureAsPdfIcon fontSize="large" />
                            </Button>
                        </Tooltip>
                        <Tooltip title="LinkedIn" arrow>
                            <Button className="icon" onClick={handleLinkedClick} sx={{ color: 'white', minWidth: 0, transition: 'color 0.15s ease', '&:hover': { color: ACCENT, backgroundColor: 'transparent' } }}>
                                <LinkedInIcon fontSize="large" />
                            </Button>
                        </Tooltip>
                        <Tooltip title="Email" arrow>
                            <Button className="icon" onClick={handleEmailClick} sx={{ color: 'white', minWidth: 0, transition: 'color 0.15s ease', '&:hover': { color: ACCENT, backgroundColor: 'transparent' } }}>
                                <EmailIcon fontSize="large" />
                            </Button>
                        </Tooltip>
                    </Box>
                </Box>
            </Box>

            {/* ── ABOUT ── */}
            <Box sx={{
                ...section,
                backgroundColor: '#ffffff',
                px: { xs: 5, sm: 6, md: '10%' },
                py: { xs: 10, md: 14 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxSizing: 'border-box',
            }}>
                <Typography sx={{
                    fontFamily: FONT,
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
                    fontFamily: FONT,
                    fontWeight: 700,
                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                    color: TEXT,
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
                        fontFamily: FONT,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        color: TEXT_MUTED,
                        lineHeight: 2,
                        textAlign: { xs: 'center', sm: 'left' },
                    }}>
                        I'm a senior at the University of Kansas studying applied data analytics, with a passion for
                        bridging the gap between technology and business. I'm currently a Sales Engineer Intern at
                        IBM, focusing on our Automation portfolio. Outside of work, you'll usually find me golfing,
                        working out, or watching a movie.
                    </Typography>
                </Box>

                {/* Profile / Skills */}
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                    gap: { xs: 6, sm: 9 },
                    maxWidth: 780,
                    width: '100%',
                    mt: { xs: 8, sm: 10 },
                    pt: { xs: 8, sm: 10 },
                    mb: { xs: 2, sm: 4 },
                    borderTop: `1px solid ${BORDER}`,
                }}>
                    <Box>
                        <Typography sx={{ fontFamily: FONT, fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', color: TEXT, textTransform: 'uppercase', mb: 2.5 }}>
                            Profile
                        </Typography>
                        <Typography sx={{ fontFamily: FONT, fontSize: '0.95rem', color: TEXT_MUTED, lineHeight: 1.8, mb: 4 }}>
                            Building a career in tech sales. Always open to connecting.
                        </Typography>
                        <Typography sx={{ fontFamily: FONT, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', color: TEXT_MUTED, textTransform: 'uppercase' }}>
                            Full Name:
                        </Typography>
                        <Typography sx={{ fontFamily: FONT, fontSize: '0.95rem', fontWeight: 600, color: TEXT, mb: 3 }}>
                            Quinn Westrope
                        </Typography>
                        <Typography sx={{ fontFamily: FONT, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', color: TEXT_MUTED, textTransform: 'uppercase' }}>
                            Email:
                        </Typography>
                        <Typography sx={{ fontFamily: FONT, fontSize: '0.95rem', fontWeight: 600, color: TEXT }}>
                            westrope.quinn@gmail.com
                        </Typography>
                    </Box>

                    <Box>
                        <Typography sx={{ fontFamily: FONT, fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', color: TEXT, textTransform: 'uppercase', mb: 2.5 }}>
                            Skills
                        </Typography>
                        {skills.map((skill) => (
                            <Box key={skill.name} sx={{ mb: 3.5 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography sx={{ fontFamily: FONT, fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', color: TEXT, textTransform: 'uppercase' }}>
                                        {skill.name}
                                    </Typography>
                                    <Typography sx={{ fontFamily: FONT, fontSize: '0.75rem', color: TEXT_MUTED }}>
                                        {skill.level}%
                                    </Typography>
                                </Box>
                                <Box sx={{ width: '100%', height: 4, borderRadius: 2, backgroundColor: BORDER, overflow: 'hidden' }}>
                                    <Box sx={{ width: `${skill.level}%`, height: '100%', backgroundColor: ACCENT }} />
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* ── EXPERIENCE & EDUCATION ── */}
            <Box sx={{
                ...section,
                backgroundColor: '#f4f4f4',
                px: { xs: 5, sm: 6, md: '10%' },
                py: { xs: 10, md: 14 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxSizing: 'border-box',
            }}>
                <Typography sx={{
                    fontFamily: FONT,
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '2.75rem' },
                    color: TEXT,
                    mb: 1.5,
                    textAlign: 'center',
                }}>
                    Background
                </Typography>
                <Typography sx={{
                    fontFamily: FONT,
                    fontSize: { xs: '1rem', md: '1.15rem' },
                    color: TEXT_MUTED,
                    mb: { xs: 7, md: 9 },
                    textAlign: 'center',
                }}>
                    Here are my work experiences and education.
                </Typography>

                <Typography sx={{
                    fontFamily: FONT,
                    fontWeight: 700,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    color: TEXT,
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
                                    <Typography sx={{ fontFamily: FONT, fontWeight: 700, fontSize: '1rem', color: TEXT, textAlign: 'right' }}>
                                        {job.role}
                                    </Typography>
                                    <Typography sx={{ fontFamily: FONT, fontSize: '0.85rem', color: TEXT_MUTED, mt: 0.5, textAlign: 'right' }}>
                                        {job.date}
                                    </Typography>
                                </Box>

                                {/* Center: dot + connecting line */}
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: DOT_SIZE }}>
                                    <Box sx={{
                                        width: DOT_SIZE, height: DOT_SIZE,
                                        borderRadius: '50%',
                                        backgroundColor: '#ffffff',
                                        border: `1px solid ${BORDER}`,
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
                                        <Typography sx={{ fontFamily: FONT, fontWeight: 700, fontSize: '1rem', color: TEXT }}>
                                            {job.role}
                                        </Typography>
                                        <Typography sx={{ fontFamily: FONT, fontSize: '0.85rem', color: TEXT_MUTED, mt: 0.5 }}>
                                            {job.date}
                                        </Typography>
                                        <Box sx={{ width: 36, height: '1px', backgroundColor: LINE_COLOR, my: 1.5 }} />
                                    </Box>
                                    <Typography sx={{ fontFamily: FONT, fontWeight: 700, fontSize: '1rem', color: ACCENT }}>
                                        {job.company}
                                    </Typography>
                                    <Typography sx={{ fontFamily: FONT, fontSize: '0.85rem', color: TEXT_MUTED, mt: 0.4 }}>
                                        {job.location}
                                    </Typography>
                                    <Box sx={{ width: 32, height: '1px', backgroundColor: LINE_COLOR, my: 1.5 }} />
                                    <Typography sx={{ fontFamily: FONT, fontSize: '0.9rem', color: TEXT_MUTED, lineHeight: 1.7 }}>
                                        {job.description}
                                    </Typography>
                                </Box>

                            </Box>
                        );
                    })}
                </Box>

                <Typography sx={{
                    fontFamily: FONT,
                    fontWeight: 700,
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    color: TEXT,
                    mt: { xs: 9, md: 11 },
                    mb: 6,
                    textAlign: 'center',
                }}>
                    Education
                </Typography>

                <Box sx={{ width: '100%', maxWidth: 860 }}>
                    {education.map((edu, i) => {
                        const isLast = i === education.length - 1;
                        return (
                            <Box key={edu.school} sx={{ display: 'flex', alignItems: 'stretch' }}>

                                {/* Left: degree + date (desktop only) */}
                                <Box sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    flex: 1,
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    pr: 3,
                                    pt: '10px',
                                    pb: isLast ? 0 : '48px',
                                }}>
                                    <Typography sx={{ fontFamily: FONT, fontWeight: 700, fontSize: '1rem', color: TEXT, textAlign: 'right' }}>
                                        {edu.degree}
                                    </Typography>
                                    <Typography sx={{ fontFamily: FONT, fontSize: '0.85rem', color: TEXT_MUTED, mt: 0.5, textAlign: 'right' }}>
                                        {edu.date}
                                    </Typography>
                                </Box>

                                {/* Center: dot + connecting line */}
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: DOT_SIZE }}>
                                    <Box sx={{
                                        width: DOT_SIZE, height: DOT_SIZE,
                                        borderRadius: '50%',
                                        backgroundColor: '#ffffff',
                                        border: `1px solid ${BORDER}`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0, zIndex: 1,
                                    }}>
                                        <SchoolIcon sx={{ color: ACCENT, fontSize: 18 }} />
                                    </Box>
                                    {!isLast && (
                                        <Box sx={{ width: '1px', flexGrow: 1, minHeight: '48px', backgroundColor: LINE_COLOR, mt: 0 }} />
                                    )}
                                </Box>

                                {/* Right: school + location */}
                                <Box sx={{
                                    flex: 1,
                                    pl: 3,
                                    pt: '10px',
                                    pb: isLast ? 0 : '48px',
                                }}>
                                    {/* Mobile only: degree + date */}
                                    <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 1.5 }}>
                                        <Typography sx={{ fontFamily: FONT, fontWeight: 700, fontSize: '1rem', color: TEXT }}>
                                            {edu.degree}
                                        </Typography>
                                        <Typography sx={{ fontFamily: FONT, fontSize: '0.85rem', color: TEXT_MUTED, mt: 0.5 }}>
                                            {edu.date}
                                        </Typography>
                                        <Box sx={{ width: 36, height: '1px', backgroundColor: LINE_COLOR, my: 1.5 }} />
                                    </Box>
                                    <Typography sx={{ fontFamily: FONT, fontWeight: 700, fontSize: '1rem', color: ACCENT }}>
                                        {edu.school}
                                    </Typography>
                                    <Typography sx={{ fontFamily: FONT, fontSize: '0.85rem', color: TEXT_MUTED, mt: 0.4 }}>
                                        {edu.location}
                                    </Typography>
                                    <Box sx={{ width: 32, height: '1px', backgroundColor: LINE_COLOR, my: 1.5 }} />
                                    <Typography sx={{ fontFamily: FONT, fontSize: '0.9rem', color: TEXT_MUTED, lineHeight: 1.7 }}>
                                        {edu.description}
                                    </Typography>
                                </Box>

                            </Box>
                        );
                    })}
                </Box>
            </Box>

            {/* ── HIGHLIGHTS ── */}
            <Box sx={{
                ...section,
                backgroundColor: '#ffffff',
                px: { xs: 5, sm: 6, md: '10%' },
                py: { xs: 10, md: 14 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxSizing: 'border-box',
            }}>
                <Typography sx={{
                    fontFamily: FONT,
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    color: ACCENT,
                    textTransform: 'uppercase',
                    mb: 1.5,
                }}>
                    Highlights
                </Typography>
                <Typography sx={{
                    fontFamily: FONT,
                    fontWeight: 700,
                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                    color: TEXT,
                    mb: 6,
                    textAlign: 'center',
                }}>
                    Summer Highlights
                </Typography>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                    gap: 4,
                    maxWidth: 1040,
                    width: '100%',
                }}>
                    {highlights.map((item) => (
                        <Box key={item.title} sx={{
                            p: 4,
                            borderRadius: 2,
                            border: `1px solid ${BORDER}`,
                            borderTop: `3px solid ${ACCENT}`,
                            backgroundColor: '#ffffff',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1.5,
                        }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography sx={{ fontFamily: FONT, fontSize: '0.75rem', fontWeight: 600, color: ACCENT, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    {item.tag}
                                </Typography>
                                <Typography sx={{ fontFamily: FONT, fontSize: '0.75rem', color: TEXT_MUTED }}>
                                    {item.date}
                                </Typography>
                            </Box>
                            <Typography sx={{ fontFamily: FONT, fontWeight: 700, fontSize: '1.1rem', color: TEXT }}>
                                {item.title}
                            </Typography>
                            <Typography sx={{ fontFamily: FONT, fontSize: '0.9rem', color: TEXT_MUTED, flexGrow: 1 }}>
                                {item.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* ── CONTACT ── */}
            <Box sx={{
                ...section,
                backgroundColor: '#f4f4f4',
                minHeight: '100vh',
                position: 'relative',
                px: { xs: 5, sm: 6, md: '10%' },
                py: { xs: 10, md: 14 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
            }}>
                <Typography sx={{
                    fontFamily: FONT,
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    color: ACCENT,
                    textTransform: 'uppercase',
                    mb: 1.5,
                }}>
                    Contact
                </Typography>
                <Typography sx={{
                    fontFamily: FONT,
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '2.75rem' },
                    color: TEXT,
                    mb: 7,
                    textAlign: 'center',
                }}>
                    Let's Connect
                </Typography>

                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: { xs: 6, sm: 8, md: 11 },
                    mb: 7,
                    width: '100%',
                }}>
                    {[
                        { icon: <LocalPhoneIcon sx={{ fontSize: 42, color: ACCENT }} />, label: 'Call', sub: '(913) 260-1614', action: handlePhoneClick },
                        { icon: <EmailIcon sx={{ fontSize: 42, color: ACCENT }} />, label: 'Email', sub: 'westrope.quinn@gmail.com', action: handleEmailClick },
                        { icon: <LinkedInIcon sx={{ fontSize: 42, color: ACCENT }} />, label: 'LinkedIn', sub: 'Quinn Westrope', action: handleLinkedClick },
                    ].map(({ icon, label, sub, action }) => (
                        <Box key={label} onClick={action} sx={{
                            cursor: 'pointer', textAlign: 'center',
                            '&:hover': { opacity: 0.7 }, transition: 'opacity 0.2s',
                            py: { xs: 1, sm: 0 },
                        }}>
                            {icon}
                            <Typography sx={{ color: TEXT, fontFamily: FONT, fontWeight: 600, fontSize: '1.05rem', mt: 1.25 }}>{label}</Typography>
                            <Typography sx={{ color: TEXT_MUTED, fontFamily: FONT, fontSize: '0.95rem', mt: 0.25 }}>{sub}</Typography>
                        </Box>
                    ))}
                </Box>

                <Button
                    variant="outlined"
                    startIcon={<PictureAsPdfIcon />}
                    onClick={handleResumeClick}
                    sx={{
                        color: TEXT,
                        borderColor: BORDER,
                        borderWidth: 1.5,
                        borderRadius: 3,
                        px: 3.5, py: 1.1,
                        textTransform: 'none',
                        fontFamily: FONT,
                        fontSize: '0.95rem',
                        '&:hover': { borderColor: ACCENT, color: ACCENT, backgroundColor: 'transparent', borderWidth: 1.5 },
                    }}
                >
                    View Resume
                </Button>

                <Typography sx={{
                    position: 'absolute',
                    bottom: { xs: 24, md: 32 },
                    left: 0,
                    right: 0,
                    color: TEXT_MUTED,
                    fontSize: '0.75rem',
                    fontFamily: FONT,
                    textAlign: 'center',
                }}>
                    © 2026 Quinn Westrope
                </Typography>
            </Box>

        </Box>
    );
};

export default ActionAreaCard;
