const socialLinks = {
  vk: 'https://vk.ru/party_time_putilkovo',
  telegram: 'https://t.me/Eric_Basharov',
  max: 'https://max.ru/u/f9LHodD0cOIm6w8u7BYqkFed8NZUrTH3wXv9l7pzClJ_2CmdAawKWA5hdjQ',
};

// Чтобы обновить каталог, добавляйте, переименовывайте или удаляйте игры
// в нужной категории ниже. Счётчик в шапке каталога пересчитается сам.
const gameCategories = [
  {
    id: 'top',
    title: 'Самые топовые игры',
    games: [
      'God of War',
      "Ghost of Tsushima: Director's Cut",
      'Red Dead Redemption 2: Ultimate Edition',
      'Grand Theft Auto V',
      'Ведьмак 3: Дикая Охота',
      'Uncharted: The Nathan Drake Collection',
      "Uncharted 4: A Thief's End",
      'Uncharted: The Lost Legacy',
      'Resident Evil 2',
      'Resident Evil 3',
      'Resident Evil 4',
      'Resident Evil Village: Gold Edition',
      'Batman: Рыцарь Аркхэма',
      'Until Dawn',
      'Mafia III: Definitive Edition',
      'Persona 5 Royal',
      'Ratchet & Clank',
      'The Order: 1886',
      "Assassin's Creed Unity",
      "Assassin's Creed Mirage",
      'Metro Exodus',
      'Far Cry 5',
      'Far Cry 6',
      'Life is Strange',
      'Life is Strange: Before the Storm',
      'Life is Strange 2',
      'A Plague Tale: Innocence',
      'Final Fantasy XV',
      'Yakuza 6: Song of Life',
      'Kingdom Come: Deliverance Royal Edition',
      'Little Nightmares',
      'Little Nightmares II',
      'Little Nightmares III',
      'Subnautica',
      'Syberia: The World Before',
    ],
  },
  {
    id: 'party',
    title: 'Парные и мультиплеерные',
    games: [
      'Unravel',
      'Unravel Two',
      'Enter the Gungeon',
      'Battlefield 1',
      'Battlefield 4',
      'Battlefield Hardline',
      'Battlefield V',
      'Dead or Alive 5 Last Round',
      'Riders Republic',
      'The Crew',
      'Project CARS',
      'The Dark Pictures Anthology',
    ],
  },
  {
    id: 'other',
    title: 'Другие игры',
    games: [
      'ABZÛ',
      'Commandos 3',
      'Hitman',
      'Need for Speed',
      'Need for Speed Payback',
      'Need for Speed Rivals',
      'SnowRunner',
      'MudRunner',
      'The Council',
      "King's Quest",
      'Hatsune Miku: Project DIVA Future Tone',
      'Journey',
    ],
  },
];

const gameCategoriesElement = document.querySelector('#game-categories');
const gamesCount = document.querySelector('#games-count');
const totalGames = gameCategories.reduce((total, category) => total + category.games.length, 0);

gameCategoriesElement.innerHTML = gameCategories
  .map(
    (category) => `
      <section class="game-category ${category.id}">
        <div class="game-category-heading">
          <h4>${category.title}</h4>
          <span>${category.games.length}</span>
        </div>
        <ul class="game-list">
          ${category.games.map((game) => `<li>${game}</li>`).join('')}
        </ul>
      </section>`,
  )
  .join('');

gamesCount.textContent = `${totalGames} игр`;

const taglines = [
  'Пройди уже наконец эту игру',
  'Погоняй с друзьями в FIFA',
  'Осталось только найти друзей',
];
const tagline = document.querySelector('.changing-tagline');
let taglineIndex = 0;

setInterval(() => {
  tagline.classList.add('is-changing');
  setTimeout(() => {
    taglineIndex = (taglineIndex + 1) % taglines.length;
    tagline.textContent = taglines[taglineIndex];
    tagline.classList.remove('is-changing');
  }, 180);
}, 5000);

document.querySelectorAll('.social-button').forEach((button) => {
  button.addEventListener('click', () => {
    const network = button.classList.contains('vk') ? 'vk' : button.classList.contains('telegram') ? 'telegram' : 'max';
    const link = socialLinks[network];
    if (link) window.open(link, '_blank', 'noopener,noreferrer');
  });
});
