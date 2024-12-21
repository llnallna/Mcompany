// const cards = document.querySelectorAll(".card");

// cards.forEach((card, index) => {
//   card.addEventListener("click", () => {
//     // Tüm kartlardan 'selected' sınıfını kaldır
//     cards.forEach((c) => c.classList.remove("selected", "left", "right"));

//     // Tıklanan karta 'selected' sınıfını ekle
//     card.classList.add("selected");

//     // Diğer kartlara konum sınıfı ekle
//     if (cards[index - 1]) cards[index - 1].classList.add("left"); // Sol kart
//     if (cards[index + 1]) cards[index + 1].classList.add("right"); // Sağ kart
//   });
// });

// son denemesi

// const cards = document.querySelectorAll(".card");
// const leftArrow = document.querySelector(".left-arrow");
// const rightArrow = document.querySelector(".right-arrow");

// let currentIndex = 1;

// // Function to update the cards based on the current index
// function updateCards() {
//   cards.forEach((card, index) => {
//     card.classList.remove("selected", "left", "right");

//     if (index === currentIndex) {
//       card.classList.add("selected");
//     } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
//       card.classList.add("left");
//     } else if (index === (currentIndex + 1) % cards.length) {
//       card.classList.add("right");
//     }
//   });
// }

// // Initialize the first card view
// updateCards();

// // Event listener for clicking on cards
// cards.forEach((card, index) => {
//   card.addEventListener("click", () => {
//     currentIndex = index;
//     updateCards();
//   });
// });

// // Event listener for left arrow
// leftArrow.addEventListener("click", () => {
//   currentIndex = (currentIndex - 1 + cards.length) % cards.length;
//   updateCards();
// });

// // Event listener for right arrow
// rightArrow.addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % cards.length;
//   updateCards();
// });
