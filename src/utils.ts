import Blockquote from "@/components/Blockquote.astro";
import Link from "@/components/Link.astro";
import List from "@/components/List.astro";
import ListItem from "@/components/ListItem.astro";
import Paragraph from "@/components/Paragraph.astro";
import Subtitle from "@/components/Subtitle.astro";
import Title from "@/components/Title.astro";

export default {
  a: Link,
  blockquote: Blockquote,
  h1: Title,
  h2: Subtitle,
  ul: List,
  li: ListItem,
  p: Paragraph,
};
