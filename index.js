const Box = (props) => {
  const { content, className } = props;
  return <div className={`box ${className}`}>{content}</div>;
};

const element = (
  <div className="boxes-container-bg">
    <h1 className="box-heading">Boxes</h1>
    <div className="boxes-container">
      <Box content="Small" className="small-box" />
      <Box content="Medium" className="medium-box" />
      <Box content="Large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
