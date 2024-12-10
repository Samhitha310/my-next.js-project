import Nav from '../app/components/nav';
import SubNav from '../app/components/subnav';
import Home from '../app/components/home';
import Group from '../app/components/group';
import Description from '../app/components/description';
import Article from '../app/components/article';
import Ces from '../app/components/ces';
import On from '../app/components/on';
import Footer from '../app/components/footer';

export default function Page() {
  return (
    <div>
      <Nav />
      <SubNav />
      <Home />
      <Group />
      <Description />
      <Article />
      <Ces />
      <On />
      <Footer />
      
    </div>
  );
}
