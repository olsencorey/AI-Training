export function MoodBoardItem({color, image, description}) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} alt={description} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  const moods = [
    {
      id: 1,
      color: "orange",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "Kayaking in paradise."
    },
    {
      id: 2,
      color: "blue",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "Tidal pools of beauty."
    },
    {
      id: 3,
      color: "green",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "Grass with poppies near the ocean."
    }

  ];
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        {moods.map(mood => (
          <MoodBoardItem
            key={mood.id}
            color={mood.color}
            image={mood.image}
            description={mood.description}
          />
        ))}
      </div>
    </div>
  );
}
