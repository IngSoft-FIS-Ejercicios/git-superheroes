import type { Superhero } from "./Superhero";

export class SuperheroesList {
  private characters: Superhero[] = [
    
  ];

  getHeroes(): Superhero[] {
    return this.characters.filter((c) => c.side === "hero");
  }

  getVillains(): Superhero[] {
    return this.characters.filter((c) => c.side === "villain");
  }

  getAll(): Superhero[] {
    return this.characters;
  }
}
