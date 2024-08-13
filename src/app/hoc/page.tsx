import WithStyles from '@/components/HOC/WithStyles/WithStyles';
import { Button } from '@/components/HOC/WithStyles/Button';
import { Text } from '@/components/HOC/WithStyles/Text';

const StyledButton = WithStyles(Button);
const StyledText = WithStyles(Text);

export default function HOC() {
  return (
    <main>
      <StyledButton />
      <StyledText />
    </main>
  );
}
