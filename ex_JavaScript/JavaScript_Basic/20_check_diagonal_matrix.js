function is_diagonal_matrix(mtx) {
    for (let i = 0; i < mtx.length; i++) {
        for (let j = 0; j < mtx.length; j++) {
            if (i !== j && mtx[i][j] !== 0) return false;
            // i === j: là những tọa độ tại đường chéo
        }
    }
    return true;
}

console.log(is_diagonal_matrix([[1, 0, 0, 0], [0, 2, 0, 0], [0, 0, 3, 0], [0, 0, 0, 4]]));