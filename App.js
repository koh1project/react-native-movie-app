import { Header } from "./components";
import { NativeBaseProvider } from "native-base";

import { Form } from "./components/forms";

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
    </NativeBaseProvider>
  );
}
