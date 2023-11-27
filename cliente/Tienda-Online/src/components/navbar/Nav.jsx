import {
    Button,
    Drawer,
    AppBar,
    Toolbar,
    IconButton,
    Box,
} from "@mui/material"
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import styled from "@emotion/styled";
import { NavDrawer } from "./NavDrawer";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import { useState, useEffect } from "react";

export const Menu = () => {

    const [openDrawer, setOpenDrawer] = useState(false);
    const [login, setLogin] = useState(false);
    const [admin, setAdmin] = useState(false);

    const Img = styled("img")({
        width: 150,
    });

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: "#2C3E50",
                }}
            >
                <Toolbar
                    sx={{
                        display: { sm: "flex" },
                        justifyContent: { md: "space-around" },
                    }}
                >
                    <Box sx={{ flexGrow: { xs: 1, md: 0 } }}>
                        <NavLink to="/">
                        <Img
                                src="https://www.dafont.com/forum/attach/orig/4/2/42303.png"
                                alt="logo Mk"
                            />
                        </NavLink>
                    </Box>

                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setOpenDrawer(true)}
                        sx={{ display: { xs: "flex", sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box
                        sx={{
                            display: { xs: "none", sm: "block" },
                            paddingLeft: { md: 50 },
                        }}
                    >
                        <Button
                            color="inherit"
                            component={NavLink}
                            to={"/"}
                            startIcon={<HomeIcon />}
                            sx={{
                                fontSize: 16,
                                paddingLeft: 3,
                            }}
                        >
                            Home
                        </Button>

                        <Button
                            color="inherit"
                            component={NavLink}
                            to={"/personajes"}
                            startIcon={<SportsMartialArtsIcon />}
                            sx={{
                                fontSize: 16,
                                paddingLeft: 3,
                                display: admin ? "inline-flex" : "none",
                            }}
                        >
                            Personajes
                        </Button>

                        <Button
                            color="inherit"
                            component={NavLink}
                            to={"/login"}
                            startIcon={<PersonIcon />}
                            sx={{
                                fontSize: 16,
                                paddingLeft: 3,
                                display: login ? "none" : "inline-flex",
                            }}
                        >
                            Login
                        </Button>

                        <Button
                            color="inherit"
                            component={NavLink}
                            startIcon={<LogoutIcon />}
                            sx={{
                                fontSize: 16,
                                paddingLeft: 3,
                                display: login ? "inline-flex" : "none",
                            }}
                        >
                            LogOut
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                open={openDrawer}
                anchor="right"
                onClose={() => setOpenDrawer(false)}
                sx={{ display: { xs: "block", sm: "none" } }}
            >
                <NavDrawer />
            </Drawer>
        </>
    );
};
