//  // Timer functionality
//  function updateTimer() {
//     const timerBoxes = document.querySelectorAll('.timer-box');
//     let [hours, minutes, seconds, milliseconds] = Array.from(timerBoxes).map(box => parseInt(box.textContent));
    
//     setInterval(() => {
//         milliseconds--;
//         if (milliseconds < 0) {
//             milliseconds = 99;
//             seconds--;
//             if (seconds < 0) {
//                 seconds = 59;
//                 minutes--;
//                 if (minutes < 0) {
//                     minutes = 59;
//                     hours--;
//                     if (hours < 0) {
//                         hours = 23; // Reset to 23 hours
//                     }
//                 }
//             }
//         }
        
//         timerBoxes[0].textContent = hours.toString().padStart(2, '0');
//         timerBoxes[1].textContent = minutes.toString().padStart(2, '0');
//         timerBoxes[2].textContent = seconds.toString().padStart(2, '0');
//         timerBoxes[3].textContent = milliseconds.toString().padStart(2, '0');
//     }, 10);
// }

// document.addEventListener('DOMContentLoaded', updateTimer);

// // Wishlist functionality
// document.querySelectorAll('.wishlist-btn').forEach(btn => {
//     btn.addEventListener('click', function() {
//         const icon = this.querySelector('i');
//         icon.classList.toggle('fas');
//         icon.classList.toggle('far');
//     });
// });