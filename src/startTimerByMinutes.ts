import { checkForOverlyLoudAlert, startTimer } from "./backend/timerBackend";

export default async (props: { arguments: { value: number } }) => {
  if (!checkForOverlyLoudAlert()) return;
  await startTimer({ timeInSeconds: props.arguments.value * 60, timerName: "10 Minute Timer" });
};
