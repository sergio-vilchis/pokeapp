import { BasicURL } from "../models/basic_url.model";
import { Name } from "../models/name.model";
import { GetTranslatedName } from "./translated_name.pipe";

describe('GetTranslatedName', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new GetTranslatedName();
  let names: Name[] = [
    {
      language: new BasicURL("","es"),
      name: "Generación 1"
    }
  ]

  it('transforms a name to spanish', () => {
    expect(pipe.transform(names,"es")).toBe("Generación 1");
  });

  it('return empty when language not found', () => {
    expect(pipe.transform(names,"jpn")).toBe("");
  });

  // ... more tests ...
});
