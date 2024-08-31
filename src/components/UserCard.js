import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Link from '@mui/material/Link';
import UserDetails from './UserDetails';
import Stack from '@mui/material/Stack';
import { Details } from '@mui/icons-material';

function UserCard({ user }) {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Stack direction={{ xs: 'column', sm: 'row' }} width={'100%'} justifyContent={'space-between'} alignItems={{ xs: 'normal', sm: 'end' }} spacing={2}>
                        <Stack direction="row" spacing={2}>
                            <Avatar
                                alt={`${user.login}'s avatar`}
                                src={user.avatar_url}
                                sx={{ width: 56, height: 56 }}
                            />
                            <Stack spacing={-0.5}>
                                <Typography variant="h6">{user.login}</Typography>
                                <Stack direction="row" spacing={0.5}>
                                    <Typography>Profile URL:</Typography>
                                    <Link href={user.html_url} target="_blank" >{user.html_url}</Link>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Button variant="outlined" color="primary" onClick={toggleDetails}>
                            {showDetails ? 'Hide Details' : 'Details'}
                        </Button>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    {showDetails && <UserDetails username={user.login} />}
                </AccordionDetails>
            </Accordion>
        </>



    );
}

export default UserCard;
