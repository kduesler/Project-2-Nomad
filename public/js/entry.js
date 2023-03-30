const submitRatingHandler = async (event) => {
  event.preventDefault();
  
  const nightRating = document.querySelector("#night").value;
  const affordRating = document.querySelector("#aff").value;
  const diningRating = document.querySelector("#dining").value;
  const transportRating = document.querySelector("#transport").value;
  const familyRating = document.querySelector("#family").value;
  const natureRating = document.querySelector("#nature").value;
  const weatherRating = document.querySelector("#weather").value;
  const activitiesRating = document.querySelector("#activities").value;

  const response = await fetch("/api/entry", {
    method: "POST",
    body: JSON.stringify({ cityName, nightRating, affordRating, diningRating, transportRating, familyRating, natureRating, weatherRating, activitiesRating}),
    headers: {
        "Content-Type": "application/json",
      },
  });
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to update post');
  }
};

document
  .querySelector(".city-submit")
  .addEventListener("click", submitRatingHandler);
