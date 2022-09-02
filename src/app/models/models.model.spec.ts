import { BasicURL } from "./basic_url.model";
import { Generation } from "./generation.model";
import { Language } from "./language.model";
import { Name } from "./name.model";

describe('Models testing', () => {

  it('Create Models', () => {
    let language = new Language(1,"es",true,"Español","12345");
    expect(language).toBeDefined();

    let generation = new Generation(1,"gen 1",[]);
    expect(generation).toBeDefined();

    let basicUrl = new BasicURL("","");
    expect(basicUrl).toBeDefined();

    let name = new Name(basicUrl,"");
    expect(name).toBeDefined();
  });
});
