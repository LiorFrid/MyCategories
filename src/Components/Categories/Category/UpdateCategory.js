import React, { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as actionTypes from '../../../Store/Actions';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '20%',
            marginLeft: '40%',
            display: 'flex',
            flexDierction: 'column'
        },
    },
}));
const UpdateCategory = (props) => {
    const classes = useStyles();

    const [name, setName] = useState('');
    const UpdateHandler = e => {
        props.onUpdateCategory(name, props.theChosenCategory.id);
        props.history.push('/')
    }

    useEffect(() => {
        setName(props.theChosenCategory.name)
    }, [props.theChosenCategory.name])

    const changeNameHandler = e => {
        setName(e.target.value)
    }
    return (
        <div className={classes.root}>
            <TextField
                value={name}
                onChange={changeNameHandler}
                id="outlined-basic"
                label="Name"
                variant="outlined" />
            < Button
                variant="contained"
                onClick={UpdateHandler} >
                Update category
            </Button >
        </div>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateCategory: (name, id) => dispatch({ type: actionTypes.UPDATE_CATEGORY, name: name, id: id })
    }
}

const mapStateToProps = state => {
    return {
        theChosenCategory: state.theChosenCategory
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCategory);