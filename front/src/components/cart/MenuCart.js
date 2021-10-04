import React from 'react'
import { Button } from '@material-ui/core'
import { Menu } from '@material-ui/core'
import { MenuItem } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';


const MenuCart = ()=>{
    const [anchorEl, setAnchorEl] = React.useState(null)
    const handleClose = ()=>{
        setAnchorEl(null)
    }
    const openMenu = (event)=>{
        setAnchorEl(event.currentTarget)
        // console.log('loli')
    }
    return (
        <>
        <IconButton aria-label="settings"
            // variant="contained"
            onClick={openMenu}>
            <MoreVertIcon />
        </IconButton>

            <Menu
            // id='cart-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Subcribe</MenuItem>
                <MenuItem onClick={handleClose}>Like</MenuItem>
                <MenuItem onClick={handleClose}>Comment</MenuItem>
            </Menu>
        </>
    )
}

export { MenuCart}
