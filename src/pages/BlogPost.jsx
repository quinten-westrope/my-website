import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import posts from '../data/posts';

const ACCENT = '#0f62fe'; // IBM Blue
const FONT = '"IBM Plex Sans", sans-serif';
const TEXT = '#161616';
const TEXT_MUTED = 'rgba(22,22,22,0.6)';

const BlogPost = () => {
    const { slug } = useParams();
    const post = posts.find((p) => p.slug === slug);

    return (
        <Box sx={{
            minHeight: '100vh',
            backgroundColor: '#ffffff',
            color: TEXT,
            px: { xs: 5, sm: 6, md: '10%' },
            pt: { xs: 16, md: 20 },
            pb: 10,
            boxSizing: 'border-box',
        }}>
            <Box sx={{ maxWidth: 680, mx: 'auto' }}>
                <Typography
                    component={Link}
                    to="/journal"
                    sx={{
                        display: 'inline-block',
                        fontFamily: FONT,
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: ACCENT,
                        textDecoration: 'none',
                        mb: 4,
                        '&:hover': { textDecoration: 'underline' },
                    }}
                >
                    &larr; Back to Journal
                </Typography>

                {post ? (
                    <>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                            <Typography sx={{ fontFamily: FONT, fontSize: '0.8rem', fontWeight: 600, color: ACCENT, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                {post.tag}
                            </Typography>
                            <Typography sx={{ fontFamily: FONT, fontSize: '0.8rem', color: TEXT_MUTED }}>
                                {post.date}
                            </Typography>
                        </Box>
                        <Typography sx={{ fontFamily: FONT, fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' }, mb: 4 }}>
                            {post.title}
                        </Typography>
                        {post.body.map((paragraph, i) => (
                            <Typography key={i} sx={{ fontFamily: FONT, fontSize: '1rem', color: TEXT_MUTED, lineHeight: 2, mb: 3 }}>
                                {paragraph}
                            </Typography>
                        ))}
                    </>
                ) : (
                    <Typography sx={{ fontFamily: FONT, color: TEXT_MUTED }}>
                        Post not found.
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default BlogPost;
