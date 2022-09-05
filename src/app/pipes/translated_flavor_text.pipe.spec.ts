import { BasicURL } from "../models/basic_url.model";
import { FlavorTextEntry } from "../models/flavor_text_entry.model";
import { Language } from "../models/language.model";
import { GetTranslatedFlavorText } from "./translated_flavor_text.pipe";

describe('GetTranslatedFlavorText', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new GetTranslatedFlavorText();
  let flavor_text_entries: FlavorTextEntry[] = [
    {
      language: new Language(),
      flavor_text: "Generación 1",
    },
    {
      language: new Language(),
      flavor_text: "Generation 1",
    }
  ]

  flavor_text_entries[0].language.name="es";
  flavor_text_entries[1].language.name="en";

  it('transforms a name to spanish', () => {
    expect(pipe.transform(flavor_text_entries,"es")).toBe("Generación 1");
  });

  it('return en when language not found', () => {
    expect(pipe.transform(flavor_text_entries,"jpn")).toBe("Generation 1");
  });

  it('return empty when language not found and english is not present', () => {
    let flavor_text_entries: FlavorTextEntry[] = [
      {
        language: new Language(),
        flavor_text: "Generación 1",
      }
    ]
    flavor_text_entries[0].language.name="es";
    expect(pipe.transform(flavor_text_entries,"jpn")).toBe("");
  });

  // ... more tests ...
});
