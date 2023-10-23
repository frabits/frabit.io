import Team from '@/components/pages/about/team';
import Company from '@/components/pages/about/company';
import Join from '@/components/pages/about/joinus';

const AboutUsPage = () => {
    return (
        <>
            <h1 className="sr-only">About us</h1>
            <Company />
            <Team />
            <Join />
        </>
    );
};

export default AboutUsPage;
