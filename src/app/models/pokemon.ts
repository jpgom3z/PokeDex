export interface pokemonData {
    results : Pokemon[];
}

export interface Pokemon {
    name : string;
    height : number;
    weight : number;
    // sprites : Sprites[];
    // types: Types[];
}

// export interface Types {
//     types: {
//         type: {
//             name: string;
//             url: string;
//           };
//     };
// }

// export interface Sprites {
//     sprites: {
//         other: {
//             'official-artwork': {
//                 'font_default': string;
//             };
//         };
//     };
// }
