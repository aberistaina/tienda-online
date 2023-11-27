import { Box, List, ListItemIcon, ListItem, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";

export const NavDrawer = () => {
    return (
        <Box>
            <nav>
                <List>
                    <NavLink to="/">
                        <ListItem>
                            <ListItemIcon><HomeIcon/></ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItem>
                    </NavLink>


                    <NavLink to="/productos">
                        <ListItem>
                            <ListItemIcon><PersonIcon/></ListItemIcon>
                            <ListItemText>Productos</ListItemText>
                        </ListItem>
                    </NavLink>

                    <NavLink to="/login">
                        <ListItem>
                            <ListItemIcon><LogoutIcon/></ListItemIcon>
                            <ListItemText>Login</ListItemText>
                        </ListItem>
                    </NavLink>
                </List>
            </nav>
        </Box>
    );
};
