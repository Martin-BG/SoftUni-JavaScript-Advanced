const assert = require('chai').assert;
const expect = require('chai').expect;
const SoftUniFy = require('../app').SoftUniFy;

describe('SoftUniFy class', () => {
  let softUniFy = new SoftUniFy();

  beforeEach('init SoftUniFy class', () => {
    softUniFy = new SoftUniFy();
  });

  it('all songs should be empty on creation', () => {
    expect(softUniFy.allSongs).to.eql({});
  });

  it('downloadSong should work for new song', function () {
    softUniFy.downloadSong('artist', 'song', 'lyrics');
    expect(softUniFy.allSongs).to.eql(
      {
        'artist': {
          'rate': 0,
          'songs': [
            'song - lyrics'
          ],
          'votes': 0
        }
      });
  });

  it('songList after downloadSong should work for new song', function () {
    softUniFy.downloadSong('artist', 'song', 'lyrics');
    expect(softUniFy.songsList).to.eql('song - lyrics');
  });

  it('songList after downloadSong should work for two songs', function () {
    softUniFy.downloadSong('artist', 'song', 'lyrics');
    softUniFy.downloadSong('artist2', 'song2', 'lyrics2');
    assert.equal(softUniFy.songsList, 'song - lyrics\nsong2 - lyrics2');
  });

  it('songList should return correct message on empty list', function () {
    assert.equal(softUniFy.songsList, `Your song list is empty`);
  });

  it('playSong should return correct message on empty playlist', function () {
    assert.equal(softUniFy.playSong('unknown'), `You have not downloaded a unknown song yet. Use SoftUniFy's function downloadSong() to change that!`);
  });

  it('playSong should return correct message for valid song', function () {
    softUniFy.downloadSong('artist', 'song', 'lyrics');
    assert.equal(softUniFy.playSong('song'), 'artist:\nsong - lyrics\n');
  });

  it('rateArtist should return correct message for no artist', function () {
    assert.equal(softUniFy.rateArtist('Unknown'), `The Unknown is not on your artist list.`);
  });

  it('rateArtist should return correct message for valid artist', function () {
    softUniFy.downloadSong('artist', 'song', 'lyrics');
    softUniFy.rateArtist('artist', 5);
    assert.equal(softUniFy.rateArtist('artist'), 5);
  });
});

/*
downloadSong(artist, song, lyrics) adds the given information to the allSongs in format: artist: {rate: 0, votes: 0, songs: []}.
songs property, should contain all songs from the current artist in format:
[song1 - song1Lyrics, song2 - song2Lyrics....]
should return the entire Class.
 */
