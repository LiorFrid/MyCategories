import React from 'react';
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
const NewCategory = (props) => {
    const classes = useStyles();

    const [name, setName] = useState('');
    const onSubmit = e => {
        e.preventDefault();
        props.onAddCategory(name);
        setName('')

    }

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
                onClick={onSubmit} > Add category
            </Button >
        </div>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        onAddCategory: (name) => dispatch({ type: actionTypes.ADD_NEW_CATEGORY, name: name })
    }
}

export default connect(null, mapDispatchToProps)(NewCategory);