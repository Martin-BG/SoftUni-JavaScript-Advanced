function solve(input) {
  const that = this;

  const score = function (that) {
    let modifier = 0;
    if (that.upvotes + that.downvotes > 50) {
      modifier = Math.ceil(Math.max(that.upvotes, that.downvotes) * 0.25);
    }
    const up = that.upvotes;
    const down = that.downvotes;
    const score = up - down;
    const totalVotes = up + down;
    let rating = 'new';

    if (totalVotes >= 10) {
      if (up / totalVotes > 0.66) {
        rating = 'hot';
      } else if (score >= 0 && (up > 100 || down > 100)) {
        rating = 'controversial';
      } else if (score < 0) {
        rating = 'unpopular';
      }
    }
    return [up + modifier, down + modifier, score, rating];
  };

  switch (input) {
    case 'upvote':
      that.upvotes += 1;
      break;
    case 'downvote':
      that.downvotes += 1;
      break;
    case 'score':
      return score(that);
  }
}

const post = {
  id: '3',
  author: 'emil',
  content: 'wazaaaaa',
  upvotes: 100,
  downvotes: 100
};

solve.call(post, 'upvote');
solve.call(post, 'downvote');
console.log(solve.call(post, 'score'));
solve.call(post, 'downvote');
console.log(solve.call(post, 'score'));
