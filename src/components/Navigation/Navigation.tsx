import classes from './Navigation.module.css'

export const Navigation = () => {
    return (
        <div className={classes.Navigation}>
            <div>
                <div><a href=''>Profile</a></div>
                <div><a href=''>Messages</a></div>
                <div><a href=''>News</a></div>
                <div><a href=''>Music</a></div>
                <div><a href=''>Settings</a></div>
            </div>
        </div>
    )
}