import React from 'react'
import { Button } from '@material-ui/core'
import { Menu } from '@material-ui/core'
import { MenuItem } from '@material-ui/core'


const MenuShop = ()=>{

    const [anchorEl, setAnchorEl] = React.useState(null)
    const handleClose = ()=>{
        setAnchorEl(null)
    }

    const openMenu = (event)=>{
        setAnchorEl(event.currentTarget)
    }
    return (
        <div>
        <Button
            variant="contained"
            onClick={openMenu}
        >Open Menu</Button>
            <Menu
            id='lame-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Subcribe</MenuItem>
                <MenuItem onClick={handleClose}>Like</MenuItem>
                <MenuItem onClick={handleClose}>Comment</MenuItem>
            </Menu>
        </div>
    )
}

export { MenuShop}
