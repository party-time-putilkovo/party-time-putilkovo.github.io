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
      'Red Dead Redemption 2: Ultimate Edition',
      'Grand Theft Auto V',
      'Ведьмак 3: Дикая Охота',
      'God of War',
      "Ghost of Tsushima: Director's Cut",
      ['Resident Evil 2', 'Resident Evil 3', 'Resident Evil 4', 'Resident Evil Village: Gold Edition'],
      ['Uncharted 4: Путь вора', 'Uncharted: The Lost Legacy'],
      'Batman: Рыцарь Аркхэма',
      ['Battlefield V', 'Battlefield 1', 'Battlefield 4', 'Battlefield Hardline'],
      ['Need for Speed', 'Need for Speed Payback', 'Need for Speed Rivals'],
      'Mafia III: Definitive Edition',
      'Persona 5 Royal',
      'Metro Exodus',
      'Ratchet & Clank',
      ["Assassin's Creed Unity", "Assassin's Creed Mirage"],
      ['Far Cry 5', 'Far Cry 6'],
      ['Life is Strange', 'Life is Strange: Before the Storm', 'Life is Strange 2'],
      ['Little Nightmares', 'Little Nightmares II', 'Little Nightmares III'],
      'Unravel',
      'Subnautica',
      'Kingdom Come: Deliverance Royal Edition',
      ['Final Fantasy XV', "A King's Tale: Final Fantasy XV"],
      'Yakuza 6: Song of Life',
      'Hitman',
      'Riders Republic',
      'The Crew',
      'Until Dawn',
      'The Order: 1886',
    ],
  },
  {
    id: 'party',
    title: 'Игры в паре или на компанию',
    games: [
      'Unravel Two',
      'F1 23',
      'Enter the Gungeon',
      'Dead or Alive 5 Last Round',
    ],
  },
  {
    id: 'other',
    title: 'Другие игры',
    games: [
      'A Plague Tale: Innocence',
      ['SnowRunner', 'MudRunner'],
      'The Dark Pictures Anthology',
      'Project CARS',
      'The Council',
      "King's Quest",
      'Commandos 3',
      'Hatsune Miku: Project DIVA Future Tone',
      'Journey',
      'ABZÛ',
      'Island Saver',
      'Syberia: The World Before',
    ],
  },
];

const gameCategoriesElement = document.querySelector('#game-categories');
const gamesCount = document.querySelector('#games-count');
const gamesInCategory = (category) => category.games.reduce((total, game) => total + (Array.isArray(game) ? game.length : 1), 0);
const totalGames = gameCategories.reduce((total, category) => total + gamesInCategory(category), 0);

gameCategoriesElement.innerHTML = gameCategories
  .map(
    (category) => `
      <section class="game-category ${category.id}">
        <div class="game-category-heading">
          <h4>${category.title}</h4>
          <span>${gamesInCategory(category)}</span>
        </div>
        <ul class="game-list">
          ${category.games
            .map((game) => {
              const series = Array.isArray(game) ? game : [game];
              return `<li class="${series.length > 1 ? 'game-series' : ''}">${series.map((title) => `<span>${title}</span>`).join('')}</li>`;
            })
            .join('')}
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
