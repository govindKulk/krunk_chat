export const getCurrentFormatedTime = () => {
    const hrAndMin = new Date().toString().split(" ").slice(4,5)[0].split(":").slice(0,2);
    const timeIndicator = hrAndMin[0] >= 12 ? 'PM': 'AM';
    const formattedTime = `${hrAndMin[0] % 12} ${hrAndMin[1]} ${timeIndicator}`;
    return formattedTime;
}