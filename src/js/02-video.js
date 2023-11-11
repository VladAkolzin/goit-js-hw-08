import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const keyCurrentTime = 'videoplayer-current-time';
const userVideoTime = localStorage.getItem(keyCurrentTime);
if (userVideoTime) {
  player.setCurrentTime(userVideoTime);
}
const findTime = function (data) {
  const currentTime = data.seconds;
  localStorage.setItem(keyCurrentTime, currentTime);
};
player.on('timeupdate', throttle(findTime, 1000));
