import classes  from './post.module.css'
export default function Post(props) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.content}</p>
    </li>
  );
}