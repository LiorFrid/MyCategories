import React from 'react'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({

    root: {
        backgroundColor: '#D3D3D3',
        margin: theme.spacing(1),
        width: '50%',
        marginLeft: '25%',
        height: '100px'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));


const ViewCategory = props => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {"The Chosen Category "}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {"Name: " + props.specificCategory.name}
                    </Typography>
                </CardContent>
            </Card>
            <Link style={{ color:'black' }} to="/">Back to List</Link>
        </React.Fragment>

    )
}

const mapStateToProps = state => {
    return {
        specificCategory: state.theChosenCategory
    }
}

export default connect(mapStateToProps)(ViewCategory);