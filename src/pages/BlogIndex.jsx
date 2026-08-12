import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import posts from '../data/posts';

const ACCENT = '#0f62fe'; // IBM Blue
const FONT = '"IBM Plex Sans", sans-serif';
const TEXT = '#161616';
const TEXT_MUTED = 'rgba(22,22,22,0.6)';
const BORDER = '#e0e0e0';

const BlogIndex = () => {
    return (
        <Box sx={{
            backgroundColor: '#ffffff',
            color: TEXT,
            px: { xs: 5, sm: 6, md: '10%' },
            pt: { xs: 14, md: 16 },
            pb: 14,
            boxSizing: 'border-box',
        }}>
            <Typography sx={{
                fontFamily: FONT,
                fontWeight: 700,
                fontSize: { xs: '1.3rem', md: '1.6rem' },
                letterSpacing: '0.06em',
                color: ACCENT,
                textTransform: 'uppercase',
                mb: 7,
                textAlign: 'center',
            }}>
                Journal
            </Typography>

            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 4,
            }}>
                {posts.map((post) => (
                    <Box
                        key={post.slug}
                        component={Link}
                        to={`/journal/${post.slug}`}
                        sx={{
                            display: 'block',
                            width: { xs: '100%', sm: 560 },
                            textDecoration: 'none',
                            color: 'inherit',
                            p: 5,
                            borderRadius: 2,
                            border: `1px solid ${BORDER}`,
                            backgroundColor: '#ffffff',
                            borderTop: `3px solid ${ACCENT}`,
                            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                            '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' },
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 3, mb: 1.5 }}>
                            <Typography sx={{ fontFamily: FONT, fontSize: '0.75rem', fontWeight: 600, color: ACCENT, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                {post.tag}
                            </Typography>
                            <Typography sx={{ fontFamily: FONT, fontSize: '0.75rem', color: TEXT_MUTED, whiteSpace: 'nowrap' }}>
                                {post.date}
                            </Typography>
                        </Box>
                        <Typography sx={{ fontFamily: FONT, fontWeight: 700, fontSize: '1.15rem', mb: 1 }}>
                            {post.title}
                        </Typography>
                        <Typography sx={{ fontFamily: FONT, fontSize: '0.9rem', color: TEXT }}>
                            {post.excerpt}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default BlogIndex;
