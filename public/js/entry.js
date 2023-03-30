const submitCityRatingHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#city-entry").value.trim();

  const response = await fetch("/api/cities", {
    method: "POST",
    body: JSON.stringify({ name }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // if (response.ok) {
  //   document.location.replace('/');
  // } else {
  //   alert('Failed to update post');
  // }
};

const submitRatingHandler = async (event) => {
  event.preventDefault();

  const nightlife_rating = parseInt(document.querySelector("#night").value);
  const affordability_rating = document.querySelector("#aff").value;
  const dining_rating = document.querySelector("#dining").value;
  const transportation_rating = document.querySelector("#transport").value;
  const familyfriendly_rating = document.querySelector("#family").value;
  const nature_rating = document.querySelector("#nature").value;
  const weather = document.querySelector("#weather").value;
  const activities_rating = document.querySelector("#activity").value;

  const average_rating =
    (+nightlife_rating +
      +affordability_rating +
      +dining_rating +
      +transportation_rating +
      +familyfriendly_rating +
      +nature_rating +
      +weather +
      +activities_rating) /
    8;

  const response = await fetch("/api/entry", {
    method: "POST",
    body: JSON.stringify({
      average_rating,
      nightlife_rating,
      affordability_rating,
      dining_rating,
      transportation_rating,
      familyfriendly_rating,
      nature_rating,
      weather,
      activities_rating,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to update post");
  }
};

document
  .querySelector(".submit-rating")
  .addEventListener("submit", submitCityRatingHandler);

document
  .querySelector(".submit-rating")
  .addEventListener("submit", submitRatingHandler);
