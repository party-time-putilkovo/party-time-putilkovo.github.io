const socialLinks = {
  vk: 'https://vk.ru/party_time_putilkovo',
  telegram: 'https://t.me/Eric_Basharov',
  max: 'https://max.ru/u/f9LHodD0cOIm6w8u7BYqkFed8NZUrTH3wXv9l7pzClJ_2CmdAawKWA5hdjQ',
};

// Чтобы изменить коллекцию, просто добавьте, переименуйте или удалите строку ниже.
const games = [
  'RESIDENT EVIL 2 REMAKE',
  'RESIDENT EVIL 3 REMAKE',
  'BATTLEFIELD V',
  'ВЕДЬМАК 3: ДИКАЯ ОХОТА',
  'BATMAN: ARKHAM KNIGHT',
  "GHOST OF TSUSHIMA: DIRECTOR'S CUT",
  'RED DEAD REDEMPTION 2: ULTIMATE EDITION',
  'RESIDENT EVIL VILLAGE: GOLD EDITION',
  'KINGDOM COME: DELIVERANCE: ROYAL EDITION',
  'UNCHARTED: ПУТЬ ВОРА',
  'UNCHARTED: ПОТЕРЯННОЕ НАСЛЕДИЕ',
  'SYBERIA: THE WORLD BEFORE',
  'LITTLE NIGHTMARES',
  'UNRAVEL',
  'UNRAVEL TWO',
  'MUDRUNNER',
];

const gameList = document.querySelector('#game-list');
const gamesCount = document.querySelector('#games-count');
gameList.innerHTML = games.map((game) => `<li>${game}</li>`).join('');
gamesCount.textContent = `${games.length} игр`;

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
