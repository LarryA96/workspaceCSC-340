//Function to format and insert image

function Image({ src, alt, caption }) {
  return (
    <div class="card" style={{ width: "18rem", margin: "0% 1%" }}>
      <img src={src} class="card-img-top" alt={alt} />
      <div class="card-body">
        <p class="card-text">{caption}</p>
      </div>
    </div>
  );
}

export default Image;
