import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { stripHtml } from '../../functions/helper-functions';

const styles = theme => ({
  card: {
    maxWidth: 400,
    float: 'left',
    margin: '2rem 1rem'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class PostItem extends React.Component {
  state = {
    isLoaded: false,
    expanded: false
  };
  static propTypes = {
    post: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.setState({
      isLoaded: true
    });
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    const { isLoaded } = this.state;
    const { id, title, content, date, excerpt } = this.props.post;
    console.log('TCL: PostItem -> render -> isLoaded', isLoaded);

    if (isLoaded) {
      return (
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {id}
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={title.rendered}
            subheader={date}
          />
          <CardMedia
            className={classes.media}
            image="/static/images/cards/paella.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography component="p">
              {excerpt.rendered !== ''
                ? stripHtml(excerpt.rendered)
                : 'No excerpt'}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="2000" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                {content.rendered !== ''
                  ? stripHtml(content.rendered)
                  : 'No excerpt'}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      );
    }
    return <h3>Loading...</h3>;
  }
}

PostItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostItem);
