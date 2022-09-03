import { BasicURL } from "./basic_url.model";
import { Description } from "./description.model";
import { Generation } from "./generation.model";
import { Language } from "./language.model";
import { Name } from "./name.model";
import { Pokedex } from "./pokedex.model";
import { Region } from "./region.model";

describe('Models testing', () => {

  it('Create Models', () => {
    let basicUrl = new BasicURL("","");
    expect(basicUrl).toBeDefined();

    let language = new Language(1,"es",true,"Español","12345");
    expect(language).toBeDefined();

    let generation = new Generation(1,"gen 1",[],basicUrl);
    expect(generation).toBeDefined();

    let name = new Name(basicUrl,"");
    expect(name).toBeDefined();

    let desciption = new Description(basicUrl,"");
    expect(desciption).toBeDefined();

    let region = new Region(0,"",[],[basicUrl]);
    expect(region).toBeDefined();

    let pokedex = new Pokedex(0,[],true,[]);
    expect(pokedex).toBeDefined();
  });
});
