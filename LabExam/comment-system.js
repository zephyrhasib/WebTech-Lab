// comment-system.js

document.addEventListener("DOMContentLoaded", function () {
  // ---------------- Article 1 ----------------
  var article1Comments = [];
  var article1Ratings = [];

  var form1 = document.querySelector("#name1").closest(".comment-form");
  var name1 = document.querySelector("#name1");
  var email1 = document.querySelector("#email1");
  var comment1 = document.querySelector("#comment1");
  var rating1 = document.querySelectorAll('input[name="rating"][id$="1"]');
  var totalComments1 = document.querySelector(
    ".article-column:nth-child(1) .stat-box:nth-child(1) .stat-value"
  );
  var avgRating1 = document.querySelector(
    ".article-column:nth-child(1) .stat-box:nth-child(2) .stat-value"
  );
  var commentsList1 = document.querySelector(
    ".article-column:nth-child(1) .comments-list"
  );

  form1.addEventListener("submit", function (e) {
    e.preventDefault();

    var n = name1.value.trim();
    var em = email1.value.trim();
    var c = comment1.value.trim();
    var r = 0;

    for (var i = 0; i < rating1.length; i++) {
      if (rating1[i].checked) r = parseInt(rating1[i].value);
    }

    // Remove previous errors
    if (
      name1.nextElementSibling &&
      name1.nextElementSibling.classList.contains("error-message")
    )
      name1.nextElementSibling.remove();
    if (
      email1.nextElementSibling &&
      email1.nextElementSibling.classList.contains("error-message")
    )
      email1.nextElementSibling.remove();
    if (
      comment1.nextElementSibling &&
      comment1.nextElementSibling.classList.contains("error-message")
    )
      comment1.nextElementSibling.remove();

    var hasError = false;

    // Name validation
    if (n.length < 2 || n.length > 50) {
      var error = document.createElement("div");
      error.classList.add("error-message");
      error.textContent = "Name should be between 2 and 50 characters";
      name1.insertAdjacentElement("afterend", error);
      hasError = true;
    }

    // Email validation
    if (em && em.indexOf("@") === -1) {
      var error = document.createElement("div");
      error.classList.add("error-message");
      error.textContent = "Please enter a valid email address";
      email1.insertAdjacentElement("afterend", error);
      hasError = true;
    }

    // Comment validation
    if (c.length < 10 || c.length > 500) {
      var error = document.createElement("div");
      error.classList.add("error-message");
      error.textContent = "Comment should be between 10 and 500 characters";
      comment1.insertAdjacentElement("afterend", error);
      hasError = true;
    }

    if (hasError) return;

    // Save comment
    article1Comments.push({ name: n, comment: c, rating: r });
    if (r > 0) article1Ratings.push(r);

    // Update stats
    totalComments1.textContent = article1Comments.length;
    var sum = 0;
    for (var i = 0; i < article1Ratings.length; i++) sum += article1Ratings[i];
    avgRating1.textContent =
      article1Ratings.length > 0
        ? (sum / article1Ratings.length).toFixed(1)
        : "0.0";

    // Display comment
    var commentEl = document.createElement("div");
    commentEl.classList.add("comment-item");
    commentEl.innerHTML =
      "<strong>" + n + "</strong>" + (r ? " - ★" + r : "") + "<p>" + c + "</p>";

    var noComments = commentsList1.querySelector(".no-comments");
    if (noComments) noComments.remove();

    commentsList1.appendChild(commentEl);
    form1.reset();
  });

  // ---------------- Article 2 ----------------
  var article2Comments = [];
  var article2Ratings = [];

  var form2 = document.querySelector("#name2").closest(".comment-form");
  var name2 = document.querySelector("#name2");
  var email2 = document.querySelector("#email2");
  var comment2 = document.querySelector("#comment2");
  var rating2 = document.querySelectorAll('input[name="rating"][id$="2"]');
  var totalComments2 = document.querySelector(
    ".article-column:nth-child(2) .stat-box:nth-child(1) .stat-value"
  );
  var avgRating2 = document.querySelector(
    ".article-column:nth-child(2) .stat-box:nth-child(2) .stat-value"
  );
  var commentsList2 = document.querySelector(
    ".article-column:nth-child(2) .comments-list"
  );

  form2.addEventListener("submit", function (e) {
    e.preventDefault();

    var n = name2.value.trim();
    var em = email2.value.trim();
    var c = comment2.value.trim();
    var r = 0;

    for (var i = 0; i < rating2.length; i++) {
      if (rating2[i].checked) r = parseInt(rating2[i].value);
    }

    if (
      name2.nextElementSibling &&
      name2.nextElementSibling.classList.contains("error-message")
    )
      name2.nextElementSibling.remove();
    if (
      email2.nextElementSibling &&
      email2.nextElementSibling.classList.contains("error-message")
    )
      email2.nextElementSibling.remove();
    if (
      comment2.nextElementSibling &&
      comment2.nextElementSibling.classList.contains("error-message")
    )
      comment2.nextElementSibling.remove();

    var hasError = false;

    if (n.length < 2 || n.length > 50) {
      var error = document.createElement("div");
      error.classList.add("error-message");
      error.textContent = "Name should be between 2 and 50 characters";
      name2.insertAdjacentElement("afterend", error);
      hasError = true;
    }

    if (em && em.indexOf("@") === -1) {
      var error = document.createElement("div");
      error.classList.add("error-message");
      error.textContent = "Please enter a valid email address";
      email2.insertAdjacentElement("afterend", error);
      hasError = true;
    }

    if (c.length < 10 || c.length > 500) {
      var error = document.createElement("div");
      error.classList.add("error-message");
      error.textContent = "Comment should be between 10 and 500 characters";
      comment2.insertAdjacentElement("afterend", error);
      hasError = true;
    }

    if (hasError) return;

    article2Comments.push({ name: n, comment: c, rating: r });
    if (r > 0) article2Ratings.push(r);

    totalComments2.textContent = article2Comments.length;
    var sum = 0;
    for (var i = 0; i < article2Ratings.length; i++) sum += article2Ratings[i];
    avgRating2.textContent =
      article2Ratings.length > 0
        ? (sum / article2Ratings.length).toFixed(1)
        : "0.0";

    var commentEl = document.createElement("div");
    commentEl.classList.add("comment-item");
    commentEl.innerHTML =
      "<strong>" + n + "</strong>" + (r ? " - ★" + r : "") + "<p>" + c + "</p>";

    var noComments = commentsList2.querySelector(".no-comments");
    if (noComments) noComments.remove();

    commentsList2.appendChild(commentEl);
    form2.reset();
  });

  // ---------------- Article 3 ----------------
  var article3Comments = [];
  var article3Ratings = [];

  var form3 = document.querySelector("#name3").closest(".comment-form");
  var name3 = document.querySelector("#name3");
  var email3 = document.querySelector("#email3");
  var comment3 = document.querySelector("#comment3");
  var rating3 = document.querySelectorAll('input[name="rating"][id$="3"]');
  var totalComments3 = document.querySelector(
    ".article-column:nth-child(3) .stat-box:nth-child(1) .stat-value"
  );
  var avgRating3 = document.querySelector(
    ".article-column:nth-child(3) .stat-box:nth-child(2) .stat-value"
  );
  var commentsList3 = document.querySelector(
    ".article-column:nth-child(3) .comments-list"
  );

  form3.addEventListener("submit", function (e) {
    e.preventDefault();

    var n = name3.value.trim();
    var em = email3.value.trim();
    var c = comment3.value.trim();
    var r = 0;

    for (var i = 0; i < rating3.length; i++) {
      if (rating3[i].checked) r = parseInt(rating3[i].value);
    }

    if (
      name3.nextElementSibling &&
      name3.nextElementSibling.classList.contains("error-message")
    )
      name3.nextElementSibling.remove();
    if (
      email3.nextElementSibling &&
      email3.nextElementSibling.classList.contains("error-message")
    )
      email3.nextElementSibling.remove();
    if (
      comment3.nextElementSibling &&
      comment3.nextElementSibling.classList.contains("error-message")
    )
      comment3.nextElementSibling.remove();

    var hasError = false;

    if (n.length < 2 || n.length > 50) {
      var error = document.createElement("div");
      error.classList.add("error-message");
      error.textContent = "Name should be between 2 and 50 characters";
      name3.insertAdjacentElement("afterend", error);
      hasError = true;
    }

    if (em && em.indexOf("@") === -1) {
      var error = document.createElement("div");
      error.classList.add("error-message");
      error.textContent = "Please enter a valid email address";
      email3.insertAdjacentElement("afterend", error);
      hasError = true;
    }

    if (c.length < 10 || c.length > 500) {
      var error = document.createElement("div");
      error.classList.add("error-message");
      error.textContent = "Comment should be between 10 and 500 characters";
      comment3.insertAdjacentElement("afterend", error);
      hasError = true;
    }

    if (hasError) return;

    article3Comments.push({ name: n, comment: c, rating: r });
    if (r > 0) article3Ratings.push(r);

    totalComments3.textContent = article3Comments.length;
    var sum = 0;
    for (var i = 0; i < article3Ratings.length; i++) sum += article3Ratings[i];
    avgRating3.textContent =
      article3Ratings.length > 0
        ? (sum / article3Ratings.length).toFixed(1)
        : "0.0";

    var commentEl = document.createElement("div");
    commentEl.classList.add("comment-item");
    commentEl.innerHTML =
      "<strong>" + n + "</strong>" + (r ? " - ★" + r : "") + "<p>" + c + "</p>";

    var noComments = commentsList3.querySelector(".no-comments");
    if (noComments) noComments.remove();

    commentsList3.appendChild(commentEl);
    form3.reset();
  });
});
