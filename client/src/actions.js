export const listStudios = (studios) => ({
    type: 'LIST_STUDIOS',
    studios: studios,
  });

// export const listCoordinates = (coordlist) => ({
//   type: 'LIST_COORDS',
//   coordinates: coordlist,
// });

export const setCoord = (coords) => ({
      type: 'SET_COORDS',
      coords: coords,
    });
