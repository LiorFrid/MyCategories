import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CategoryCard from './Category/CategoryCard';
import Button from '@material-ui/core/Button';
import * as actionTypes from '../../Store/Actions';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(4),
        },
    },
}));

const Categories = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {props.categories.map((el, ind) => <CategoryCard category={el} numOfCat={ind + 1} key={el.id} />)}
            <Button variant="contained" onClick={props.onClearChoose}>Clear your choose</Button>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClearChoose: () => dispatch({ type: actionTypes.CLEAR_CHOOSE })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);