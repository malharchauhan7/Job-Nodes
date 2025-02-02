export const upvote = (id) => {
    const votes = localStorage.getItem('votes')
      ? JSON.parse(localStorage.getItem('votes'))
      : {
          upvotes: [],
          downvotes: []
        };
  
    if (votes.upvotes.indexOf(id) !== -1) {
      return false;
    }
    votes.upvotes.push(id);
    const downVotes = votes.downvotes.filter(item => item !== id);
    votes.downvotes = downVotes;
  
    localStorage.setItem('votes', JSON.stringify(votes));
    return true;
  }
  
  export const downvote = (id) => {
    const votes = localStorage.getItem('votes')
      ? JSON.parse(localStorage.getItem('votes'))
      : {
          upvotes: [],
          downvotes: []
        };
  
    if (votes.downvotes.indexOf(id) !== -1) {
      return false;
    }
    votes.downvotes.push(id);
    const upVotes = votes.upvotes.filter(item => item !== id);
    votes.upvotes = upVotes;
  
    localStorage.setItem('votes', JSON.stringify(votes));
    return true;
  }
  
  export const checkIsAlreadyUpVoted = (id) => {
    const votes = JSON.parse(localStorage.getItem('votes')) || {
      upvotes: [],
      downvotes: []
    };
    return votes.upvotes.find(item => item === id);
  }
  
  export const checkIsAlreadyDownVoted = (id) => {
    const votes = JSON.parse(localStorage.getItem('votes')) || {
      upvotes: [],
      downvotes: []
    };
    return votes.downvotes.find(item => item === id);
  }
  