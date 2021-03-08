import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import * as actionTypes from '../../../Store/Actions';


const useStyles = makeStyles({
  chosen: {
    backgroundColor: '#D3D3D3'
  },
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Category = props => {
  const classes = useStyles();
  const [colorClass, setColorClass] = useState(classes.default);

  useEffect(() => {
    if (props.category.isChosen) {
      setColorClass(classes.chosen)
    }
    else {
      setColorClass('')
    }
  }, [props.category.isChosen, classes.chosen])

  const ChooseCategoryHandler = e => {
    props.onChooseCategory(props.category.id)
  }
  return (
    <Card className={classes.root + ' ' + colorClass}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {"Category " + props.numOfCat}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {"Name: " + props.category.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={ChooseCategoryHandler}>Choose it</Button>
      </CardActions>
    </Card>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onChooseCategory: (id) => dispatch({ type: actionTypes.CHOOSE_CATEGORY, id: id })
  }
}

export default connect(null, mapDispatchToProps)(Category);
