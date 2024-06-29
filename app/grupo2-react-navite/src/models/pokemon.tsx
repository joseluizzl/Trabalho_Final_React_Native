export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    other: {
      showdown: {
        front_default: string | null;
      };
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}