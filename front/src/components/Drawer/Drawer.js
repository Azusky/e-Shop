import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Drawer } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { List } from '@material-ui/core'
import { Divider } from '@material-ui/core'
import { ListItem } from '@material-ui/core'
import { ListItemIcon } from '@material-ui/core'
import { ListItemText } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'


const DrawerShop = ()=>{

    const [state,setState] = React.useState(false)
    const toggleDrawer = (open)=> (event) => {
        setState(open)
    }

    const list = ()=>(
        <div onClick={toggleDrawer(false)}>
            <List>
                <ListItem button>It works, hell hell</ListItem>
            </List>
        </div>

    )
    return (
        <div>
            <Button onClick={toggleDrawer(true)}>Open From Top</Button>
            <Drawer
                anchor={'top'}
                open={state}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </div>
        );

}
export{DrawerShop}
