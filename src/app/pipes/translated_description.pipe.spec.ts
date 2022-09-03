import { BasicURL } from "../models/basic_url.model";
import { Description } from "../models/description.model";
import { Name } from "../models/name.model";
import { GetTranslatedDescription } from "./translated_description.pipe";

describe('GetTranslatedDescription', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new GetTranslatedDescription();
  let descriptions: Description[] = [
    {
      language: new BasicURL("","es"),
      description: "Generación 1",
    },
    {
      language: new BasicURL("","en"),
      description: "Generation 1",
    }
  ]

  it('transforms a name to spanish', () => {
    expect(pipe.transform(descriptions,"es")).toBe("Generación 1");
  });

  it('return en when language not found', () => {
    expect(pipe.transform(descriptions,"jpn")).toBe("Generation 1");
  });

  it('return empty when language not found and english is not present', () => {
    let descriptions: Description[] = [
      {
        language: new BasicURL("","es"),
        description: "Generación 1",
      }
    ]
    expect(pipe.transform(descriptions,"jpn")).toBe("");
  });

  // ... more tests ...
});
