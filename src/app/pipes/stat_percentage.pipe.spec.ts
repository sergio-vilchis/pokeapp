import { GetStatPercentage } from "./stat_percentage.pipe";
import { GetTranslatedDescription } from "./translated_description.pipe";

describe('getStatPercentage', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new GetStatPercentage();

  it('transforms 255 to 100', () => {
    expect(pipe.transform(255)).toEqual(100);
  });

  it('transforms 0 to 0', () => {
    expect(pipe.transform(0)).toEqual(0);
  });

  it('transforms 102 to 40', () => {
    expect(pipe.transform(102)).toEqual(40);
  });
});
