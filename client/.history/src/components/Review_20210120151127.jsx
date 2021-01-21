function Review(props) {
  const { title, ingredients, steps } = props.name.fields;
  return (
    <div>
      <h3>{title }</h3>
      <h4>{ingredients }</h4>
      <h5>{ steps}</h5>
    </div>
  );
}

export default Review;