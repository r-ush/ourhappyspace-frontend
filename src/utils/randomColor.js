const randomColor = () => {
    const colors = ["#20639b", "#3caea3", "#f6d55c", "#ed553b"];
    return colors[Math.floor(Math.random() * colors.length)];
};

export default randomColor;
