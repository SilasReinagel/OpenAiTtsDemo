// @ts-check
import { createOpenAi } from "./openaiClient";

describe('open ai client', () => {
  it('create open ai client', () => {
    const openAi = createOpenAi();
    expect(openAi).toBeDefined();
  });
});
