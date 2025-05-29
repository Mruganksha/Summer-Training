// Changes the content of the <h1> tag
export const updateHeading = (newText) => {
  const heading = document.querySelector('h1');
  if (heading) {
    heading.innerHTML = newText;
  }
};

// Generates a random hex color
export const getRandomColor = () => {
  const hexValues = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexValues[Math.floor(Math.random() * 16)];
  }
  return color;
};
