const poll = new Map();

function addOption(option) {
  // Check for empty option
  if (!option) {
    return 'Option cannot be empty.';
  }

  if (!poll.has(option)) {
    poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
  }

  return `Option "${option}" already exists.`;
}

function vote(option, voterId) {
  // Check for option exists in poll
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }
  
  // Get the set of voters for this option
  const voters = poll.get(option);
  // Check if voter has already voted for this option
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

function displayResults() {
  let results = 'Poll Results:\n';
  poll.forEach((voters, option) => {
    results += `${option}: ${voters.size} votes\n`;
  });
  return results.trim();
}

// Add options
console.log(addOption("Egypt"));
console.log(addOption("France"));
console.log(addOption("Spain"));

// Cast votes
vote('France', 'traveler1');
vote('Egypt', 'traveler2');
vote('Egypt', 'traveler3');

console.log(displayResults());
