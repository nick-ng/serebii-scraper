import { JSDOM } from "jsdom";

const BASE_URL = "https://serebii.net";

export const listPokemon = async (
  basePath: string
): Promise<{ path: string; display: string }[]> => {
  try {
    const dom = await JSDOM.fromURL([BASE_URL, basePath].join("/"));

    const {
      window: { document },
    } = dom;

    const optionEls = document.querySelectorAll(
      'form[name="galar"] select option'
    );

    return [...optionEls]
      .map((o) => {
        const { value, textContent } = o as unknown as {
          value: string;
          textContent: string;
        };
        return { path: value, display: textContent };
      })
      .filter((p) => p.path.startsWith(`/${basePath}/`))
      .map((p) => p);
  } catch (e) {
    return [];
  }
};
