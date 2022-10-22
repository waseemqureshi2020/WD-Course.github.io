const Teachers = [{
  teacherImage: './images/professor1.jpg',
  teacherName: 'Max Fischer',
  teacherDomain: 'Web Developer in XYZ Company',
  teacherAbout: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}, {
  teacherImage: './images/professor2.jpg',
  teacherName: 'Vini Dawid',
  teacherDomain: 'Web Developer in XYZ Company',
  teacherAbout: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}, {
  teacherImage: './images/professor3.jpg',
  teacherName: 'Ariana D Souza',
  teacherDomain: 'Web Developer in XYZ Company',
  teacherAbout: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}, {
  teacherImage: './images/professor4.jpg',
  teacherName: 'Mikhail Nilov',
  teacherDomain: 'Web Developer in XYZ Company',
  teacherAbout: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}, {
  teacherImage: './images/professor5.jpg',
  teacherName: 'Analiza Natalia',
  teacherDomain: 'Web Developer in XYZ Company',
  teacherAbout: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}, {
  teacherImage: './images/professor6.jpg',
  teacherName: 'Dean Jones',
  teacherDomain: 'Web Developer in XYZ Company',
  teacherAbout: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
},
];

const card = document.querySelector('.instructors-cards');

Teachers.forEach((cards) => {
  const div = document.createElement('div');
  div.innerHTML += `
  <div class="card2">
  <div id="cards2">
  <img src="${cards.teacherImage}">
  <div>
      <h3>${cards.teacherName}</h3>
      <h5>${cards.teacherDomain}</h5>
      <p>${cards.teacherAbout}</p>
  </div>
  </div>
  `;
  card.append(div);
});