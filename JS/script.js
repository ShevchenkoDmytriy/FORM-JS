// 1 //
// $(document).ready(function() {
//     var messages = [];
//     function displayMessages() {
//         var messageList = $('#messageList');
//         messageList.empty();
//         for (var i = 0; i < messages.length; i++) {
//             var message = messages[i];
//             var messageItem = $('<div class="message"></div>');
//             messageItem.text(message.author + ': ' + message.message);
//             messageList.append(messageItem);
//         }
//     }
//     $('#messageForm').submit(function(event) {
//         event.preventDefault();
//         var author = $('#author').val();
//         var message = $('#message').val();
//         var newMessage = {
//             author: author,
//             message: message
//         };
//         messages.push(newMessage);
//         displayMessages();
//         $('#author').val('');
//         $('#message').val('');
//     });
// });


// 2 //
// $(document).ready(function() {
//     $('#submitBtn').click(function() {
//         var answers = [];
//         $('input[type="radio"]:checked').each(function() {
//             answers.push($(this).val());
//         });
//         var correctAnswers = ["option2", "option1"];
//         var score = 0;
//         for (var i = 0; i < correctAnswers.length; i++) {
//             if (answers[i] === correctAnswers[i]) {
//                 score++;
//             }
//         }
//         $('#score').text('Кількість правильних відповідей: ' + score);
//         $('#result').show();
//         $('#test').hide();
//     });
// });

// 3 //
// $(document).ready(function() {
//     $('#textForm').submit(function(event) {
//         event.preventDefault();
//         var text = $('#textInput').val();
//         var color = $('#colorInput').val();
//         var size = $('#sizeInput').val();
//         var bold = $('#boldInput').prop('checked');
//         var italic = $('#italicInput').prop('checked');
//         var styles = [];
//         if (color) {
//             styles.push('color: ' + color);
//         }
//         if (size) {
//             styles.push('font-size: ' + size + 'px');
//         }
//         if (bold) {
//             styles.push('font-weight: bold');
//         }
//         if (italic) {
//             styles.push('font-style: italic');
//         }
//         var outputHTML = '<span style="' + styles.join(';') + '">' + text + '</span>';
//         $('#outputText').html(outputHTML);
//         $('#outputContainer').show();
//     });
// });

// 4 //
// $(document).ready(function() {
//     $('#orderForm').submit(function(event) {
//         event.preventDefault();

//         var book = $('#bookSelect').val();
//         var quantity = $('#quantityInput').val();
//         var name = $('#nameInput').val();
//         var deliveryDate = $('#deliveryDateInput').val();
//         var address = $('#addressInput').val();
//         var comment = $('#commentInput').val();

//         var confirmationMessage = name + ', спасибо за заказ. ' +
//             'Книга ' + book + ' (' + quantity + ' шт.) будет доставлена ' +
//             'в ' + deliveryDate + ' по адресу: ' + address + '.';

//         $('#confirmationMessage').text(confirmationMessage);
//         $('#orderConfirmation').show();
//     });
// });

// 5 //
// var attendanceData = [];
//         document.getElementById('attendanceForm').addEventListener('submit', function(event) {
//             event.preventDefault();
//             var group = document.getElementById('groupSelect').value;
//             var lecture = document.getElementById('lectureSelect').value;
//             var topic = document.getElementById('topicInput').value;
//             var students = [];
//             var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
//             for (var i = 0; i < checkboxes.length; i++) {
//                 students.push(checkboxes[i].value);
//             }
//             var attendance = {
//                 group: group,
//                 lecture: lecture,
//                 topic: topic,
//                 students: students
//             };
//             attendanceData.push(attendance);
//             displayAttendance(); 
//         });
//         function displayAttendance() {
//             var tableBody = document.getElementById('attendanceTable').getElementsByTagName('tbody')[0];
//             tableBody.innerHTML = '';
//             for (var i = 0; i < attendanceData.length; i++) {
//                 var attendance = attendanceData[i];
//                 var row = tableBody.insertRow();
//                 var groupCell = row.insertCell();
//                 var lectureCell = row.insertCell();
//                 var topicCell = row.insertCell();
//                 var studentsCell = row.insertCell();
//                 groupCell.textContent = attendance.group;
//                 lectureCell.textContent = attendance.lecture;
//                 topicCell.textContent = attendance.topic;
//                 studentsCell.textContent = attendance.students.join(', ');
//             }
//         }

// 5 //
// var bookingData = [];
// document.getElementById('bookingForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     var direction = document.getElementById('directionSelect').value;
//     var date = document.getElementById('dateInput').value;
//     var seats = [];
//     var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
//     for (var i = 0; i < checkboxes.length; i++) {
//         seats.push(checkboxes[i].value);
//     }
//     var booking = {
//         direction: direction,
//         date: date,
//         seats: seats
//     };
//     bookingData.push(booking);
//     displayBookings(); 
// });
// function displayBookings() {
//     var bookingList = document.getElementById('bookingList');
//     bookingList.innerHTML = '';
//     for (var i = 0; i < bookingData.length; i++) {
//         var booking = bookingData[i];
//         var listItem = document.createElement('li');
//         listItem.textContent = 'Направление: ' + booking.direction + ', Дата: ' + booking.date + ', Места: ' + booking.seats.join(', ');
//         bookingList.appendChild(listItem);
//     }
// }