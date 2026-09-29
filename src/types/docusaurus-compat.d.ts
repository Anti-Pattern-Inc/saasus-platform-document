import type { ReactElement } from "react";
import type { TranslateProps } from "@docusaurus/Translate";
import type { Props as LayoutProps } from "@theme/Layout";

// TypeScript 4.x requires JSX components to return ReactElement rather than
// ReactNode. These components render elements at runtime. Remove these
// overloads when TypeScript is upgraded to 5.1 or later.
declare module "@docusaurus/Translate" {
  export default function Translate<Str extends string>(
    props: TranslateProps<Str>
  ): ReactElement;
}

declare module "@theme/Layout" {
  export default function Layout(props: LayoutProps): ReactElement;
}
