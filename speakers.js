const personalities = [
  {
    id: '1',
    image: 'img/speaker1.jpeg',
    name: 'Dr. David Hanson',
    position: 'CEO Hanson Robotics',
    experience: 'The designer and researcher creates human-looking robots who have realistic facial expressions.',
  },

  {
    id: '2',
    image: 'img/speaker2.jpeg',
    name: 'Miguel Angel Indurain',
    position: 'Profesor Emérito en Grado a Quien Le Importa Universidad de Salamanca',
    experience: 'One of the most-cited and known authors on the economics of information',
  },
  {
    id: '3',
    image: 'img/speaker3.jpeg',
    name: 'Pedro Almodovar',
    position: 'CEO Future Robotics',
    experience: 'The designer and researcher creates human-looking robots who have realistic facial expressions.',
  },

  {
    id: '4',
    image: 'img/speaker4.jpeg',
    name: 'Priscilla Johnson',
    position: 'The Sloan School of Management MIT',
    experience: 'One of the most-cited and known authors on the economics of information',
  },

  {
    id: '5',
    image: 'img/speaker5.jpeg',
    name: 'Violeta Robertson',
    position: 'CEO Lumen Robotics',
    experience: 'The designer and researcher creates human-looking robots who have realistic facial expressions.',

  },

  {
    id: '6',
    image: 'img/speaker6.jpeg',
    name: 'Juan Carlos Fitzgerald',
    position: 'Fred and Eleanor Glimp Professor of Economics Harvard University',
    experience: 'One of the most-cited and known authors on the economics of information',
  },
];

const $speakers = document.querySelector('.speakers');
const $contSpeakerTitle = document.createElement('div');
const $SpeakerTitle = document.createElement('h6');
const $divisionTitle = document.createElement('hr');
$contSpeakerTitle.classList.add('speakerTitle');
const $newContent = document.createTextNode('Featured Speakers');
$SpeakerTitle.appendChild($newContent);
$contSpeakerTitle.appendChild($SpeakerTitle);
$contSpeakerTitle.appendChild($divisionTitle);
$speakers.appendChild($contSpeakerTitle);

// Display Speakers//

personalities.forEach((personality) => {
  // Elements//

  const $contSpeaker = document.createElement('div');
  const $contImage = document.createElement('div');
  const $image = document.createElement('img');
  const $contName = document.createElement('div');
  const $name = document.createElement('h4');
  const $contPosition = document.createElement('div');
  const $position = document.createElement('p');
  const $contDivision = document.createElement('div');
  const $division = document.createElement('hr');
  const $contText = document.createElement('div');
  const $text = document.createElement('p');

  // Classes //

  $contSpeaker.classList.add('speaker');
  $contImage.classList.add('cont-image');
  $image.classList.add('image');
  $contName.classList.add('cont-name');
  $name.classList.add('name');
  $contPosition.classList.add('cont-position');
  $contDivision.classList.add('contDivision');
  $position.classList.add('position');
  $contText.classList.add('cont-text');
  $text.classList.add('text');

  // Values
  $image.setAttribute('src', personality.image);
  $name.textContent = personality.name;
  $position.textContent = personality.position;
  $text.textContent = personality.experience;

  // Append elements

  $contImage.appendChild($image);
  $contName.appendChild($name);
  $contPosition.appendChild($position);
  $contDivision.appendChild($division);
  $contText.appendChild($text);
  $contSpeaker.appendChild($contImage);
  $contSpeaker.appendChild($contName);
  $contSpeaker.appendChild($contPosition);
  $contSpeaker.appendChild($contDivision);
  $contSpeaker.appendChild($contText);
  $speakers.appendChild($contSpeaker);
});