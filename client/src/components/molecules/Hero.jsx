const Hero = (props) => {
  return (
    <>
      <div
        class="hero d-flex align-items-center justify-content-center"
        style={{ height: "250px" }}
      >
        <p class="text-light fs-1">{props.text}</p>
      </div>
      <h2 class="fs-2 text-center my-3">Akwaaba has reopened!</h2>
    </>
  );
};
export default Hero;
