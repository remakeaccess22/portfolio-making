import { useEffect } from "react";
import { getHeadTags, getPageMetadata } from "../../data/seo";

export function usePageMetadata(pathname) {
  useEffect(() => {
    const tags = getHeadTags(getPageMetadata(pathname));
    document.head.querySelectorAll("[data-page-seo]").forEach(element => element.remove());
    for (const { tag, text, ...attributes } of tags) {
      const element = document.createElement(tag);
      element.setAttribute("data-page-seo", "");
      for (const [name, value] of Object.entries(attributes)) element.setAttribute(name, value);
      if (text) element.textContent = text;
      document.head.appendChild(element);
    }
  }, [pathname]);
}
