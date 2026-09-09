const socialLinks = {
  vk: 'https://vk.ru/party_time_putilkovo',
  telegram: 'https://t.me/Eric_Basharov',
  max: 'https://max.ru/u/f9LHodD0cOIm6w8u7BYqkFed8NZUrTH3wXv9l7pzClJ_2CmdAawKWA5hdjQ',
};

// Чтобы обновить каталог, добавляйте, переименовывайте или удаляйте игры
// в нужной категории ниже. Счётчик в шапке каталога пересчитается сам.
const gameCategories = [
  {
    id: 'deluxe',
    title: 'PS Plus Deluxe',
    note: 'Главные хиты каталога — и ещё 600+ игр.',
    games: [
      'Detroit: Become Human',
      'Cyberpunk 2077',
      "Marvel's Spider-Man: Game of the Year Edition",
      'Horizon Zero Dawn: Complete Edition',
      'The Last of Us Part II',
      'Far Cry 3 Classic Edition',
      'Far Cry 4',
      'Far Cry 5',
      'Far Cry 6',
      'The Elder Scrolls V: Skyrim Special Edition',
      'The Exit 8',
      'Tomb Raider: Definitive Edition',
      'Rise of the Tomb Raider: 20 Year Celebration',
      'Shadow of the Tomb Raider',
      'Days Gone',
      'Death Stranding',
      "Ghost of Tsushima: Director's Cut",
      'God of War',
      'Kingdom Come: Deliverance',
      'Sackboy: A Big Adventure',
      'Overcooked! All You Can Eat',
      "Assassin's Creed IV Black Flag",
      "Assassin's Creed Unity",
      "Assassin's Creed Syndicate",
      "Assassin's Creed Origins",
      "Assassin's Creed Odyssey",
      "Assassin's Creed Valhalla",
      'Watch Dogs 2',
      'Tom Clancy’s The Division 2',
      'DOOM Eternal',
    ],
  },
  {
    id: 'ea',
    title: 'EA Play',
    note: 'Хиты из The Play List и ещё десятки игр EA.',
    games: [
      'EA Sports FC 25',
      'F1 24',
      'Battlefield 2042',
      'Battlefield V',
      'Need for Speed Heat',
      'Need for Speed Hot Pursuit Remastered',
      'Need for Speed Payback',
      'Star Wars Jedi: Fallen Order',
      'Star Wars: Squadrons',
      'Mass Effect Legendary Edition',
      'Titanfall 2',
      'A Way Out',
      'It Takes Two',
      'Unravel',
      'Unravel Two',
      'Plants vs. Zombies: Battle for Neighborville',
    ],
  },
  {
    id: 'owned',
    title: 'Купленные игры',
    games: [
      'Red Dead Redemption 2: Ultimate Edition',
      'Grand Theft Auto V',
      'Ведьмак 3: Дикая Охота',
      'God of War',
      "Ghost of Tsushima: Director's Cut",
      ['Resident Evil 2', 'Resident Evil 3', 'Resident Evil 4', 'Resident Evil Village: Gold Edition'],
      ['Uncharted 4: Путь вора', 'Uncharted: Потерянное наследие'],
      'Batman: Рыцарь Аркхэма',
      'Battlefield: 1, 4, Hardline и V',
      ['Need for Speed', 'Need for Speed Payback', 'Need for Speed Rivals'],
      'Mafia III: Definitive Edition',
      'Persona 5 Royal',
      'Metro Exodus',
      'Ratchet & Clank',
      ["Assassin's Creed Unity", "Assassin's Creed Mirage"],
      ['Far Cry 5', 'Far Cry 6'],
      ['Life is Strange', 'Life is Strange: Before the Storm', 'Life is Strange 2'],
      'Little Nightmares',
      'Unravel',
      'Subnautica',
      'Kingdom Come: Deliverance Royal Edition',
      'Final Fantasy XV',
      'Yakuza 6: Song of Life',
      'Hitman',
      'Until Dawn',
    ],
  },
  {
    id: 'party',
    title: 'Игры в паре или на компанию',
    note: 'Лучшее из PS Plus Deluxe и EA Play для вечера на одной консоли.',
    games: [
      'It Takes Two',
      'Unravel Two',
      'EA Sports FC 25',
      'F1 24',
      'A Way Out',
      'Sackboy: A Big Adventure',
      'Overcooked! All You Can Eat',
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
        </div>
        ${category.note ? `<p class="game-category-note">${category.note}</p>` : ''}
        <ul class="game-list">
          ${category.games.flat().map((game) => `<li>${game}</li>`).join('')}
        </ul>
      </section>`,
  )
  .join('');

gamesCount.textContent = `${totalGames} игр`;

// Каталог теперь заметно длиннее первого варианта лендинга. Фоновый слой
// подстраивается под фактическую высоту страницы, чтобы паттерны не обрывались.
const patternLayer = document.querySelector('.pattern-layer');
const updatePatternLayerHeight = () => {
  if (!patternLayer) return;
  patternLayer.style.height = `${Math.max(2300, document.documentElement.scrollHeight)}px`;
};

updatePatternLayerHeight();
window.addEventListener('load', updatePatternLayerHeight);
window.addEventListener('resize', updatePatternLayerHeight);

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
