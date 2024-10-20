import { Page } from '@/shared/ui/Page/Page';
import { HeaderSection } from '../HeaderSection/HeaderSection';
import { TestsSection } from '../TestsSection/TestsSection';

export const TestsPage = () => {
  return (
    <Page>
      <HeaderSection />
      <TestsSection />
      <TestsSection />
    </Page>
  );
};
