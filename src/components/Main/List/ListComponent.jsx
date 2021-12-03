import { List, ListItem, ListItemAvatar, Avatar, ListItemText, IconButton } from '@mui/material';
import { Garage, Restaurant, Delete } from '@mui/icons-material';

const ListComponent = () => {
    return (
        <>
            <List sx={{ maxHeight: '150px', overflow: 'auto' }}>
                <ListItem 
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                            <Delete />
                        </IconButton>
                }>
                    <ListItemAvatar>
                    <Avatar>
                        <Garage />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Travel" secondary="&#x20B9;50" />
                </ListItem>
                <ListItem 
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                            <Delete />
                        </IconButton>
                }>
                    <ListItemAvatar>
                    <Avatar>
                        <Garage />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Travel" secondary="&#x20B9;30" />
                </ListItem>
                <ListItem 
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                            <Delete />
                        </IconButton>
                }>
                    <ListItemAvatar>
                    <Avatar>
                        <Restaurant />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Food" secondary="&#x20B9;150" />
                </ListItem>
            </List> 
        </>
    )
}

export default ListComponent;
