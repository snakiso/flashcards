import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox/Checkbox";
import { Typography } from "@/components/ui/typography/Typography";

export function App() {
  return (
    <div>
      <Typography as={"h1"} variant={"h1"}>
        Hello
      </Typography>
      <Button as={"button"}>Some text</Button>
      <Checkbox label={"hello"} />
    </div>
  );
}
