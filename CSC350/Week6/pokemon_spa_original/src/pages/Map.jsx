//Html for displaying the map page
function Map() {
  return (
    <div class="container mt-4">
      <h1>An Incredibly Diverse Region!</h1>
      <p>
        Pokemon Black & White marked the franchise's first story based in a
        region reflecting the United States.
      </p>
      <div id="map" class="row justify-content-center">
        <div class="card px-0" style={{ width: "40rem", margin: "0% 1%" }}>
          <img
            src="https://external-preview.redd.it/2HQlizsNo8HUaW9gp3kHkb5RKkc9q0sFznzIZHfp_08.jpg?auto=webp&s=132fb9e5c6c6ba7ce4e5f4e2ed895fe053017069"
            class="card-img-top"
            alt="Map of Unova"
          />
          <div class="card-body">
            <p class="card-text">
              Unova is based on the real world city of New York, USA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
