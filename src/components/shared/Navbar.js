"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import { IconButton, Stack } from '@mui/material';

//icon
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';
import Header from './Header';


const navItems = [
    {
        route: "Home",
        pathName: '/'
    },
    {
        route: "Pages",
        pathName: '/pages'
    },
    {
        route: "Category",
        pathName: '/category'
    },
    {
        route: "News",
        pathName: '/news'
    },
    {
        route: "About",
        pathName: '/about'
    },
    {
        route: "Contact",
        pathName: '/contact'
    }

]

function Navbar() {


    return (
        <>
            <Header></Header>
            <AppBar position="static" className='bg-black' /* sx={{background:'black'}} */>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Image src={logo} height={100} width={100} alt='image' />
                        <Box className="w-full text-center">
                            {
                                navItems.map(item => (
                                    <Link key={item} href={item.pathName}>
                                        <Button className='text-white'>{item.route}</Button>
                                    </Link>
                                ))
                            }
                        </Box>
                        <Box>
                            <Stack direction="row" sx={{
                                "& svg": {
                                    color: "white"
                                }
                            }}>
                                <IconButton>
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton>
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton>
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton>
                                    <FacebookIcon />
                                </IconButton>
                            </Stack>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}
export default Navbar;