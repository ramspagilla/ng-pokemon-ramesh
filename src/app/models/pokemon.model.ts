export interface PokemonResponse {
    count: number;
    next: string;
    prev: string;
    results: Pokemon[];
}
export interface Pokemon {
    id?: number;
    name: string;
    url: string;
    imageUrl: string,
    types?: PokemonTypes[];
    stats?: PokemonStats[];
    height?: string;
    weight?: string;
    abilities?: PokemonAbilities[];
    base_experience?: string;
    moves?: PokemonMoves[];
    pokeImage: string
}
export interface PokemonTypes {
    name: string;
}
export interface PokemonStats {
    base_state: number;
    stat: PokemonStateName;
}
export interface PokemonStateName {
    name: string;
}
export interface PokemonTypes {
    type: PokemonTypeName;
}
export interface PokemonTypeName {
    name: string;
}

export interface PokemonAbilities {
    ability: PokemonAbilityName;
}
export interface PokemonAbilityName {
    name: string;
}
export interface PokemonMoves {
    move: PokemonMoveName;
}
export interface PokemonMoveName {
    name: string;
}