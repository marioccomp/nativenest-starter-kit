import "../../global.css";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css";

export default function RootLayout(): React.JSX.Element {
  return (
    <>
      <StatusBar style="light" />
      <GluestackUIProvider mode="dark">
        <Slot />
      </GluestackUIProvider>
    </>
  );
}
