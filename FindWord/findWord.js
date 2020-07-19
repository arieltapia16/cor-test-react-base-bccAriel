import React from 'react';
import resourcesData from '../assets/resources.json';


const FindWord = () => {

  const findWordFunction = () =>{
    let matrixCount = [];

    resourcesData.resources.map( (matrix, index) => {
      let matrixGroup = [];
      let count = 0;
      for (let x = 0; x < matrix.length; x++) {
        // console.log(matrix)
        for (let y = 0; y < matrix[x].length; y++) {
          if (matrix[x][y] === 'O') {

            // right
            if (matrix[x][y + 1] === 'I') {
              if (matrix[x][y + 2] === 'E') {
                count++
              }
            }
            // bottom
            if(matrix[x+1]) {
              // right bottom
              if (matrix[x+1][y + 1] === 'I') {
                if (matrix[x+2][y + 2] === 'E') {
                  count++
                }
              }
              // bottom bottom
              if (matrix[x + 1][y] === 'I') {
                if (matrix[x + 2][y] === 'E') {
                  count++
                }
              }
            }
            // left
            if (matrix[x][y - 1]) {
              // left bottom
              if (matrix[x + 1] && matrix[x - 1][y - 1] === 'I') {
                if (matrix[x + 1][y - 2] && matrix[x - 1][y - 2] === 'E') {
                  count++
                }
              }
              // left left
              if (matrix[x][y - 1] === 'I') {
                if (matrix[x][ y - 2] && matrix[x][y - 2] === 'E') {
                  count++
                }
              }
            }

            //top
            if (matrix[x - 1]) {
              // top left
              if (matrix[x - 1][y - 1] && matrix[x - 1][y - 1] === 'I') {
                if (matrix[x - 1][y - 2] && matrix[x - 1][y - 2] === 'E') {
                  count++
                }
              }
              //top top
              if (matrix[x - 1][y] && matrix[x - 1][y] === 'I') {
                if (matrix[x - 2][y] && matrix[x - 2][y] === 'E') {
                  count++
                }
              }
              //top right
              if (matrix[x - 1][y + 1] && matrix[x - 1][y + 1] === 'I') {
                if (matrix[x - 2][y + 2] && matrix[x - 2][y + 2] === 'E') {
                  count++
                }
              }
            }
          }
        }
      }
      matrixCount[index] = count;
    })
    return ( 
      matrixCount.map( (item, index) => (
        <div key={index} style={style.item}>
          {`Sopa de letras ${index + 1 }: ` }
          <div style={ style.numberResult}>
            {`${item} Apariciones`}
          </div>
        </div>
      ))
    )     
  } 


  return(
    <div style={style.result}>{findWordFunction()}</div>
  )
}
const style = {
  result: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 30px',
    flexDirection: 'column',
  },
  item: {
    display: 'flex',
    width: '100%',
    padding: '10px',
  },
  numberResult: {
    marginLeft: 10
  }
}

export default FindWord;