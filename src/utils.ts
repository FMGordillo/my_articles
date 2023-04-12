import List from '@/components/List.astro';
import Blockquote from '@/components/Blockquote.astro';
import Link from '@/components/Link.astro';
import Subtitle from '@/components/Subtitle.astro';
import Title from '@/components/Title.astro';

export default {
  a: Link,
  li: List,
  h1: Title,
  h2: Subtitle,
  blockquote: Blockquote,
}
