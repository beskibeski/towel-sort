module.exports = towelSort = (matrix) =>
   matrix !== undefined && matrix.length > 0
    ? [...new Set(matrix.map((el, index) => index === 0 || index % 2 === 0 ? el : el.reverse()).flat())]
    : [];
