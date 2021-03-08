
import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import * as actionTypes from '../../../Store/Actions';
import ViewCategory from './ViewCategory';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));

const DeleteCategory = props => {
    const classes = useStyles();

    const deleteHandler = e => {
        console.log(props.specificCategory)
        props.onDeleteAction(props.specificCategory.id)
        props.history.push('/')
    }

    return (
        <React.Fragment>
            <ViewCategory />
            <div className={classes.root}>
                <Button variant="contained" color="secondry" onClick={deleteHandler}>
                    Click me if you sure
            </Button>
            </div>
        </React.Fragment>

    );
}

const mapStateToProps = state => {
    return {
        specificCategory: state.theChosenCategory
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteAction: (id) => dispatch({ type: actionTypes.DELETE_CATEGORY, id: id })
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCategory);

